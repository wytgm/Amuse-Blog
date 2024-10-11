<template>
  
  <div class="carousel w-full h-full relative object-cover rounded-md">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :id="'slide' + (index + 1)"
      class="carousel-item relative w-full h-full object-cover overflow-hidden"
    
    >
    <NuxtLink to="/MeituCollect" class="w-full">
      <img class="relative w-full h-full object-cover" :src="slide.src" />
    </NuxtLink>
     
 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {src: 'https://gamecms-res.sl916.com/official_website_resource/50001/4/PICTURE/20240723/8_7c37eecaa8d34f599c4542f0663de502.jpg'},
        {src: 'https://gamecms-res.sl916.com/official_website_resource/50001/4/PICTURE/20240902/295 2436x1125_b136c2a394d34572b4055e98acea84f8.jpg'},
        { src: 'http://cdn.sonderwyt.top/Cover/gamemeitu/124.webp' },
        { src: 'http://cdn.sonderwyt.top/Cover/gamemeitu/113.webp' },
        { src: 'https://upload-bbs.miyoushe.com/upload/2024/07/21/471895/f9e85a61b3c17aa6f9be2ce6570658bc_166378866410680761.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png' },
        { src: 'https://i.bobopic.com/small/120355204.jpg' },
      ],
      currentIndex: 0,
      intervalId: null,
      isForward: true // 控制轮播方向
    };
  },
  mounted() {
   
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.stopAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.intervalId = setInterval(() => {
        
        if (this.isForward) {
          this.currentIndex = (this.currentIndex + 1) % this.slides.length;
          if (this.currentIndex === this.slides.length - 1) {
            this.isForward = false; // 到达最后一张图片时，切换为反向播放
          }
        } else {
          this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
          if (this.currentIndex === 0) {
            this.isForward = true; // 回到第一张图片时，切换为正向播放
          }
        }
        const nextSlide = document.getElementById(`slide${this.currentIndex + 1}`);
        if (nextSlide) {
          nextSlide.scrollIntoView({ behavior: 'smooth' });
        }
      }, 3000); // 每5秒切换一次
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    }
  }
}
</script>

<style scoped>
/* 你可以在这里添加样式 */
.cusw {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border-width: 5px;
  border-color: black;
  /* box-shadow: 0px 0px 0px 0px rgb(255, 255, 255,0.8);   */
  overflow: hidden;
}
.imgcus{
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  transform: translateY(-30px);

}



</style>