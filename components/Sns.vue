<template>
    <div class="sns">
        <a href="https://www.instagram.com/takumiisobe_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><h4 lang="en">Ig</h4></a>
        <a href="https://www.instagram.com/takumiisobe_/" target="_blank" rel="noopener noreferrer" aria-label="Behance"><h4 lang="en">Be</h4></a>
        <a href="https://savee.it/takumiisobe/" target="_blank" rel="noopener noreferrer" aria-label="Savee"><h4 lang="en">Sa</h4>
        </a>
    </div>
</template>


<style>

.sns {
  display: flex;
}
.sns a {margin-left: 2.5rem;}
.sns a h4 {
  font-size: 2.2rem;
  -webkit-text-stroke: .3px;
}

.sns a:nth-of-type(1) svg {margin-top: 1.35rem;}

@media screen and (min-width: 1280px) {
.sns a {margin-left: 5rem;}
.sns a h4 {font-size: 2.4rem;}
    
}
</style>