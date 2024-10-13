<template>
  <div>
    <topcollect/>
    <div class="-z-1 center  w-full h-full overflow-hidden absolute bgame"></div>  
    <div class="whole">
      <div class="bottomrectG">
        <div class="grid grid-cols-3 gap-2 gridcus">
        <div class="card"  v-for="(game, index) in games" :key="index">
          <!-- 卡片图片部分 -->
          <div class="imgcard">
            <img class="imgcus" :alt="game.title" v-lazy="game.poster">
          </div>
          <div class="title">
            <p class="text-center">{{game.title}}</p>
          </div>
          <button class="btn buttoncus" @click="openModal(index)">游玩体验</button>
        </div>
        </div>
        <!-- 卡片按钮弹窗：对话框列表 -->
        <dialog id="myModal" class="modal">
          <div class="modal-box" v-if="currentGame" style="overflow: auto;">
            <h3 class="modaltext">{{ currentGame.title }} 游玩体验!</h3>
              <div class="flex flex-row w-full mt-1 items-center justify-center p-4">
                <button class="flex w-1/2 btn bg-rose-500 hover:bg-sky-500" 
                    @click="goToLink">{{ currentGame.title }}详细内容
                </button>
                <button  class="w-1/2 btn bg-fuchsia-500 hover:bg-yellow-500" 
                onclick="window.location.href='/GameGacha';">抽卡记录
                </button>
            
              </div>
            <div style="margin-top: 10px;"><span>{{ currentGame.description }}</span></div>
          </div>  
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

  </div>
  </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import games from '~/assets/json/game.json';
export default {
  name: "Animation",
  data() {
    return {
      games: games,
      currentGame: null // 初始化为 null
    };
  },
 
  methods: {
    openModal(index) {
      console.log('Opening modal for index:', index); // 调试信息
      if (Number.isInteger(index) && index >= 0 && index < this.games.length) {
        this.currentGame = this.games[index];
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
      this.currentGame = null; // 重置 currentGame
    },
    goToLink() {
    window.location.href = this.currentGame.link;
    },
  }
};
</script>


<style scoped>
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.bgame{
  --c: #77ff00;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 0.5%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 0.5%),
	            linear-gradient(45deg,#000000,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
}
.whole{
  @apply 
  container 
  mx-auto 
  w-full h-full  
  center;
 
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.bottomrectG{
  z-index: 2;
  @apply 
  w-full 
  relative 
  center 
  lg:p-3
  md:p-8
  overflow-scroll 
  overflow-x-hidden
  lg:h-[700px]
  md:h-[1024px];
}
.gridcus{
  @apply grid 
  sm:grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-3 
  lg:gap-2 
  md:gap-5 
  overflow-scroll 
  overflow-x-hidden 
  items-center
  justify-center

}
.card {
  @apply 
  relative
  xl:w-[480px]
  xl:h-[266px]
  lg:w-[320px]
  lg:h-[266px]
  md:w-[345px]
  md:h-[266px]
  sm:w-[315px]
  sm:h-[266px]
  ;
  position: relative;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 45px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, .1);
  background-color: #202020;
  background-image:repeating-linear-gradient(45deg,
  hsla(0,0%,100%,.1),
  hsla(0,0%,100%,.1) 15px,
  transparent 0,
  transparent 30px);
}
.imgcard{
  width: 100%;height: 180px;
  background-color: azure;
  border-radius: 15px;
  position: absolute;
  left: 0px;top: 0;
  overflow: hidden;
}
.imgcus{
  scale: 1.5;
}
.title{
  width: 230px;
  height: 50px;
  position:absolute; 
  bottom:15px;
  left:35px;
  /* border-radius: 15px; */
  --c: #05ff6d;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 3%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 3%),
	            linear-gradient(45deg,#202020,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 10px;
}
p{
  line-height: 2.2rem;

  font-size: 24px;
  color: rgb(20, 20, 20);
}

.star{
  background-color: darkorange;
}
.star1{
  background-color: darkorange;opacity: 0.3;
}
.buttoncus{
  position: absolute;
  bottom: 3%;
  right:  3%;
  color: #202020;
  font-size:larger;
  --c: #ff8400;
	background: repeating-linear-gradient(45deg,var(--c),#000000,var(--c) 3%),
	            repeating-linear-gradient(-30deg,var(--c), #3c3c3c, var(--c) 3%),
	            linear-gradient(45deg,#202020,var(--c));
	background-blend-mode: color-dodge;
	filter: contrast(5);
  box-shadow: 0px 0px 0px 3px rgb(255, 255, 255,0.8);  
  border-width: 4px;
  border-color: #000;
  border-radius: 25px;
  scale: 0.85;
}
.clobutton{
  position: absolute;
  right: 0.5rem ;
  top: 0.5rem;
  scale:0.8;
}
.modaltext{
  text-align: center;
  font-size: 36px;
  line-height: 1.75rem ;
  font-weight: 900;
  margin-top: 10px;
}
@media (max-width: 960px) {
  .title{
  width: 100%;
  height: 50px;
  position:absolute; 
  top:0px;
  left:0px;
  font-size:smaller;
}
}

</style>