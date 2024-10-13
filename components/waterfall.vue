<template>
  <div>
    <div class="waterfall">
      <div class="waterfall-item" v-for="(image, index) in images" :key="index">
        <img v-lazy="image.src"  class="lazy-image" alt="image.alt"  @load="handleImageLoad" />
      </div>
    </div>
  </div>
</template>

<script setup>
import list from '~/assets/json/meitu.json';
const images = list;  

const handleImageLoad = (event) => {
  const img = event.target;
  img.classList.add('loaded');

  const container = document.querySelector('.waterfall');
  const items = Array.from(container.querySelectorAll('.waterfall-item'));
  const columnCount = 3; // 设置列数
  const gap = 10; // 设置间距

  waterfallLayout(container, items, columnCount, gap);
};

function waterfallLayout(container, items, columnCount, gap) {
  const containerWidth = container.offsetWidth;
  const itemWidth = (containerWidth - (columnCount - 1) * gap) / columnCount;
  const columns = Array(columnCount).fill(0); // 记录每一列的高度

  items.forEach((item, index) => {
    const columnIndex = index % columnCount;
    const top = columns[columnIndex];
    const left = columnIndex * (itemWidth + gap);

    item.style.position = 'absolute';
    item.style.top = `${top}px`;
    item.style.left = `${left}px`;
    item.style.width = `${itemWidth}px`;

    const itemHeight = item.offsetHeight;
    columns[columnIndex] += itemHeight + gap;
  });
}

onMounted(() => {
  const container = document.querySelector('.waterfall');
  const items = Array.from(container.querySelectorAll('.waterfall-item'));
  const columnCount = 3; // 设置列数
  const gap = 10; // 设置间距

  waterfallLayout(container, items, columnCount, gap);

  // 图片懒加载
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(lazyImage);
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[v-lazy]');
  lazyImages.forEach(img => {
    observer.observe(img);
  });
});

</script>

<style>
.waterfall {
  position: relative;
}

.waterfall-item {
  position: absolute;
  width: 200px; /* 设置每张图片的宽度 */
}

.waterfall-item img {
  width: 100%;
  display: block;
  border-radius: 25px;
  border: 2px solid black;
  opacity: 0; /* 初始状态为透明 */
  transition: opacity 0.8s ease-in-out; /* 添加淡入动画 */
}

.waterfall-item img.loaded {
  opacity: 1; /* 图片加载完成后显示 */
}
</style>