<script>
    export let curClass;
</script>

<div class="custom-loader {curClass}"></div>

<style>
    .custom-loader.Light {
        width: 100px;
        height: 100px;
        display: grid;
        border: 8px solid #0000;
        border-color: #7E7E83 #0000;
        border-radius: 50%;
        animation: s6 2s infinite linear;
    }

    .custom-loader.Dark {
        width: 100px;
        height: 100px;
        display: grid;
        border: 8px solid #0000;
        border-color: #FFFFFF #0000;
        border-radius: 50%;
        animation: s6 2s infinite linear;
    }

    .custom-loader::before,
    .custom-loader::after {
        content: "";
        grid-area: 1/1;
        margin: 4px;
        border: inherit;
        border-radius: 50%;
    }

    .custom-loader::before {
        border-color: #F4ED22 #0000;
        animation: inherit;
        animation-duration: 1s;
        animation-direction: reverse;
    }

    .custom-loader::after {
        margin: 16px;
    }

    @keyframes s6 {
        100% {
            transform: rotate(1turn)
        }
    }
</style>