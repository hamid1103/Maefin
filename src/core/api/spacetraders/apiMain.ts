//Type for a JSON response from fetch requests
import {MyToken} from "../../stores";
import {get} from "svelte/store";

export type JSONResponse = {
       data?: {

       },
    errors?: Array<{message: string}>
}

//Typeset from a SpaceTraders Get Status API-call
export type SPA_Status = {
    status: string,
    version: string,
    resetDate: string,
    description: string,
    stats: {
        agents: number,
        ships: number,
        systems: number,
        waypoints: number
    },
    leaderboards: {
        mostCredits: Array<{
            agentSymbol: string,
            credits: bigint
        }>,
        mostSubmittedCharts: Array<{
            agentSymbol: string,
            chartCount: number
        }>
    },
    serverResets: {
        next: string,
        frequency: string
    },
    announcements: Array<{
        title: string,
        body: string
    }>,
    links: Array<{
        name: string,
        url: string
    }>
}

export function api<T>(url:string, options: object): Promise<T> {
    return fetch(url, options)
        .then(response => response.json())
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<{data: T}>
        })
        .then(data => {
            console.log(data.data)
            return data.data})
        .catch(data => {console.log(data)
        return data})
}

export let API_URLS = {
    Register: "https://api.spacetraders.io/v2/register",
    GetAgent: "https://api.spacetraders.io/v2/my/agent",
    GetStatus: "https://api.spacetraders.io/v2",
    GetMyContracts: "https://api.spacetraders.io/v2/my/contracts",
    GetContractByID: (ID:string) => "https://api.spacetraders.io/v2/my/contracts/" + ID,
    AcceptContract: (ID:string) => "https://api.spacetraders.io/v2/my/contracts/"+ID+"/accept",
    DeliverCargo: (ID:string) => "https://api.spacetraders.io/v2/my/contracts/"+ID+"/deliver",
    FulfullContract: (ID:string) => "https://api.spacetraders.io/v2/my/contracts/"+ID+"/fulfill",
    ListFactions: "https://api.spacetraders.io/v2/factions",
    GetFaction: (ID: string) => "https://api.spacetraders.io/v2/factions/" + ID,
    MyShips: "https://api.spacetraders.io/v2/my/ships",
    MyShipByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID,
    MyShipCargoByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/cargo",
    MyShipOrbitByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/orbit",
    MyShipRefineByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/refine",
    MyShipCreateChart: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/chart",
    MyShipGetCooldownByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/cooldown",
    MyShipDockByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/dock",
    MyShipSurveyByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/survey",
    MyShipExtractResourcesByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/extract",
    MyShipJettisonCargoByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/jettison",
    MyShipJumpByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/jump",
    MyShipNavigateByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/navigate",
    MyShipNavByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/nav",
    MyShipWarpByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/warp",
    MyShipSellCargoByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/sell",
    MyShipScanSystemsByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/scan/systems",
    MyShipScanWaypointsByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/scan/waypoints",
    MyShipScanShipsByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/" + ID + "/scan/ships",
    MyShipRefuelByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/"+ID+"/refuel",
    MyShipPurchaseCargoByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/"+ID+"/purchase",
    MyShipTransferCargoByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/"+ID+"/transfer",
    MyShipNegotiateContractByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/"+ID+"/negotiate/contract",
    MyShipGetMountsByID: (ID:string) => "https://api.spacetraders.io/v2/my/ships/"+ID+"/mounts",
    ListSystems: "https://api.spacetraders.io/v2/systems",
    GetSystem: (symbol:string) => "https://api.spacetraders.io/v2/systems/" + symbol,
    ListWaypointsInSystem: (symbol:string) => "https://api.spacetraders.io/v2/systems/" + symbol + "/waypoints",
    GetWaypointInSystem: (symbol:string, waypoint:string) => "https://api.spacetraders.io/v2/systems/" + symbol + "/waypoints/" + waypoint,
    GetMarketInSystem: (symbol:string, waypoint:string) => "https://api.spacetraders.io/v2/systems/" + symbol + "/waypoints/" + waypoint + "/market",
    GetShipyardInSystem: (symbol:string, waypoint:string) => "https://api.spacetraders.io/v2/systems/" + symbol + "/waypoints/" + waypoint + "/shipyard",
    GetJumpGateInSystem: (symbol:string, waypoint:string) => "https://api.spacetraders.io/v2/systems/" + symbol + "/waypoints/" + waypoint + "/jump-gate",


}