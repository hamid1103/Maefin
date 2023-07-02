<script lang="ts">
    import type {agent, response_newAgent} from "../core/api/spacetraders/agent/agent_types";
    import {api, API_URLS} from "../core/api/spacetraders/apiMain";
    import {MyAgent, MyToken, MyFaction, IsLoggedIn, MyShips} from "../core/stores";
    import type {faction} from "../core/api/spacetraders/faction/factions_types";
    import {faction_symbols} from "../core/api/spacetraders/faction/factions_types";
    import Modal from "../lib/Modal.svelte";
    import {createEventDispatcher} from "svelte";
    import Loader from "../lib/Loader.svelte";

    const dispatch = createEventDispatcher();

    let showModalRegister: boolean = false;
    let showModalLogin: boolean = false;
    let tokenStored
    export let curClass = 'Light';
    let loggedIn: boolean = $IsLoggedIn;
    if (localStorage.getItem("Token") !== null)
        tokenStored = true;

    function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
        return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
    }

    let faction_options = []
    for (let value in enumKeys(faction_symbols)) {
        faction_options.push(Object.keys(faction_symbols)[value])
    }

    function RegOptions(symbol: string, faction: string) {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                symbol: symbol,
                faction: faction,
            }),
        };
    }

    export let registration;

    function RegisterNewAgent(NewAgentSymbol: string, Faction: string) {
        registration = fetch(API_URLS.Register, RegOptions(NewAgentSymbol, Faction))
            .then(response => response.json())
            .then(response => {
                MyToken.set(response.token)
                MyAgent.set(response.agent)
                MyFaction.set(registration.faction)
                loggedIn = true
                localStorage.setItem('Token', MyToken.toString())
                console.log(response)
                showModalRegister = false
                IsLoggedIn.set(true)
            })
            .catch(err => {
                console.log(err)
                dispatch('error', {
                    data: err
                })
            })
    }

    function LogInFromToken() {
        LoginAgent(localStorage.getItem("Token"))
    }

    function LoginAgent(token: string) {
        registration = fetch(API_URLS.GetAgent, {
            method: 'GET',
            headers: {Accept: 'application/json', Authorization: 'Bearer ' + token}
        }).then(response => response.json())
            .then(response => {
                MyAgent.set(response.data)
                fetch(API_URLS.MyShips, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + $MyToken
                    }
                }).then(response=>response.json())
                    .then(res => MyShips.set(res.data))
                console.log(response)
                showModalLogin = false;
                loggedIn = true;
                IsLoggedIn.set(true)
                MyToken.set(token)
                console.log($MyToken)
            })
            .catch(err => {
                console.log(err)
                dispatch('error', {
                    data: err
                })
            })
    }



    function SubmitHandler(e) {
        let data = new FormData(e.target)
        console.log(data)
        RegisterNewAgent(data.get("Symbol").toString(), data.get("Faction").toString())
    }

    function SubmitHandlerLogin(e) {
        let data = new FormData(e.target)
        console.log(data)
        LoginAgent(data.get("Token").toString())
    }

    //ignore this naming sense I fucking suck
    const getStatus = (async () => {
        const res = await fetch(API_URLS.GetStatus, {
            method: 'GET',
            headers: {Accept: 'application/json', Authorization: 'Bearer ' + $MyToken}
        })
        return await res.json();
    })()


</script>

