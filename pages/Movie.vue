<template>
  <div>
    <topcollect/>
    <div class="-z-1 absolute w-full h-full bg-[#112E4F]"></div>
    
    <div class="whole">
    <div class="bottomrectM">
      <div class="gridcusM">
            <div class="movie-card flex flex-row" v-for="(movie, index) in movies" :key="index">
              <div class="flex w-1/2 h-full relative">
                <div>
                  <img class="movie-img" v-lazy="movie.poster" :alt="movie.title" />
                </div>
              </div>
              <div class="flex flex-col w-1/2 h-full relative items-center justify-center space-y-6 p-3">
                <span class="movie-title">{{ movie.title }}</span>
                <!-- <div class="movie-rating">
                  <input class="mask mask-star-2 movie-star"  v-for="n in Math.floor(movie.rating)" :key="n" />
                  <input class="mask mask-star-2 movie-star1" v-for="n in 5 - Math.floor(movie.rating)" :key="n" />
                </div> -->
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
  ;
  
  /* overflow-hidden; */
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}
.bottomrectM{
  z-index: 2;
  @apply 
  absolute
  w-full 
  relative 
  center 
  p-2
  overflow-scroll 
  overflow-x-hidden
 ;
  height: 700px;
  /* background-color: #1e02f0; */
}

.gridcusM{
  @apply grid 
  sm:grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
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
  xl:w-[358px]
  xl:h-[285px]
  bg-slate-800;
  background-image:repeating-linear-gradient(45deg,
                hsla(0,0%,100%,.1),
                hsla(0,0%,100%,.1) 16px,
                transparent 0,
                transparent 30px);
}
.movie-img{
  @apply
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
.movie-rating {
  position: relative;
  scale: 0.75;
  padding: 0;
}
.movie-star{
  background-color: rgb(255, 13, 0);
}
.movie-star1{
  background-color: rgba(255, 0, 0,0.3);
}
.movie-button{
  position: relative;
  bottom: -22%;
  --c: #1b64ca;
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
</style>