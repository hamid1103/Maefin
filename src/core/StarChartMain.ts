import * as PIXI from "pixi.js"
import type {Sprite} from "pixi.js";

export class StarMap {
    public app;
    public CanvasHolder;

    private bunny: Sprite;

    constructor(CanvasHolder: HTMLCanvasElement, div: HTMLElement) {
        this.app = new PIXI.Application({
            view:CanvasHolder,
            backgroundColor: 0x242424,
            width: div.offsetWidth,
            height: div.offsetHeight
        })
        this.CanvasHolder = CanvasHolder
        this.Init();
    }

    Init = (async ()=> {
        console.log('GotToInit')

        this.app.ticker.add((delta) => {
            this.Update()
        })
    })

    Update(){

    }

    Suspend(){

    }

}