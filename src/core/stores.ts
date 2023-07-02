import {writable, derived, readable} from "svelte/store";
import type {agent} from "./api/spacetraders/agent/agent_types";
import type {faction} from "./api/spacetraders/faction/factions_types";
import type {ship} from "./api/spacetraders/fleet/ship/ship_types";
import {API_URLS} from "./api/spacetraders/apiMain";
export let MyToken = writable<string>("")
MyToken.set(localStorage.getItem('Token'))
export let MyAgent = writable<agent>()
export let MyFaction = writable<faction>()
export let MyShips = writable<Array<ship>>()

export let IsLoggedIn = writable(false)