<template>
  <div class="card w-full object-cover " style="height:100%; box-shadow: 10px 5px 0px 3px #6BC2E7;">
    <div id="player"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Music from '~/assets/json/music.json';
import 'aplayer/dist/APlayer.min.css';
import  APlayer from 'aplayer'
export default {
  name: "Music",
  setup() {
    const audioList = ref([]);
    onMounted(async () => {
      try {
        const ap = new APlayer({
          container: document.getElementById('player'),
          autoplay: false, 
          listFolded: true,
          lrcType: 3,
          audio: Music,
        });
      } catch (error) {
        console.error('Error loading audio list:', error);
      }
    });
    return {
      audioList
    };
  },
}
</script>

<style>
.center{
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
/* bg-[#6BC2E7] */
.aplayer {
  @apply 
  flex 
  flex-col 
  w-full 
  h-full
  center
  absolute
  object-cover
  space-y-4
  rounded-xl;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
 
}
.aplayer .aplayer-body {
  @apply space-y-6;
  margin-top: 10px ;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-items: center;
  position: relative;
  width: 100%;
  height: 100%;
}
.aplayer .aplayer-list.aplayer-list-hide {
    max-height: 0 !important;
    display: none;
    opacity: 0;
}
.aplayer.aplayer-withlist .aplayer-list {
    display: block;
}
.aplayer .aplayer-list {
  @apply z-30 card p-6 absolute left-0 bottom-0 w-full h-full bg-yellow-200 ;
  object-fit: cover;
  width: 60%;
  height: 100%;
  overflow: auto;
  transition: all .25s ease;
  will-change: height;
  display: none;
  overflow: hidden;
}
.card{
  border: 0px;
  box-shadow: -10px -5px 0px 5px #6BC2E7;
}

/* 封面 */
.aplayer.aplayer-withlrc .aplayer-pic {
    height: 180px;
    width: 180px;
    border-radius: 50%;
}
.aplayer .aplayer-pic {
  @apply w-12 relative top-0;
  border-radius: 50%;
  position: relative;
  float: none;
  background-size: cover;
  background-position: 50%;
  transition: all .3s ease;
  cursor: pointer;
}
/* 播放按钮 */
.aplayer .aplayer-pic .aplayer-play {
    width: 26px;
    height: 26px;
    border: 2px solid #fff;
    bottom: 50%;
    right: 50%;
    margin: 0 -15px -15px 0;
    scale: 2; 
}
/* body【歌曲名+歌词+进度条】 */
.aplayer.aplayer-withlrc .aplayer-info {
  @apply relative;
    margin-left: 0;
    height: 100%;
    padding: 10px 7px 0;
}
/* 歌曲名称整体 */
.aplayer .aplayer-info .aplayer-music {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 13px 5px;
    -webkit-user-select: text;
    -moz-user-select: text;
    user-select: text;
    cursor: default;
    padding-bottom: 2px;
    height: 35px;
    text-align: center;
}
/* 歌曲标题 */
.aplayer .aplayer-info .aplayer-music .aplayer-title {
    font-size: 28px;
    color:blueviolet;
}
/* 歌曲作者 */
.aplayer .aplayer-info .aplayer-music .aplayer-author {
    font-size: 14px;
}
/* 歌词 */
.aplayer .aplayer-lrc {
    display: none;
    position: relative;
    height: 360px;
    text-align: center;
    overflow: hidden;
    margin: -10px 0 7px;
    
}
/* 控制器 */
.aplayer .aplayer-info .aplayer-controller {
  position: relative;
  bottom: -20px;
  right: 60px;
  width: 150%;
}
/* 控制器图标 */
.aplayer .aplayer-info .aplayer-controller .aplayer-time {
    position: relative;
    right: 0;
    bottom: 4px;
    height: 17px;
    color: #999;
    font-size: 11px;
    padding-left: 7px;
    scale: 1.25;
}
/* 控制器进度条 */
.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap {
    margin: 0 0 0 5px;
    padding: 4px 0;
    cursor: pointer !important;
    flex: 1;
    margin-right: 15px;
}
/* 歌词渐隐取消 */
.aplayer .aplayer-lrc:before {
    top: 0;
    height: 10%;
    background: linear-gradient(180deg, #ffffff00 0, hsla(0, 0%, 100%, 0));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#00ffffff",GradientType=0);
}
.aplayer .aplayer-lrc:after {
    bottom: 0;
    height: 33%;
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, 0));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffffff",endColorstr="#ccffffff",GradientType=0);
}
</style>