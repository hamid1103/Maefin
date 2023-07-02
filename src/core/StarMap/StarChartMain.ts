import * as ex from "excalibur";

import type {ship} from "../api/spacetraders/fleet/ship/ship_types";
import {get} from "svelte/store";
import {MyShips, MyToken} from "../stores";
import {API_URLS} from "../api/spacetraders/apiMain";
import type {system, waypoint} from "../api/spacetraders/systems/systems_types";
import {ResourceLoader, Resources} from "./resources";

export class StarMap {
    public app;
    public viewport;
    public CanvasHolder;
    private caching = false;
    private cached = false

    private ships: Array<ship> = get(MyShips)

    public CurrentFocus: string = 'unfocussed';
    private currentShip: {
        ship: ship,
        ScannedWaypoints: Array<waypoint>,
        ScannedSystems: Array<system>,
    }

    private loader = ResourceLoader

    //Can't use these without a scanner array module, so it's basically useless for me now :)
    /*private getShipSurroundingWaypoints = (async () => {
        const res = await fetch(API_URLS.MyShipScanWaypointsByID(this.CurrentFocus), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + get(MyToken)
            }
        }).then(res => res.json());
        this.currentShip.ScannedWaypoints.splice(0)
        for (let wayp in res.data.waypoints) {
            const curw = res.data.waypoints[wayp]
            let newWaypoint: waypoint = {
                y: curw.y,
                chart: curw.chart,
                faction: curw.faction,
                orbitals: curw.orbitals,
                symbol: curw.symbol,
                systemSymbol: curw.systemSymbol,
                traits: curw.traits,
                type: curw.type,
                x: curw.x
            }
            this.currentShip.ScannedWaypoints.push(newWaypoint)
        }
        return this.currentShip.ScannedWaypoints
    })()
    private getShipNearbySystems = (async () => {
        const res = await fetch(API_URLS.MyShipScanSystemsByID(this.CurrentFocus), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + get(MyToken)
            }
        }).then(res => res.json());
        this.currentShip.ScannedSystems.splice(0)
        for (let wayp in res.data.systems) {
            const curw = res.data.systems[wayp]
            let newSystem: system = {
                factions: curw.factions,
                sectorSymbol: curw.sectorSymbol,
                symbol: curw.symbol,
                type: curw.type,
                waypoints: curw.waypoints,
                x: curw.x, y: curw.y
            }
            this.currentShip.ScannedSystems.push(newSystem)
        }
        return this.currentShip.ScannedSystems
    })()
*/
    constructor(CanvasHolder: HTMLCanvasElement) {
        this.app = new ex.Engine({
            canvasElement: CanvasHolder,
            backgroundColor: ex.Color.fromHex("#242424"),
            suppressPlayButton: true,
        })
        this.CanvasHolder = CanvasHolder
        this.app.start(this.loader).then(() => {
            this.startGame()
        });

    }

    startGame(){
        this.app.onPreUpdate = ()=>{

        }
    }

    SwitchFocus(Shindex: number) {
        this.CurrentFocus = this.ships[Shindex].symbol
        this.currentShip.ship = this.ships[Shindex]
    }

}