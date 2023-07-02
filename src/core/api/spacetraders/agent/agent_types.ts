//Type of data received from making a new agent
import type {contract} from "../contracts/contract_types";
import type {faction} from "../faction/factions_types";
import type {ship} from "../fleet/ship/ship_types";

export type response_newAgent = {
    data: {
        //Agent Data
        agent: agent,
        //Beginner Quest
        contract: contract,
        faction: faction,
        ship: ship,
        token:string
    }
}

//Type of data received when Existing Agent
export type agent = {
    accountId: string,
    //symbol is an agents name
    symbol: string,
    headquarters: string,
    credits: string,
    startingFaction: string
}