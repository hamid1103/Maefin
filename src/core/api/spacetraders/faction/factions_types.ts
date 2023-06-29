export type response_listFactions = {
    data: Array<faction>,
    meta: {
        total: number,
        page: number,
        limit: number
    }
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