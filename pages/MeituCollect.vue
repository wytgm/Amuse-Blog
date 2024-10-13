<template>
  <div>
    <div class="-z-1 center  w-full h-full overflow-hidden">
      <video class="center scale-125" muted autoplay loop>
        <source src="/BG.mp4" type="video/mp4">
      </video>
    </div>  
    <div class="container mx-auto w-[96%] h-[720px] center bg1">
      <div class="w-[83%] h-[660px] center bg2">
        
          <waterfall class="p-4" />
        
      </div>
    </div>
  </div>
</template>

<script> 
import { onMounted, ref } from 'vue';
import meitus from '~/assets/json/meitu.json';

export default  {
  name:"Gamebeauty",
  mounted() {
    this.isClient = true;
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
</style>