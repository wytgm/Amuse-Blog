<template>
  <div>
    <topmeitu/>
    <div class="-z-1 center  w-full h-full overflow-hidden">
      <video class="center scale-125" muted autoplay loop>
        <source src="/BG.mp4" type="video/mp4">
      </video>
    </div>  
    <div class="container mx-auto w-[96%] h-[720px] center bg1">
      <div class="w-[83%] h-[660px] center bg2">
        <MeituPubuliu />
      </div>
    </div>
  </div>
</template>

<script> 
import { onMounted, ref } from 'vue';
import meitus from '~/assets/json/meitu.json';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
import MeituPubuliu from '../components/MeituPubuliu.vue';

export default  {
  name:"Gamebeauty",
  components:{
    LazyImg,Waterfall,MeituPubuliu
  },
  setup() {
  const list = ref([]); // 使用 ref 初始化 list

  const onImageLoad = (event) => {
    console.log('Image loaded:', event.target.src);
  };

  const onImageError = (event) => {
    console.error('Image failed to load:', event.target.src);
  };

  onMounted(() => {
    // 初始化 list 数据
    list.value = meitus;
    console.log('Waterfall component mounted');

    // 输出 list 数据信息到控制台
    console.log('List data:', list.value);

    // 确保 list 数据已经传递给 Waterfall 组件
    if (list.value.length > 0) {
      console.log('Waterfall component should render images now.');
    } else {
      console.log('List is empty, no images to render.');
    }

    // 灯箱图片放大插件
    lightGallery(document.getElementById('gallery'), {
      selector: 'a',
      mode: 'lg-fade',
      speed: 1000,
      download: false,
      plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen],
    });

    // 计算json文件中的数据数量
      // fetch('~/assets/json/meitu.json')
      // .then(response => response.json())
      // .then(data => {
      //   const count = data.length;
      //   document.getElementById('count').textContent = `༺ 共收集 ${count} 张美图 ༻`;
      // })
      // .catch(error => {
      //   console.error('发生错误：', error);
      //   document.getElementById('count').textContent = '加载数据时发生错误。';
      // });
  });
},
}
</script>

<style scoped>
.center{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}
.bg1{
  background-color: rgb(255, 54, 191);
  border-radius: 25px;
  border-width: 10px;
  border-color: rgb(161, 3, 111);
}
.bg2{
  background: repeating-linear-gradient(80deg,
  #ffbb29 0 2px,
  #ffed65 3px 4px,
  #ffbb29 5px);
  border-radius: 25px;
  border-width: 5px;
  border-color: black;
  overflow: auto;
  overflow-x: hidden;
}
.imgcus {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  -o-object-fit: cover;
  object-fit: cover;
  inset: 0px;
  scale: 1.2;
}
/* .cardcus {
  width:100%;
  height:fit-content;
  overflow: hidden;
  padding: 0.25em;

} */
.data{
  position: relative;
  top: 3%;
  left: -40%;
  font-size:x-large;
  font-weight: 800;
  color: aliceblue;
  text-align: center;
}
</style>