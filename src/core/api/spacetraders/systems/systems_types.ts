import type {faction} from "../faction/factions_types";

export type waypoint = {
    //symbol means name
    symbol: string,
    type: "PLANET" | "GAS_GIANT" | "MOON" | "ORBITAL_STATION" | "JUMP_GATE" | "ASTEROID_FIELD" | "NEBULA" | "DEBRIS_FIELD" | "GRAVITY_WELL"
    systemSymbol: string,
    x: number,
    Y: number,
    orbitals: Array<{
        symbol:string
    }>
    faction: faction,
    traits: Array<waypoint_trait>,
    chart: chart
}

export type response_listSystems = {
    data: Array<system>,
    meta: {
        total: number,
        page: number,
        limit: number
    }
}

export type response_ListWaypointsInSystem = {
    data: Array<waypoint>,
    meta: {
        total: number,
        page: number,
        limit: number
    }
}

export type response_getSystem = {
    data: system
}

export type system = {
    symbol: string,
    sectorSymbol: string,
    type: "NEUTRON_STAR" | "RED_STAR" | "ORANGE_STAR" | "BLUE_STAR" | "YOUNG_STAR" | "WHITE_DWARF" | "BLACK_HOLE" | "HYPERGIANT" | "NEBULA" | "UNSTABLE",
    x: number,
    y: number,
    waypoints: Array<waypoint>,
    factions: Array<faction>
}

export type result_getMarket = {
    data: market
}

export type market = {
    symbol: string,
    exports: Array<goods>,
    imports: Array<goods>,
    exchange: Array<goods>,
    transactions:Array<transaction>,
    tradeGoods: Array<{
        symbol:string,
        tradeVolume: number,
        supply: string,
        purchasePrice: number,
        sellPrice: number
    }>
}

export type response_getJumpGate = {
    data: jump_gate
}

export type jump_gate = {
    jumprange: number,
    factionSymbol: string,
    connectedSystems: Array<{
        symbol: string,
        sectorSymbol: string,
        type: "NEUTRON_STAR" | "RED_STAR" | "ORANGE_STAR" | "BLUE_STAR" | "YOUNG_STAR" | "WHITE_DWARF" | "BLACK_HOLE" | "HYPERGIANT" | "NEBULA" | "UNSTABLE",
        factionSymbol: string,
        x: number,
        y: number,
        distance: number
    }>
}

export type response_getShipyard = {
    dara: shipyard
}

export type shipyard = {
    symbol: string,
    shipTypes: Array<{
        type: string
    }>,
    transactions: Array<transaction>,
    //ships: Array<ship>
}

export type transaction = {
    waypointSymbol: string,
    shipSymbol: string,
    tradeSymbol: string,
    type: string,
    units: number,
    pricePerUnit: number,
    totalPrice: number,
    timestamp: string
}

export type goods = {
    symbol:string,
    name: string,
    description: string
}
export type waypoint_trait  = {
    symbol:string,
    name: string,
    description: string
}

export type chart = {
    waypointSymbol: string,
    submittedBy: string,
    submittedOn: string
}