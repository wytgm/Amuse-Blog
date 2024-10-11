<template>
  <div class="w-full h-full overflow-hidden wrap cursorcus">
    <div id="pc" :class="['grid', 'grid-cols-5', 'grid-rows-5','gap-3', 'p-3', 'w-full', 'h-full', { hidden: isPhone }]">
      <NuxtLink role="button" 
                style="background-color: #5CA9C5; 
                      border-color:black;border-width: 2px; border-style: double;
                      box-shadow: 15px -5px 0px 2px #000;" 
                class="btn btn-ghost col-start-1 col-end-6 item-center  border-2 rounded-xl overflow-hidden" 
                to="/Movie">  
        <h1>collection</h1>
      </NuxtLink>
      <NuxtLink role="button" class="btn btn-ghost w-full h-full col-start-1 col-end-3" to="/chat">  
      <div class="chatbg  col-start-1 col-end-3 item-center">
        <div style="color:#AA3D58;font-size: 65px;">chat</div>
      </div>
      </NuxtLink>
      <div class="col-start-3 col-end-4 item-center">
        <Sakana class="relative -left-5 top-3 object-cover scale-[0.8] "/>
      </div>
      <div class="col-start-4 col-end-6 row-span-2 item-center">
        <Wechat/>
      </div>
      <div class="col-start-1 col-end-4 row-span-2 item-center">
        <Photo style="box-shadow: -10px -6px 0px 2px #0C4463;"/>
      </div>
      <div class=" col-start-4 col-end-5 row-span-2 item-center border-2 border-black">
        06
      </div>
      <div class="col-start-5 col-end-6 row-span-2 item-center border-2  border-black">旅行足迹</div>
      <div class="col-start-1 col-end-4 item-center flex flex-col">
        <div class="grid grid-cols-4 gap-1 items-center justify-center">
          <img src="https://img.shields.io/badge/Nuxt-v3.4.2-brightgreen.svg"/>
          <img src="https://img.shields.io/badge/vite-v5.2.0-blue.svg"/>
          <img src="https://img.shields.io/badge/daisyui-v4.10.1-blueviolet.svg"/>
          <img src="https://img.shields.io/badge/tailwindcss-v3.4.3-royalblue.svg"/>
          <img src="https://img.shields.io/badge/gsap-v3.12.5-lime.svg"/>
          <img src="https://img.shields.io/badge/Pixi.js-v6.5.10-orange.svg"/>
          <img src="https://img.shields.io/badge/aplyer-v1.10.1-yellow.svg"/>
        </div>
        
      </div>
    </div>


  <!-- 手机端布局 -->
  <div id="phone" :class="['grid','grid-cols-1','p-0','center','absolute','w-full', 'h-full', { hidden: !isPhone }]">
    <div class="grid grid-cols-3 gap-3 scale-[0.8]">
      <NuxtLink role="button" 
                style="background-color: #5CA9C5; 
                      border-top-left-radius: 45px;border-bottom-right-radius: 45px;
                      border-color:black;border-width: 2px; border-style: double;
                      box-shadow: 3px -8px 0px 2px #000;" 
                class="btn btn-ghost col-start-1 col-end-4 item-center  border-2 rounded-xl" 
                to="/Movie">  
        <h1>collection</h1>
      </NuxtLink>
      <NuxtLink role="button" 
                style="background-color: #38B687; 
                      border-top-left-radius: 45px;border-bottom-right-radius: 45px;
                      border-color:black;border-width: 2px; border-style: double;
                      box-shadow: 3px -8px 0px 2px #000;" 
                class="btn btn-ghost col-start-1 col-end-2 item-center  border-2 rounded-xl" 
                to="/Chat">  
        <h1>Chat</h1>
      </NuxtLink>
      <NuxtLink role="button" 
        style="background-color: #F8BF5C; 
              border-top-left-radius: 45px;border-bottom-right-radius: 45px;
              border-color:black;border-width: 2px; border-style: double;
              box-shadow: 3px 8px 0px 1px #F8BF5C;" 
        class="w-full h-full relative object-cover btn btn-ghost col-start-2 col-end-4 item-center  border-2 rounded-xl overflow-hidden" 
        to="/Chat">  
        <Photo class="w-full h-full relative object-cover scale-125"/>
      </NuxtLink>
      <div class="col-start-1 col-end-3 item-center border-2 border-black">
        lvyou?
      </div>
      <div class=" col-start-3 col-end-4 item-center border-2 border-black">旅游</div>
      <div class=" col-start-1 col-end-4 item-center border-2 border-black">
        <div class="grid grid-cols-4 gap-1 items-center justify-center">
          <img src="https://img.shields.io/badge/Nuxt-v3.4.2-brightgreen.svg"/>
          <img src="https://img.shields.io/badge/vite-v5.2.0-blue.svg"/>
          <img src="https://img.shields.io/badge/daisyui-v4.10.1-blueviolet.svg"/>
          <img src="https://img.shields.io/badge/tailwindcss-v3.4.3-royalblue.svg"/>
          <img src="https://img.shields.io/badge/gsap-v3.12.5-lime.svg"/>
          <img src="https://img.shields.io/badge/Pixi.js-v6.5.10-orange.svg"/>
          <img src="https://img.shields.io/badge/aplyer-v1.10.1-yellow.svg"/>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const isPhone = ref(false);

function checkScreenSize() {
  isPhone.value = window.innerWidth <= 964;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
   // 黑塔转圈圈
  // 获取父元素的宽度
  const parentElement = document.querySelector('.col-start-1.col-end-6');
  const parentWidth = parentElement.getBoundingClientRect().width;
  gsap.to("#herta", {
    x: parentWidth, 
    duration: 6, 
    ease: "none", 
    repeat: -1, 
    yoyo: true,
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.wrap{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.hidden {
  display: none;
}
.item-center{
  @apply w-full h-full flex items-center justify-center
}
.cursorcus{
  cursor: url('https://img.icons8.com/?size=36&id=lKAxelEWuaDu&format=png&color=000000'), auto;
}
/* #4EABC9 */
.chatbg{
  border-top-right-radius: 25px;
  border-bottom-left-radius: 45px;
  border: 3px solid #112220;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: white;
  background-color: #F4A372;
  box-shadow: -6px -3px 0px 2px #000;

}

h1 {
	font-weight: 100;
	font-size: 10vw;
	line-height: 5vw;
	font-variation-settings: 'wght' 100, 'wdth' 85;
}
</style>