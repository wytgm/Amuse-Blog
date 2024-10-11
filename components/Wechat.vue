<template>
  <div class="container mx-auto">
    <div class="card-bg">
      <div class="flex flex-row w-full h-full relative top-0 left-0">
        <div class="flex w-36 h-full items-center justify-center">
          <div class="ava">
            <img src="http://cdn.sonderwyt.top/Cover/gamemeitu/059.webp" class="w-full h-full object-cover" alt="">
          </div> 
        </div>
        <div class="flex flex-col w-full h-full space-y-5 items-center justify-center">
          <div class="title">
            <h1>卡芙卡</h1>
            <p>邀请您通话......</p>
          </div>
          <audio ref="audioPlayer"></audio>
          <div class="flex flex-row space-x-28">
            <div class="flex w-full h-full" >
              <button id="red" class="btn btn- btn-circle bg-red-500 center"  @click="playRandomAudio">
                <svg class="w-full h-full object-cover overflow-hidden scale-75 relative -left-1"  xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 22 22">
                  <path fill="#ffffff" d="M20 12q-.4 0-.712-.288T18.925 11q-.325-2.325-1.963-3.963T13 5.076q-.425-.05-.712-.35T12 4t.3-.712t.7-.238q3.15.35 5.375 2.575T20.95 11q.05.4-.238.7T20 12m-4.175 0q-.325 0-.575-.225t-.375-.6q-.2-.725-.763-1.287t-1.287-.763q-.375-.125-.6-.375T12 8.15q0-.5.35-.812t.775-.213q1.4.325 2.413 1.338t1.337 2.412q.1.425-.225.775t-.825.35m4.125 9q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/>
                </svg>
              </button>
            </div>
            <div class="flex w-full h-full">
              <button class="btn btn-circle bg-green-500" onclick="my_modal_1.showModal()">
                <svg id="green" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#ffffff" d="M9 13v2q0 .425.288.713T10 16t.713-.288T11 15v-2h2q.425 0 .713-.288T14 12t-.288-.712T13 11h-2V9q0-.425-.288-.712T10 8t-.712.288T9 9v2H7q-.425 0-.712.288T6 12t.288.713T7 13zm-5 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"/>
                </svg>
              </button>
              <dialog id="my_modal_1" class="modal">
                <div class="modal-box">
                  <h3 class="text-lg font-bold">Hello!</h3>
                  <p class="py-4">Press ESC key or click the button below to close</p>
                  <!-- <iframe 
                  style=" border-radius: 15px;" 
                  src="https://player.bilibili.com/player.html?bvid=BV1MN41187U6&page=1&autoplay=0" 
                  allowfullscreen width="100%" 
                  height="285" 
                  scrolling="no" 
                  frameborder="0">
                </iframe> -->

                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div> 
        </div>
      </div>
      <!-- 头像部分 -->
      <!-- <div class="ava">
        <img src="http://cdn.sonderwyt.top/Cover/gamemeitu/059.webp" class="w-full h-full object-cover" alt="">
      </div> -->

      <!-- 标题文字 -->
      <!-- <div class="title">
        <h1 style="font-size: xx-large;color: black; ">卡芙卡</h1>
        <p style="font-size: medium;color: black;">邀请您通话......</p>
      </div> -->
      <!-- 电话按钮 -->
      <!-- <audio ref="audioPlayer"></audio>
      <div class="flex relative top-18 h-12">
        <div class="flex-auto w-10" >
          
          <button id="red" class="btn btn-circle bg-red-500"  @click="playRandomAudio">
            <svg style="position:relative;" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
            <path fill="#ffffff" d="M20 12q-.4 0-.712-.288T18.925 11q-.325-2.325-1.963-3.963T13 5.076q-.425-.05-.712-.35T12 4t.3-.712t.7-.238q3.15.35 5.375 2.575T20.95 11q.05.4-.238.7T20 12m-4.175 0q-.325 0-.575-.225t-.375-.6q-.2-.725-.763-1.287t-1.287-.763q-.375-.125-.6-.375T12 8.15q0-.5.35-.812t.775-.213q1.4.325 2.413 1.338t1.337 2.412q.1.425-.225.775t-.825.35m4.125 9q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/>
          </svg>
          </button>
        </div>
        <div class="flex-auto w-10">
          <button class="btn btn-circle bg-green-500" onclick="my_modal_1.showModal()">
            <svg id="green" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#ffffff" d="M9 13v2q0 .425.288.713T10 16t.713-.288T11 15v-2h2q.425 0 .713-.288T14 12t-.288-.712T13 11h-2V9q0-.425-.288-.712T10 8t-.712.288T9 9v2H7q-.425 0-.712.288T6 12t.288.713T7 13zm-5 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"/>
            </svg>
          </button>
          <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
              <h3 class="text-lg font-bold">Hello!</h3>
              <p class="py-4">Press ESC key or click the button below to close</p>
              <iframe 
              style=" border-radius: 15px;" 
              src="https://player.bilibili.com/player.html?bvid=BV1MN41187U6&page=1&autoplay=0" 
              allowfullscreen width="100%" 
              height="285" 
              scrolling="no" 
              frameborder="0">
            </iframe>

              <div class="modal-action">
                <form method="dialog">
                  <button class="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

      </div> -->
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ref, onMounted, watch } from 'vue';

