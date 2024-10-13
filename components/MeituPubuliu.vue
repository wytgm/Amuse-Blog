<template>
  <div class="container mx-auto w-full h-full absolute top-2 left-2">
    <no-ssr>
      <Waterfall 
      backgroundColor="rgba(255,255,255,0)"
      :list="list" 
      :breakpoints="breakpoints" 
      :gutter="8">
        <template #default="{url}">
          <div class="card">
            <a :href="url">
            <LazyImg class="imgcus" :url="url" />
            </a>
          </div>
        </template>
      </Waterfall>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr';
import { onMounted, ref } from 'vue';
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
import list from "~/assets/json/meitu.json"

export default {
  name:"Meitu",
  components: { LazyImg, Waterfall,NoSSR, }, //组件列表
  data() {
    return {
      list:list,
      breakpoints: {
        1536: {
          // when wrapper width < 1200
          rowPerView: 5,
        },
        800: {
          // when wrapper width < 800
          rowPerView: 2,
        },
        500: {
          // when wrapper width < 500
          rowPerView: 1,
        },
      }
    };
  },
  setup() {
  onMounted(() => {

  });
},
};
</script>

<style>
body{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
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
.card {
  width:100%; /* 确保卡片宽度适应父容器 */
  height:fit-content;
  font-family:"comic" ;
  overflow: hidden;
  border-width: 5px;
  padding: 0.25em;
  border-color: black;
}
</style>