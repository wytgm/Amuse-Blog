<template>
  
  <div>
  <topcollect/>
  <div class="container mx-auto">
    <div class="bg1"></div>
    <div class="bg2">
    <div id="staril" class="gridcus">
     <!-- 卡片 -->
     <div class="card"  v-for="(gacha, index) in gachas" :key="index">
      <div class="version" ></div>
      <!-- 卡片图片部分 -->
      <div class="imgcard">
        <template v-if="gacha.video">
          <video autoplay muted controls loop style="scale: 1.25;">
            <source :src="gacha.video" type="video/mp4">
          </video>
        </template>
        <template v-else>
          <a :href="gacha.photo">
            <img class="imgcus" :src="gacha.photo" :alt="gacha.photo" v-lazy="gacha.photo">
          </a>
        </template>
      </div>

      <div class="version">
      <span>{{gacha.version}}</span><br>
      <span>{{gacha.people}}</span>
      </div>
      <button class="btn buttoncus" @click="openModal(index)">记录一下</button>
    </div>
    </div>
     <!-- 卡片按钮弹窗：对话框列表 -->
     <dialog id="myModal" class="modal">
      <div class="modal-box lg:w-10/12 md:w-9/12" v-if="currentGacha" style="overflow: auto;">
        <h3 class="modaltext">{{ currentGacha.people }} 卡池记录!</h3>
        <div style="margin-top: 3%;" class="font">{{ currentGacha.content }}</div>
        <div style="margin-top: 2%;scale: 0.95;">
          <template v-if="currentGacha.video">
          <video autoplay muted controls loop>
            <source :src="currentGacha.video" type="video/mp4">
          </video>
        </template> 
        <template v-else>
          <img class="imgcus"  v-lazy="currentGacha.photo" :alt="currentGacha.photo">
        </template>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
    </dialog>
    </div>

    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="round1"></div>
    <div class="round2"></div>

  </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import gachas from '~/assets/json/gachadata.json';



export default {

  name:"GameGacha",

  data() {
    return {
      gachas: gachas,
      currentGacha:{}
    };
  },
  methods: {

  },

  setup() {
    onMounted(() => {

     

     
    });

  },
  methods:{
    openModal(index) {
      // Validate the index
      if (Number.isInteger(index) && index >= 0 && index < this.gachas.length) {
        this.currentGacha = this.gachas[index];
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
    }
  },

}
</script>

<style scoped>
.center{
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}
.bg1{
  @apply w-11/12 
  lg:h-[720px]
  md:h-[980px]
  md:w-[94.5%] 
  lg:rounded-3xl
  md:rounded-none
  center 
  absolute;
  background-color: rgb(157, 127, 255);
  /* border-radius: 25px; */
  border-width: 10px;
  border-color: black;  
}
.bg2{
  @apply 
  lg:w-9/12 
  sm:w-10/12 
  lg:h-[650px] 
  md:h-[910px] 
  center 
  absolute;
  background: repeating-linear-gradient(80deg,#ad28ff 0 2px,#c362ff 3px 4px,#a31df7 5px);
  border-radius: 25px;
  border-width: 5px;
  border-color: black;
  overflow: auto;
}
.gridcus{
 @apply 
 grid 
 lg:grid-cols-3 
 md:grid-cols-2
 sm:grid-cols-1 
 lg:p-3 
 md:p-3
 lg:gap-6
 md:gap-4
}
.card {
  @apply 
  center
  lg:w-[385px]
  lg:h-[295px]
  md:w-[300px]
  md:h-[300px];
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 5px 5px rgba(14, 28, 69, 0.5);
  background-color: #272627;
  background-image:repeating-linear-gradient(45deg,
  hsla(0,0%,100%,.1),
  hsla(0,0%,100%,.1) 15px,
  transparent 0,
  transparent 30px);
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.font{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
  text-align: center;
}
.imgcard{
  z-index: 3;
  width: 355px;height: 200px;
  background: #a31df7;
  border-radius: 30px;
  position: absolute;
  left: 15px;top: -20px;
  overflow: hidden;
  border-width: 3px;
  border-color: black;
}
.imgcus{
  object-fit: cover;
  transform: translate(0px,35px);
  scale: 1.4;
}
.version{
  background-color: rgb(171, 68, 250);
  width: 150px;height: 70px;
  position: absolute;
  left: 18px;
  bottom: 18px;
  border-radius: 35px;
  font-size: larger;
  text-align: center;
}
.buttoncus{
  @apply hover:bg-sky-500;
  padding: 10px;
  position: absolute;
  bottom: 7%;
  right: 5%;
  color: #202020;
  font-size: 28px;
  scale: 0.85;
  background-color: coral;

}
.modaltext{
  text-align: center ;
  font-size: 36px;
  line-height: 1.75rem ;
  font-weight: 900;
  margin-top: 3%;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.rect1{
  z-index: 2;
  width: 150px;height:75px;
  background-color: rgb(255, 249, 127);
  position: absolute;
  left: 3%;top:20%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}
.rect2{
  z-index: 2;
  width: 150px;height:75px;
  background-color: rgb(255, 249, 127);
  position: absolute;
  left: 3%;top:35%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}
.round1{
  z-index: 4;
  width:50px;height:50px;
  background-color: aquamarine;
  position: absolute;
  left: 6.2%;top: 8.5%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}
.round2{
  z-index: 4;
  width:50px;height:50px;
  background-color: aquamarine;
  position: absolute;
  right: 6.5%;bottom: 14%;
  border-radius: 25px;
  border-width: 10px;
  border-color: black;
}
@media (max-width: 960px) {
.rect1{
  display: none;
}
.rect2{
  display: none;
}
.round1{
  display: none;
}
.round2{
  display: none;
}
.imgcard{
  z-index: 3;
  width: 285px;
  height: 200px;
}
.buttoncus{
  scale: 0.65;
  margin-left: 45px;

}


}




</style>