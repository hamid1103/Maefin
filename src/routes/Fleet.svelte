<script>
    import {MyShips, MyToken} from "../core/stores";
    import {API_URLS} from "../core/api/spacetraders/apiMain";
    import Loader from "../lib/Loader.svelte";

    export let curClass;

    const getShips = (async () => {
        const res = await fetch(API_URLS.MyShips, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + $MyToken
            }
        })
        return await res.json()
    })()

</script>

<h1>Fleet</h1>
{#await getShips}
    <Loader bind:curClass></Loader>
{:then data}
    {#each data.data as ship}
        {ship.symbol}
        <br>
        {/each}
{:catch Err}
    <p>An Error Occured</p>
{/await}