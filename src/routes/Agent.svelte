<script>
    import {onMount} from "svelte";

    export let curClass;
    import {API_URLS} from "../core/api/spacetraders/apiMain";
    import {get} from "svelte/store";
    import {MyToken, MyAgent, MyFaction} from "../core/stores";
    import Loader from "../lib/Loader.svelte";

    const getFaction = (async () => {
        const res = await fetch(API_URLS.GetFaction($MyAgent.startingFaction), {
            method: 'GET',
            headers: {Accept: 'application/json', Authorization: 'Bearer ' + $MyToken}
        })
        return await res.json()
    })()

    onMount(async ()=>{
        let fac = await getFaction
        MyFaction.set(fac)
        console.log(fac)

    })

</script>

{#await getFaction}

    <Loader bind:curClass></Loader>

{:then data}

    <div class="parent">
        <div class="div1 {curClass}">
            <h1>Agent ID</h1>
        </div>
        <div class="div2 {curClass}">
            <h2>Faction</h2>
            <label>{$MyAgent.startingFaction}</label>
            <p>name: {data.data.name}</p>
            <p>description: {data.data.description}</p>
            <p>headquarters: {data.data.headquarters}</p>
            <div class="traits">{#each data.data.traits as trait}
                <div class="trait {curClass}" title="{trait.description}"><label>{trait.name}</label></div>
            {/each}</div>

        </div>
        <div class="div3 {curClass}">
            <h2>Agent</h2>
            <label>{$MyAgent.symbol}</label>

        </div>
    </div>

{:catch err}
{/await}

<style>
    .traits{
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
    }
    .traits .trait {
        border-radius: 1em;
        margin: 1em;
        padding: 5px;
    }
    .traits .trait.Light{
        border: #C07F00 1px solid;
    }
    .traits .trait.Dark{
        border: #FFD95A 1px solid;
    }
    .parent {
        display: grid;
        width: 94.9vw;
        height: 100vh;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 4em repeat(4, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
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

    .div1 {
        grid-area: 1 / 1 / 2 / 6;
    }

    .div1 h1 {
        margin: 0;
    }
    .div1.Dark {
        border-bottom: #FFD95A 1px solid;
    }

    .div1.Light {
        border-bottom: #C07F00 1px solid;
    }
    .div2 {
        grid-area: 2 / 3 / 6 / 6;
    }

    .div3 {
        grid-area: 2 / 1 / 6 / 3;
    }
</style>