<template>
<div>
    <Header />
    <Nuxt />
    <div class="bg"></div>
</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>