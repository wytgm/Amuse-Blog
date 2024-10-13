<template>
  <div>
  <topcollect/>
  <div class="-z-1 center  w-full h-full overflow-hidden absolute bgani"></div>  
  <div class="whole">
    <div class="bottomrectA">
      <div class="gridcus">
            <div class="card flex flex-row" v-for="(animation, index) in animations" :key="index">
              <div class="flex w-2/3 h-full relative">
                <div class="imgcard">
                  <img class="imgcus" v-lazy="animation.poster" :alt="animation.title" />
                </div>
              </div>
              <div class="flex flex-col w-1/3 h-full relative items-center justify-center space-y-6 p-3">
                <span class="title">{{ animation.title }}</span>
                <button class="btn buttoncus underline decoration-wavy" @click="openModal(index)">观影感受</button>
              </div>
            </div>
      </div>
        
    </div>
     <!-- 卡片按钮弹窗：对话框列表 -->
     <dialog id="myModal" class="modal">
      <div class="modal-box" v-if="currentAnimation">
        <h3 class="modaltext mt-2">{{ currentAnimation.title }} 观影感受!</h3>
        <div class="flex flex-row p-4 mt-2">
          <span class="flex w-1/2 rounded-lg overflow-hidden">
            <img :src="currentAnimation.poster" alt="">
          </span>
          <div class="flex flex-col w-1/2 ml-4 space-y-4 ">
            <div class="rating">
              <span style="font-weight: 900;">个人评分：</span>
              <input class="mask mask-star-2 star"  v-for="n in Math.floor(currentAnimation.rating)" :key="n" />
              <input class="mask mask-star-2 star1" v-for="n in 5 - Math.floor(currentAnimation.rating)" :key="n" />
            </div>
            <div><span style="font-weight: 900;">观影时间：</span>{{ currentAnimation.watchtime}}</div>
            <p>{{ currentAnimation.info }}</p>
            <div class="tag flex items-end justify-end">
                <span class="badge badgecus " v-for="tag in currentAnimation.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</div>
</template>

<script>
import { onMounted } from 'vue';
import animations from '~/assets/json/animation.json';
export default {
  name: "Animation",
  data() {
    return {
      animations: animations,
      currentAnimation: null // 初始化为 null
    };
  },
 
  methods: {
    openModal(index) {
      console.log('Opening modal for index:', index); // 调试信息
      if (Number.isInteger(index) && index >= 0 && index < this.animations.length) {
        this.currentAnimation = this.animations[index];
        const modal = document.getElementById('myModal');
        if (modal && modal.showModal) {
          modal.showModal();
        } else {
          console.error('showModal is not supported');
        }
      } else {
        console.error('Invalid index:', index);
      }
    },
    closeModal() {
      const modal = document.getElementById('myModal');
      if (modal && modal.close) {
        modal.close();
      }
      this.currentAnimation = null; // 重置 currentAnimation
    }
  }
};
</script>


<style scoped>
.center{
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.bgani{
  @apply bg-blue-600;
}

.whole{
  @apply 
  container 
  mx-auto 
  w-full 
  h-full 
  absolute 
  center;
  /* overflow-hidden; */
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.bottomrectA{
  z-index: 2;
  @apply 
  w-full 
  relative 
  center 
  lg:p-3
  md:p-6
  overflow-scroll 
  overflow-x-hidden
  lg:h-[700px]
  md:h-[1024px];
}

.gridcus{
  @apply grid 
  sm:grid-cols-1 
  sm:mt-10
  md:mt-0
  md:grid-cols-2 
  lg:grid-cols-3
  lg:mt-0 
  xl:grid-cols-4 
  lg:gap-4 
  md:gap-2 
  overflow-scroll 
  overflow-x-hidden 
  items-center
  justify-center
}

.card {
  @apply 
  2xl:w-72 
  xl:w-60 
  lg:w-60 
  
  md:w-[330px]
  sm:w-56
  center
  bg-cyan-400;
  border:3px solid black;
  height: 315px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 66px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  overflow: hidden;
  box-shadow: -5px 5px 0px 3px rgba(0, 0, 0, .5);
}

.imgcard{
  width: 100%;
  height: 100%;
  border-right: 3px solid black;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
.badgecus{
  margin: 6px; 
  color:black;
  --c: #ff9b05;
	background: repeating-linear-gradient(45deg,var(--c),
              #000000,var(--c) 4%),
	            repeating-linear-gradient(-30deg,var(--c), 
              #3c3c3c, var(--c) 4%),
	            linear-gradient(0deg,#000000,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
  box-shadow: 0px 0px 0px 1px rgb(255, 255, 255,0.8);  
  border-width: 3px;
  border-color: #000;
  border-radius: 5px;
}
.rating {
  position: relative;
  scale: 1;
  padding: 0;
}
.star{
  background-color: darkorange;
}
.star1{
  background-color: darkorange;
  opacity: 0.3;
}
.buttoncus{
  @apply bg-emerald-300;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 2px;
  border-color: #000;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  position: relative;
  bottom: -15px;
  width: 100px;
  height: 120px;
}
.modaltext{
  font-size: 28px;
  text-align: center;
  color: #000000;
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 10px;
}
.title{
  text-align: center;
  position: absolute;
  top: 10%;
  right: 0%;
  font-size: larger;
  text-wrap: nowrap ;
  color: #242143;
  background-color:#fcd34d;
  box-shadow: 0px 0px 0px 2px #fff;  
  border-width: 3px;
  border-color: #000;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 15px;
  width: 245px;
}
</style>