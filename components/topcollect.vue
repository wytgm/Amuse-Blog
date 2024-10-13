<template>
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
  <div 
  class="z-10 w-full h-full 
  absolute top-0 pointer-events-none 
  overflow-x-hidden border-orange-300
  lg:border-[35px]
  sm:border-[20px]">
  </div>
  <div class="dropdown lg:dropdown-left lg:scale-105 sm:scale-[0.85] z-50 absolute right-0 top-0 ">
  <div tabindex="0" role="button" class="btn btn-ghost hover:btn-ghost" 
  style="background-color: rgba(155, 155, 155, 0);">
    <div id="circleB1" class="circleB">
      <div id="circleT1" class="circleT" style="">
      <img  class=" w-full h-full object-cover relative" src="http://cdn.sonderwyt.top/Cover/avatar/02.webp" alt="">
    </div>
    </div>
    
    <!-- <img class="avaborder xl:w-[130px] sm:w-[80px] rounded-full border-8" src="http://cdn.sonderwyt.top/Cover/avatar/02.webp" alt=""> -->
  </div>
  <div
    tabindex="0"
    class="
    dropdown-content 
    avacard
    w-64  
    shadow"
    >
    <div class="card-body">
      <h3 class="card-title space-y-12">泥嚎啊 &nbsp;&nbsp; \(@^0^@)/</h3>
      <p>欢迎来到me的电子收藏柜，本模块主要记录了沉浸式体验各个不同的异次元世界，喜欢这种带给我不同体验的各个世界~</p>
      <NuxtLink to="/Movie" class="w-full">
        <div class="btn w-full btn-outline outline-double btn-sm bg-rose-400 hover:bg-sky-500">两小时体验券</div>
      </NuxtLink>
      <NuxtLink to="/Animation" >
        <div class="btn w-full btn-outline outline-double btn-sm  bg-rose-400 hover:bg-sky-500">二次元体验券</div>
      </NuxtLink>
      <NuxtLink to="/Game" >
        <div class="btn w-full btn-outline outline-double btn-sm  bg-rose-400 hover:bg-sky-500">沉浸式体验券</div>
      </NuxtLink>
      <NuxtLink to="/" >
        <div class="btn w-full btn-outline outline-double btn-sm  bg-rose-400 hover:bg-sky-500">黑白色的世界</div>
      </NuxtLink>
      <NuxtLink to="/" >
        <div class="btn w-full btn-outline outline-double btn-sm  bg-rose-400 hover:bg-sky-500">文字式体验券</div>
      </NuxtLink>
      <NuxtLink to="/" >
        <div class="btn w-full btn-outline outline-double btn-sm  bg-rose-400 hover:bg-sky-500">返回首页</div>
      </NuxtLink>
    </div>
  </div>
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
  height: 120px;
  width: 120px;
  position:relative;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  overflow: hidden;

}
.circleB{
  @apply z-20 rounded-full;
  height: 140px;
  width: 140px;
  position:relative;
  right: -40px;
  top: -25px;
  background: #22d3ee;
	background-blend-mode: color-dodge;
  border: 5px solid rgb(168, 18, 249);

}
.avacard{
  @apply 
  bg-rose-300
  lg:h-[666px]
  sm:h-[580px]
  sm:right-10
  absolute right-36
  top-5;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
  font-size: medium;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 66px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 5px solid black;
}
.BK-6{
  fill: aliceblue ;
}

</style>