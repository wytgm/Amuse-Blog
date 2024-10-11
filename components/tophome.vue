<template>
  <div>
  <div class="z-10 w-full h-full absolute top-0 pointer-events-none" style="border-width: 20px;border-color:#FAF198;">
  </div>

  </div>
</template>
<script>
import { onMounted } from 'vue';
import {gsap} from 'gsap';
export default {
  name: "top",
  setup() {
    onMounted(() => {

      
      
    });
    },

};
</script>
<style scoped>
.circleT{
  @apply z-30 rounded-full;
  height: 100px;
  width: 100px;
  position:relative;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  overflow: hidden;

}
.circleB{
  @apply z-20 rounded-full;
  height: 128px;
  width: 128px;
  position:relative;
  right: -20px;
  top: 0;
  --c: #b404ff;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 4%),
	            repeating-linear-gradient(-30deg,var(--c), #000000, var(--c) 4%),
	            linear-gradient(180deg,#232323,var(--c));
	background-blend-mode: color-dodge;
  border: 5px double black;

}
.avacardhome{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
  position: absolute;
  top: 15%;
  height: 345px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 66px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 10px solid black;
  --c: #9c16c9;
	background: repeating-linear-gradient(45deg,var(--c),
              #000000,var(--c) 1%),
	            repeating-linear-gradient(-30deg,var(--c), 
              #3c3c3c, var(--c) 1%),
	            linear-gradient(0deg,#0c0c0c,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(3);
  color: #000000;
}
.BK-6{
  fill: aliceblue ;
}

</style>