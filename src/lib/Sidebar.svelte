<script lang="ts">
    import position_marker from "../assets/position-marker.svg"
    import solar_system from "../assets/solar-system.svg"
    import spaceship from "../assets/spaceship.svg"
    import cog from "../assets/cog.svg"
    import checklist from "../assets/checklist.svg"
    import id_card from "../assets/id-card.svg"
    import house from "../assets/house.svg"
    import {IsLoggedIn} from "../core/stores";
    import {Link} from "svelte-routing";

    let HideBar = false;
    export let curClass = 'Light'

    function switchColClass() {
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
        <li class="navili {curClass}">
            <Link to="/">
                <img src="{house}" alt="">
            </Link>
        </li>
        {#if $IsLoggedIn}
            <li class="navili {curClass}">
                <Link to="/Agent">
                    <img src="{id_card}" alt="">
                </Link>
            </li>
            <li class="navili {curClass}" id="nav-Fleet">
                <Link to="/Fleet">
                    <img src="{spaceship}" alt="">
                </Link>
            </li>
            <li class="navili {curClass}" id="nav-Navigator">
                <Link to="/Navigator">
                    <img src="{solar_system}" alt="">
                </Link>
            </li>
            <li class="navili {curClass}" id="nav-Contracts">
                <Link to="/Contracts">
                    <img src="{checklist}" alt="">
                </Link>
            </li>
        {/if}
        <li class="navili {curClass}" id="nav-Settings">
            <div on:click={switchColClass} class="nav-a">
                <img src="{cog}" alt="">
            </div>
        </li>
    </ul>
</nav>

<style>
    @media only screen and (max-width: 600px) {
        #navbar {
            width: 100vw;
            height: 5rem;
            bottom: 0;
        }
    }

    @media only screen and (min-width: 600px) {
        #navbar {
            left: 0;
            top: 0;
            width: 5vw;
            height: 100vh;
            align-items: center;
        }

        #navbar-ul {
            padding: 0;
            height: 100%;
            justify-items: center;
            margin: 0;
            flex-direction: column;
        }

        .navili {
            margin-top: 1rem;
        }

        .navili:last-child {
            margin-top: auto;
            margin-bottom: 1rem;
        }

        .navili img {
            width: 4rem;
        }
    }

    #navbar {
        position: fixed;
    }

    #navbar.Dark {
        border: 1px solid #FFD95A;
    }

    #navbar.Light {
        border: 1px solid #C07F00;;
    }

    #navbar #navbar-ul {
        display: flex;
        align-items: center;
        margin: 0;
    }

    .navili {
        list-style: none;
    }

    .Light {
        background-color: #FFF7D4;
        color: #C07F00;
    }

    .Dark {
        background-color: #4C3D3D;
        color: #FFD95A;
    }

    .Light, .Dark {
        transition: 250ms;
    }

    .navili img {
        filter: grayscale(100%) opacity(0.7);
        transition: 250ms;
    }

    .navili.Light img:hover {
        filter: grayscale(0) opacity(1) invert(97%) sepia(23%) saturate(6195%) hue-rotate(314deg) brightness(105%) contrast(109%);
    }

    .navili.Dark img:hover {
        filter: grayscale(0) opacity(1) invert(42%) sepia(100%) saturate(467%) hue-rotate(3deg) brightness(100%) contrast(101%);
    }

</style>