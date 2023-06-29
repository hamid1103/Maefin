<script lang="ts">
    import {Colors} from "../core/Colors.js";
    export let Desc = "Tooltip prop not defined!";
    export let Dark: boolean = false;
</script>

{#if Dark}
    <div class="Tooltip Dark">
        <p> {Desc} </p>
    </div>
{:else}
    <div class="Tooltip Light">
        <p> {Desc} </p>
    </div>
{/if}
<style>
    .Tooltip {
        display: block;
        align-items: center;
    }
    .Tooltip.Light{
        background-color: #FFF7D4;
        color: #C07F00;
    }
    .Tooltip.Dark{
        background-color: #4C3D3D;
        color: #FFD95A;
    }
</style>