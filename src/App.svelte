<script lang="ts">
    import Sidebar from "./lib/Sidebar.svelte";
    import {Router, Route} from "svelte-routing";
    import Home from "./routes/Home.svelte";
    import Agent from "./routes/Agent.svelte";
    import {fly, fade} from 'svelte/transition'
    import Fleet from "./routes/Fleet.svelte";
    import StarChart from "./routes/StarChart.svelte";
    import Contracts from "./routes/Contracts.svelte";
    import Modal from "./lib/Modal.svelte";

    export let url = "/";
    let registrar;
    let colors;

    let Error;
    function handleMessage(event){
        ShowErrorModal = true
        Error = event.detail.text
    }

    let ShowErrorModal = false;

</script>

<Modal on:message={handleMessage} bind:showModal={ShowErrorModal} >
    {Error}
</Modal>

<Router {url}>
    <Sidebar bind:curClass={colors}></Sidebar>
    <main>
        <Route path="/"><div transition:fly={{ y: -200 }}><Home curClass="{colors}" bind:registration={registrar} /></div></Route>
        <Route path="/Agent"><div transition:fly={{ y: -200 }}><Agent curClass="{colors}"/></div></Route>
        <Route path="/Fleet"><div transition:fly={{ y: -200 }}><Fleet curClass="{colors}" /></div></Route>
        <Route path="/Navigator"><div transition:fly={{ y: -200 }}><StarChart curClass="{colors}"/></div></Route>
        <Route path="/Contracts"><div transition:fly={{ y: -200 }}><Contracts /></div></Route>
    </main>
</Router>

<style>
    main {
        position: absolute;
        display: block;
        left: 5.1vw;
        top: 0;
    }
    main div{

    }
</style>
