export type response_listFactions = {
    data: Array<faction>,
    meta: {
        total: number,
        page: number,
        limit: number
    }
}

export type response_getfaction = {
    data: faction
}

export enum faction_symbols {
    COSMIC = "COSMIC",
    VOID = "VOID",
    GALACTIC = "GALACTIC",
    QUANTUM = "QUANTUM",
    DOMINION = "DOMINION",
    ASTRO = "ASTRO",
    CORSAIRS = "CORSAIRS",
    OBSIDIAN = "OBSIDIAN",
    AEGIS = "AEGIS",
    UNITED = "UNITED",
    SOLITARY = "SOLITARY",
    COBALT = "COBALT",
    OMEGA = "OMEGA",
    ECHO = "ECHO",
    LORDS = "LORDS",
    CULT = "CULT",
    ANCIENTS = "ANCIENTS",
    SHADOW = "SHADOW",
    ETHEREAL = "ETHEREAL"
}


export type faction = {
    symbol: "COSMIC" | "VOID" | "GALACTIC" | "QUANTUM" | "DOMINION" | "ASTRO" | "CORSAIRS" | "OBSIDIAN" | "AEGIS" | "UNITED" | "SOLITARY" | "COBALT" | "OMEGA" | "ECHO" | "LORDS" | "CULT" | "ANCIENTS" | "SHADOW" | "ETHEREAL",
    name: string,
    description: string,
    headquarters: string,
    traits: Array<faction_trait>,
    isRecruiting: boolean

}

export type faction_trait = {
    symbol: string,
    name: string,
    description: string
}