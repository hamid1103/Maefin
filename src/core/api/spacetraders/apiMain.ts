//Type for a JSON response from fetch requests
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