<div class="parent">
    <div class="div1 {curClass}" id="home-header">
        {#if !loggedIn}
            <button on:click={() => (showModalRegister = true)} class="UserButton"> Register</button>
            <button on:click={() => (showModalLogin = true)} class="UserButton"> Login</button>
        {/if}
        {#if loggedIn}
            <h2>{$MyAgent.symbol}</h2>
        {/if}
    </div>
    <div class="div2 {curClass}">
        {#if loggedIn}
            {#await getStatus}
                <Loader bind:curClass></Loader>
            {:then data}
                <div id="ServerGeneral">
                    <h2>General Info</h2><br>
                    <p><strong>Status:</strong> {data.status}</p>
                    <p><strong>Version:</strong> {data.version}</p>
                    <p><strong>Last Reset Date:</strong> {data.resetDate}</p>
                    <p><strong>Server Description:</strong> {data.description}</p>
                </div>
                <div id="ServerStats">
                    <h2>Server Stats</h2>
                    <p><strong>Agents:</strong> {data.stats.agents}</p>
                    <p><strong>Ships:</strong> {data.stats.ships}</p>
                    <p><strong>Systems:</strong> {data.stats.systems}</p>
                    <p><strong>Waypoints:</strong> {data.stats.waypoints}</p>
                </div>
                <div id="LeaderBoards">
                    <h2>Leader Boards</h2>
                    <p><strong>Most Credits:</strong></p>
                    <table>
                        {#each data.leaderboards.mostCredits as pl}
                            <tr>
                                <td>{pl.agentSymbol}</td>
                                <td>{pl.credits}</td>
                            </tr>
                            {/each}
                    </table> <br>
                    <p><strong>Most Submitted Charts:</strong></p>
                    <table>
                        {#each data.leaderboards.mostSubmittedCharts as pl}
                            <tr>
                                <td>{pl.agentSymbol}</td>
                                <td>{pl.chartCount}</td>
                            </tr>
                            {/each}
                    </table> <br>
                </div>
                <div id="ServerResets">
                    <h2>Server Resets</h2>
                    <p><strong>Next Reset:</strong> {data.serverResets.next}</p>
                    <p><strong>Reset Frequency:</strong> {data.serverResets.frequency}</p>
                </div>
                <div id="Announcements">
                    <h2>Announcements</h2>
                    {#each data.announcements as an}
                        <div class="announcement">
                            <h3>{an.title}</h3>
                            <p>{an.body}</p>
                        </div>
                        {/each}
                </div>
                <div id="links">
                    <h2>Links</h2>
                    {#each data.links as link}
                        <div class="Link">
                            <a href="{link.url}"><h3>{link.name}</h3></a>
                        </div>
                    {/each}
                </div>
            {:catch err}
            {/await}

        {/if}
    </div>
    <div class="div3 {curClass}">
        {#if loggedIn}
            <h2>Footer Shit</h2>
        {/if}
    </div>
    <div class="div4 {curClass}">
        {#if loggedIn}
            <h2>Main Content</h2>
        {:else }
            <Loader bind:curClass/>
        {/if}
    </div>
</div>

<Modal bind:showModal={showModalRegister}>
    <h2 slot="header">
        Register New Agent<br>
        <small>This agent will be your player character.</small>
    </h2>

    <form on:submit|preventDefault={SubmitHandler}>
        <label for="Symbol">Agent Symbol<br><small>aka Player Name. 3-14 characters</small></label><br>
        <input name="Symbol" id="Symbol" minlength="3" maxlength="14"/>
        <br>
        <label for="Faction">Faction <br> <small> Cosmic is recommended for new players</small></label>
        <br>
        <select id="Faction" name="Faction">
            {#each faction_options as fac}
                <option value="{fac}">{fac}</option>
            {/each}
        </select>
    </form>
</Modal>
<Modal bind:showModal={showModalLogin}>
    <h2 slot="header">
        Login
    </h2><br>

    {#if tokenStored}
        <button on:click={LogInFromToken}>Login from Stored Token</button>
        <br>
        <textarea>{localStorage.getItem("Token")}</textarea><br>
        <button on:click={()=>tokenStored=false}>Use another token</button>
    {:else }
        <form on:submit|preventDefault={SubmitHandlerLogin}>
            <label for="Token">Paste in your token</label>
            <br>
            <input id="Token" name="Token"/>
        </form>
    {/if}
</Modal>

<style>
    #home-header {
        display: flex;
    }

    .Light {
        background-color: #FFF7D4;
        color: #C07F00;
    }

    .Dark {
        background-color: #4C3D3D;
        color: #FFD95A;
    }

    .Light, .Dark {
        transition: 250ms;
    }

    .parent {
        left: 0;
        width: 94.9vw;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 4em 1fr 1fr 1fr 4em;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .div1 {
        grid-area: 1 / 1 / 2 / 6;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .div1 .UserButton {
        margin-left: 0.5rem;
        height: 2rem;
        width: 6.5rem;
    }

    .div1.Dark {
        border: #FFD95A 1px solid;
    }

    .div1.Light {
        border: #C07F00 1px solid;
    }

    .div2 {
        grid-area: 2 / 5 / 6 / 6;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .div2.Light {
        border-left: #C07F00 1px solid;
    }
    .div2.Dark{
        border-left: #FFD95A 1px solid;
    }

    .div3 {
        grid-area: 5 / 1 / 6 / 5;
    }

    .div4 {
        grid-area: 2 / 1 / 5 / 5;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>