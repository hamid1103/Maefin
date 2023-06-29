export type ship_cargo = {
    capacity: number,
    units: number,
    inventory: inventory
}
export type inventory = Array<{
    symbol: string,
    name: string,
    description: string,
    units: number
}>