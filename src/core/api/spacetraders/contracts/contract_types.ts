import type {agent} from "../agent/agent_types";
import type {ship_cargo} from "../fleet/ship/ship_types";

export type response_fulfillContract = {
    data: {
        agent: agent,
        contract: contract
    }
}

export type response_deliverCargo = {
    data: {
        contract: contract,
        cargo: ship_cargo
    }
}

export type response_acceptedContract = {
    data: {
        agent: agent,
        contract: contract
    }
}

export type response_contractsList = {
    data: Array<contract>,
    meta: {
        total: number,
        page: number,
        limit: number
    }
}

export type contract = {
    id: string,
    factionSymbol: string,
    type: string,
    terms: {
        deadline: string,
        payment: {
            onAccepted: number,
            onFulfilled: number
        },
        deliver: Array<{
            tradeSymbol: string,
            destinationSymbol: string,
            unitsRequired: number,
            unitsFulfilled: number
        }>
    },
    accepted: boolean,
    fulfilled: boolean,
    deadlineToAccept: string
}