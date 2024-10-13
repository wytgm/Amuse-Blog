<template>
  <div>
    <topcollect/>
    <div class="-z-1 center  w-full h-full overflow-hidden absolute bgcollect"></div>  
    <div class="whole">
    <div class="bottomrectM">
      <div class="gridcusM">
        <div class="movie-card flex flex-row" v-for="(movie, index) in movies" :key="index">
          <div class="flex w-1/2 h-full relative border-[3px] border-black rounded-lg"> 
              <img class="movie-img" v-lazy="movie.poster" :alt="movie.title" />
          </div>
          <div class="flex flex-col w-1/2 h-full relative items-center justify-center space-y-6 p-3">
            <span class="movie-title">{{ movie.title }}</span>
            <span  class="movie-title1"><span class="p-3">{{ movie.watchtime}}</span></span>
            <div class="rating">
              <input class="mask mask-star-2 movie-star"  v-for="n in Math.floor(movie.rating)" :key="n" />
              <input class="mask mask-star-2 movie-star1" v-for="n in 5 - Math.floor(movie.rating)" :key="n" />
            </div>
            <button class="btn movie-button underline decoration-wavy" @click="openModal(index)">观影感受</button>
          </div>
        </div>
      </div>
        
    </div>
     <!-- 卡片按钮弹窗：对话框列表 -->
     <dialog id="myModal" class="modal">
      <div class="modal-box" v-if="currentMovie">
        <h3 class="modaltext mt-2">{{ currentMovie.title }} 观影感受!</h3>
        <div class="flex flex-row p-4 mt-2">
          <span class="flex w-1/2 rounded-lg overflow-hidden">
            <img v-lazy="currentMovie.poster" :alt="currentMovie.title">
          </span>
          <div class="flex flex-col w-1/2 ml-4 space-y-4 ">
            <div class="rating">
              <span style="font-weight: 900;">个人评分：</span>
              <input class="mask mask-star-2 movie-star"  v-for="n in Math.floor(currentMovie.rating)" :key="n" />
              <input class="mask mask-star-2 movie-star1" v-for="n in 5 - Math.floor(currentMovie.rating)" :key="n" />
            </div>
            <div><span style="font-weight: 900;">观影时间：</span>{{ currentMovie.watchtime}}</div>
            <p>{{ currentMovie.info }}</p>
            <div class="tag flex items-end justify-end">
                <span class="badge badgecus " v-for="tag in currentMovie.tags" :key="tag">{{ tag }}</span>
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
import movies from '~/assets/json/movie.json';

export default {
  name: "movie",
  data() {
    return {
      movies: movies,
      currentMovie: null // 初始化为 null
    };
  },
 
  methods: {
    openModal(index) {
      console.log('Opening modal for index:', index); // 调试信息
      if (Number.isInteger(index) && index >= 0 && index < this.movies.length) {
        this.currentMovie = this.movies[index];
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
      this.currentMovie = null; // 重置 currentMovie
    }
  }
};
</script>

<style scoped>
.bgcollect{
  @apply bg-purple-600;
}
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.whole{
  @apply 
  container 
  mx-auto 
  w-full h-full  
  center
  absolute
  overflow-x-hidden
  ;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.bottomrectM{
  z-index: 2;
  @apply 
  absolute
  w-full 
  relative 
  center 
  lg:p-6
  md:p-8
  overflow-scroll 
  overflow-x-hidden
  xl:h-[700px]
  lg:h-[1024px]
  md:h-[1024px]
  sm:h-[790px]
 ;
  /* height: 700px; */
  /* background-color: #F8D88A; */
}

.gridcusM{
  @apply grid 
  sm:grid-cols-1 
  sm:mt-10
  md:mt-0
  md:grid-cols-2 
  lg:grid-cols-3 
  lg:mt-0
  xl:grid-cols-4 
  gap-2 
  overflow-scroll 
  overflow-x-hidden 
  items-center
  justify-center
}
.movie-card{
  @apply
  w-full
  h-full
  object-cover
  overflow-hidden
  xl:w-[350px]
  xl:h-[285px]
  bg-purple-400
 ;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 65px;
  border: 3px solid #1f1f1f
}
.movie-img{
  @apply
  rounded-lg
  w-full
  h-full
  object-cover
  ;
}
.movie-title{
  text-align: center;
  position: absolute;
  top: 6%;
  right: 0%;
  font-size: larger;
  text-wrap: nowrap ;
  color: #000000;
  background-color:lightskyblue;
  border: 3px solid black;
}
.movie-title1{
  color: #000000;
  text-align: center;
  position: absolute;
  bottom: 0%;
  right: 10%;
  font-size: larger;
  text-wrap: nowrap ;
  color: #000000;
  background:  #fde047;
  border: 3px solid black;
  border-radius: 85px;
  padding: 3px;
}
.movie-rating {
  position: relative;
  scale: 0.75;
  padding: 0;
}
.movie-star{
  @apply  bg-violet-600;
  /* background-color: rgb(238, 255, 0); */
}
.movie-star1{
  @apply  bg-fuchsia-200;
  /* background-color: rgba(238, 255, 0,0.4); */
}
.movie-button{
  background: #6ee7b7;
  border-width: 4px;
  border-color: #000;
  border-radius: 3px;
  width: 230px;
  color: #1f1f1f;
  font-size: larger;
  font-style: oblique;
  font-weight: 300;
  scale: 0.8;

}


</style>