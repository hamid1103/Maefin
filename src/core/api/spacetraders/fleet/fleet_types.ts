import type {ship} from "./ship/ship_types";
import type {agent} from "../agent/agent_types";
import type {transaction} from "../systems/systems_types";

export type response_purchaseShip = {
    data: {
        agent: agent,
        ship: ship,
        transaction: transaction
    }
}

export type response_ListShips = {
    data: Array<ship>,
    meta: {
        total: number,
        page: number,
        limit: number
    }
}