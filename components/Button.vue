<template>
    <span class="Button">
        <Arrow />
    </span>
</template>

<style>

.Button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: var(--textColor);
    margin-top: -1rem;
    margin-left: .85rem;
}
.Button svg {margin-left: .15rem;}
.Button svg, .Button svg path {fill: var(--backgroundColor);}

</style>
