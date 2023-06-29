<script lang="ts">
import Tooltip from "./Tooltip.svelte";
import position_marker from "../assets/position-marker.svg"
import solar_system from "../assets/solar-system.svg"
import spaceship from "../assets/spaceship.svg"
import receive_money from "../assets/receive-money.svg"
import checklist from "../assets/checklist.svg"

let curClass = 'Light'
function switchColClass(){
    switch (curClass) {
        case 'Dark':
            curClass = 'Light'
            break;
        case 'Light':
            curClass = 'Dark'
            break;

    }
}

</script>

<nav id="navbar" class="{curClass}">
    <ul id="navbar-ul">
        <li class="navili {curClass}" id="nav-Fleet">
            <a href="#/Fleet">
                <Tooltip Dark={true} Desc="Fleet management" />
                <img src="{spaceship}" alt="">
            </a>
        </li>
        <li class="navili {curClass}" id="nav-Navigator">
            <a href="#/Navigator">
                <Tooltip Dark={true} Desc="Navigate systems and waypoints" />
                <img src="{solar_system}" alt="">
            </a>
        </li>
        <li class="navili {curClass}" id="nav-Contracts">
            <a href="#/Contracts">
                <Tooltip Dark={true} Desc="Check contracts" />
                <img src="{checklist}" alt="">
            </a>
        </li>
        <li class="navili {curClass}" id="nav-Waypoint">
            <a href="#/Waypoint">
                <Tooltip Dark={true} Desc="Check current waypoint" />
                <img src="{position_marker}" alt="">
            </a>
        </li>
    </ul>
</nav>

<style>
    @media only screen and (max-width: 600px) {
        #navbar{

            width: 100vw;
            height: 5rem;
        }
    }
    @media only screen and (min-width: 600px) {
        #navbar{
            bottom: 0;
            left: 0;
            top: 0;
            width: 5rem;
            height: 100vh;
            align-items: center;
        }
        #navbar-ul{
            padding: 0;
            height: 100%;
            justify-items: center;
            margin: 0;
            flex-direction: column;
        }
        .navili:last-child{
            margin-top: auto;
        }
        .navili img{
            width: 4rem;
        }
    }

    #navbar{
        position: fixed;
    }
    #navbar #navbar-ul{
        display: flex;
        align-items: center;
        margin: 0;
    }
    .navili{
        list-style: none;
    }

    .Light{
        background-color: #FFF7D4;
        color: #C07F00;
    }
    .Dark{
        background-color: #4C3D3D;
        color: #FFD95A;
    }

    .navili img{
        filter: grayscale(100%) opacity(0.7);
    }

    .navili.Light:hover img{
        filter: grayscale(0) opacity(1);
    }
    .navili.Dark:hover img{

    }

</style>