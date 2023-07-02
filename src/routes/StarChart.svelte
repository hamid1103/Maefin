<script>
    import {onMount} from "svelte";
    import {StarMap} from "../core/StarChartMain";
    let div1;
    let canvas;
    let MapApp;
    onMount(async () =>{
        MapApp = new StarMap(canvas, div1)
    })
</script>

<div class="parent">
    <div bind:this={div1} class="div1">
        <canvas bind:this={canvas} id="starchart" />
    </div>
    <div class="div2"></div>
    <div class="div3"></div>
</div>

<style>
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
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .div1 {
        grid-area: 1 / 1 / 6 / 6;
        background-color: #535bf2;
    }

    .div2 {
        grid-area: 1 / 1 / 2 / 3;
        background-color: green;
    }

    .div3 {
        grid-area: 3 / 5 / 5 / 6;
        background-color: red;
    }


</style>