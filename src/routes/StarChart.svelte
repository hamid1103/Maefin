<script>
    import {onMount} from "svelte";
    import {StarMap} from "../core/StarMap/StarChartMain";
    import {MyShips, MyToken} from "../core/stores";
    import {API_URLS} from "../core/api/spacetraders/apiMain";
    export let curClass;

    let div1;
    let canvas;
    let MapApp;

    let CurShip;
    function SwitchShip(){
        console.log(CurShip)
        MapApp.SwitchFocus(CurShip)
    }

    onMount(async () =>{
        /*const ResizeObs = new ResizeObserver(entries => {
            const entry = entries.at(0);
            MapApp.resize()
        })
        ResizeObs.observe(div1)*/
        MapApp = new StarMap(canvas)
    })
</script>

<div class="parent">
    <canvas bind:this={canvas} class="div1" id="starchart" />
    <div class="div2 {curClass}">
        <select bind:value={CurShip} on:change={SwitchShip}>
            {#each $MyShips as ship, i (i)}
                <option value="{i}">{ship.symbol}</option>
            {/each}
        </select>
    </div>
    <div class="div3 {curClass}">
    </div>
</div>

<style>
    .Light {
        background-color: #FFF7D4;
        color: #C07F00;
        border: #C07F00 1px solid;
    }

    .Dark {
        background-color: #4C3D3D;
        color: #FFD95A;
        border: #FFD95A 1px solid;
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
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .div1 {
        grid-area: 1 / 1 / 6 / 6;
    }

    .div2 {
        grid-area: 1 / 1 / 2 / 3;
        border-radius: 10px;
    }

    .div3 {
        grid-area: 3 / 5 / 5 / 6;
        border-radius: 10px;
    }


</style>