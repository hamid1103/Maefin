//Type of data received from making a new agent
import type {contract} from "../contracts/contract_types";

export type response_newAgent = {
    data: {
        //Agent Data
        agent: agent,
        //Beginner Quest
        contract: contract
    }
}

//Type of data received when Existing Agent
export type agent = {
    data: {
        accountId: string,
        //symbol is an agents name
        symbol: string,
        headquarters: string,
        credits: string,
        startingFaction: string
    }
}