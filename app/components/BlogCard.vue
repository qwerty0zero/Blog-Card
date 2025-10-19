<script setup lang="ts">
import imgPng from '~/assets/img/1.png'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <article>
    <div class="img-wrapper">
      <picture>
        <source :srcset="imgPng" />
        <img :src="imgPng" alt="" />
      </picture>
    </div>

    <div class="info_card">
      <span class="badge">Interior</span>
      <h3 class="blog_title">{{ data.title }}</h3>
      <p class="blog_description">{{ data.description }}</p>
      <button>Read more</button>
    </div>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: white;
  transition: 0.3s ease;
  height: 100%;
}


.img-wrapper {
  overflow: hidden;
  border-radius: 1.6rem 1.6rem 0 0;
}

.img-wrapper img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

article:hover .img-wrapper img {
  transform: scale(1.2);
}

.picture,
picture,
.img-wrapper {
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 1.6rem 1.6rem 0 0;
  width: 100%;
  max-width: 100%;
}

picture img {
  display: block;
  width: 100%;
  height: auto;         /* ✅ сохраняем пропорции */
  object-fit: cover;    /* ✅ вписываемся без искажений */
  transition: transform 0.5s ease;
  transform-origin: center;
}

/* Увеличение при hover */
article:hover picture img {
  transform: scale(1.2);
}
.info_card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem;
  flex: 1;
}

span {
  color: var(--green-color);
  border: 2px solid var(--light-green-color);
  width: fit-content;
  padding: 0.3rem 0.8rem;
  border-radius: 3rem;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: var(--light-color);
}

h3 {
  font-size: 3rem;
  font-weight: 700;
}

p {
  font-size: 2rem;
  font-weight: 400;
}

button {
  display: flex;
  align-items: center;
  margin-top: auto;
  width: fit-content;
  font-size: 1.6rem;
  color: var(--blue-color);
  border: 3px solid transparent;
  padding: 0.2rem 0.6rem;
  border-radius: 0.3rem;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button::after {
  transition: 0.3s;
  content: '';
  vertical-align: middle;
  height: 20px;
  width: 20px;
  line-height: 0;
  display: block;
  mask: url("~/assets/img/arrow.svg") no-repeat center / contain;
  -webkit-mask: url("~/assets/img/arrow.svg") no-repeat center / contain;
  background-color: currentColor;
}

button:hover::after {
  margin-left: 10px;
}
button:active,
button:focus {
  border: 3px solid color-mix(in srgb, var(--blue-color) 40%, transparent);
}
button.disabled {
  color: var(--green-color);
}
/* ✅ Адаптив */
@media (max-width: 60rem) { /* < 600px */
  article {
    transform: none; /* убираем сдвиг */
  }
  .info_card {
    margin: 1.6rem;
    gap: 0.8rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.3rem;
  }
}

@media (max-width: 40rem) { /* < 400px */
  article {
    border-radius: 0.8rem;
  }
  .img-wrapper {
    border-radius: 0.8rem 0.8rem 0 0;
  }
  .info_card {
    margin: 0.8rem;
    gap: 0.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  p {
    font-size: 1.2rem;
  }
  button {
    font-size: 0.9rem;
  }
  button::after {
    height: 1.6rem;
    width: 1.6rem;
  }
}
</style>
