<script>
    import {API_URLS} from "../core/api/spacetraders/apiMain";
    import {get} from "svelte/store";
    import {MyToken} from "../core/stores";

    const getContracts = (async ()=>{
        const res = await fetch(API_URLS.GetMyContracts, {method: 'GET',
            headers: {Accept: 'application/json', Authorization: 'Bearer ' + get(MyToken)}})
        return await res.json()
    })()

    console.log(getContracts)
</script>


<h1>Contracts</h1>
<p>Show contracts</p>