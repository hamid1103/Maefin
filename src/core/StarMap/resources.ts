import { ImageSource, Sound, Resource, Loader } from "excalibur";
import nebulaTexture from "../../assets/thirdp/pixelplanets/Nebulae/1.png"
import playerTexture from "../../assets/icons/Ship.png"
import mapMark from "../../assets/icons/mapmark.png"

const Resources = {
    nebula: new ImageSource(nebulaTexture),
    player: new ImageSource(playerTexture),
    mapMark: new ImageSource(mapMark)
}

let loadables = [];
for(let resource in Resources){
    loadables.push(Resources[resource])
}
const ResourceLoader = new Loader(loadables);

export { Resources, ResourceLoader };