export default {
  name: "Wechat",
  setup() {
    const audioPlayer = ref(null);
    const audioFiles = [
      'https://patchwiki.biligame.com/images/sr/e/e4/98ftvjsoaq19h6hj1qg7qf3oohrhrq3.mp3',
      'https://patchwiki.biligame.com/images/sr/6/6f/dlyqgavtfiyaj2aymblkevhl9rz0wex.mp3',
      'https://patchwiki.biligame.com/images/sr/1/1a/6jg2uu2giwfwdcx41bfrhc08klxsrpx.mp3',
      'https://patchwiki.biligame.com/images/sr/9/9e/anaqzhsqfklh4efvhznsxbng09v3tgj.mp3',
      'https://patchwiki.biligame.com/images/sr/7/79/kx2qo7wyzr5lem70uyxw3bzbj3vp5qe.mp3'
      // 添加更多音频文件
    ];

    const currentAudio = ref(null);

    const playRandomAudio = () => {
      const randomIndex = Math.floor(Math.random() * audioFiles.length);
      currentAudio.value = audioFiles[randomIndex];
    };

    watch(currentAudio, (newAudio) => {
      if (newAudio) {
        audioPlayer.value.src = newAudio;
        audioPlayer.value.play();
      }
    });

    onMounted(() => {
      gsap.to("#red", {
        scale: 1.2,
        duration: 0.3,
        repeat: -1,
        yoyo: 1
      });
      gsap.to("#green", {
        rotation: 15,
        duration: 0.8,
        repeat: -1,
        yoyo: 1
      });
      gsap.to(".ava", {
        rotation: -3,
        scale:1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: 1
      });



    });

    return {
      audioPlayer,
      playRandomAudio
    };

  },
  methods:{
    openModal() {
      const modal = document.getElementById('my_modal_1');
      modal.showModal(); // 使用 showModal() 方法打开弹窗
    },
  }
}
</script>

<style>
.card-bg {
  z-index: 1;
  width: 100%;
  height:235px;
  position: relative;
  top:0;left: 0;
  border: 3px solid #000;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';
}

.ava {
  width: 100px;
  height: 100px;
  border-radius: 55px;
  overflow: hidden;

}

.title {
  z-index: 1;
  position: relative;
}

.red {
  z-index: 1;
  width: 60px;
  height: 60px;
  position: relative;
  top: 0px;
  left: 0px;
  background-color: rgb(237, 53, 53);
  border-radius: 35px;
}

.green {
  z-index: 1;
  width: 60px;
  height: 60px;
  position: relative;
  top: 35px;
  left: 220px;
  background-color: rgb(53, 237, 75);
  border-radius: 35px;
}
.vbtnpos{
  position: relative;
  top: 145px;
}

audio {
  display: none; /* 隐藏音频条 */
}
</style>