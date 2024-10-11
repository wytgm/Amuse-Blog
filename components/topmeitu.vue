<template>
  <div>
  <div class="z-10 w-full h-full absolute top-0 pointer-events-none" style="border-width: 20px;border-color: blueviolet;">    
  </div>
  <div class="dropdown dropdown-left z-30 absolute right-0">
  <div tabindex="0" role="button" class="btn btn-ghost hover:btn-ghost" style="background-color: rgba(155, 155, 155, 0);">
    <div id="circleB1" class="circleB">
      <div id="circleT1" class="circleT" style="">
      <img  class=" w-full h-full object-cover relative " src="http://cdn.sonderwyt.top/Cover/avatar/02.webp" alt="">
    </div>
    </div>
  </div>
  <div
    tabindex="0"
    class="
    dropdown-content 
    avacardhome
    w-64  
    shadow"
    >
    <div class="card-body">
      <h3 class="card-title space-y-10">欢迎欢迎 &nbsp;&nbsp; (●ˇ∀ˇ●)</h3>
      <p>全网搜罗的美丽图片存放处 真的超好看！</p>
      <NuxtLink to="/" >
        <div class="btn w-full btn-outline outline-double btn-sm  bg-rose-400 hover:bg-sky-500">朕已阅 回去吧</div>
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
      gsap.to(["#StripeTop01","#StripeTop02","#StripeTop03","#StripeTop04","#StripeTop05","#StripeTop06"], { opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      })
      gsap.to(["#StripeBottom1","#StripeBottom2","#StripeBottom3","#StripeBottom4","#StripeBottom5","#StripeBottom6",], { opacity: 0,
        duration: 1,
        delay:0.5,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.3,
          from: "end" // 从最后一个元素开始
        }
      })
      gsap.to(["#circleB1","#circleT1"],{
        opacity:0,
      })
      gsap.to(["#circleB1","#circleT1"],{
        opacity:1,
        duration:0.8
      })
      
    });
    },

};
</script>
<style >
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
  height: 345px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 66px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  position: absolute;
  top: -50%;
  right: 0%;
  border: 10px solid black;
  --c: #81c916;
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