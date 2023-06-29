<script lang="ts">
    import Sidebar from "./lib/Sidebar.svelte";
    import {Router, Route} from "svelte-routing";

    export let url = "/";
</script>
<Router {url}>
    <Sidebar></Sidebar>
    <main>
    </main>
</Router>

<style>
    main {
        margin-left: 5rem;
    }
</style>
