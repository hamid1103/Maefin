export type response_getShip = {
    data: ship
}

export type response_Orbit_Ship = {
    data: nav
}

export type response_shipRefine = {
    data: {
        cargo: ship_cargo,
        cooldown: {
            shipSymbol: string,
            totalSeconds: number,
            remainingSeconds: number,
            expiration: string,
        },
        produced: Array<{
            tradeSymbol: string,
            units: number
        }>,
        consumed: Array<{
            tradeSymbol: string,
            units: number
        }>
    }
}

export type ship = {
    symbol: string,
    registration: {
        name:string,
        factionSymbol: string,
        role: string
    },
    nav: nav,
    crew: {
        current: number,
        required: number,
        capacity: number,
        rotation: string,
        morale: number,
        wages: number
    },
    frame: {
        symbol: string,
        name: string,
        description: string,
        condition: string,
        moduleSlots: number,
        mountingPoints: number,
        fuelCapacity: number,
        requirements: {
            power: number,
            crew: number,
            slots: number
        }
    },
    reactor: {
        symbol: string,
        name: string,
        description: string,
        condition: number,
        powerOutput: number,
        requirements: {
            power: number,
            crew: number,
            slots: number
        }
    },
    engine: {
        symbol: string,
        name: string,
        description: string,
        condition: number,
        speed: number,
        requirements: {
            power: number,
            crew: number,
            slots: number
        }
    },
    modules: Array<{
        symbol: string,
        capacity: number,
        range: number,
        name: string,
        description: string,
        requirements: {
            power: number,
            crew: number,
            slots: number
        }
    }>,
    mounts: Array<{
        symbol: string,
        name: string,
        description: string,
        strength: number,
        deposits: string[],
        requirements: {
            power: number,
            crew: number,
            slots: number
        }
    }>,
    cargo: ship_cargo,
    fuel: {
        current: number,
        capacity: number,
        consumed: {
            amount: number,
            timestamp: string
        }
    }
}

export type nav = {
    systemSymbol: string,
    waypointSymbol: string,
    route: {
        destination: {
            symbol: string,
            type: string,
            systemSymbol: string,
            x: number,
            y: number
        },
        departure: {
            symbol: string,
            type: string,
            systemSymbol: string,
            x: number,
            y: number
        },
        departureTime: string,
        arrival: string
    },
    status:string,
    flightMode: "DRIFT" | "STEALTH" | "CRUISE" | "BURN"
}

export type response_getShipCargo = {
    data: ship_cargo
}

export type ship_cargo = {
    capacity: number,
    units: number,
    inventory: ship_inventory
}
export type ship_inventory = Array<{
    symbol: string,
    name: string,
    description: string,
    units: number
}>