<script setup>
import data from '/assets/json/BlogCard.json';
import { useRoute } from 'vue-router'
import { useHead } from '#app'

const route = useRoute()
const router = useRouter()
// Получаем параметры из URL
const per = Number(route.params.per)
const page = Number(route.params.page)

const perPage = per > 0 ? per : 6
const start = (page - 1) * perPage
const posts = data.slice(start, start + perPage)
const totalPages = Math.ceil(data.length / perPage)

useHead({
  title: `Blog — Page ${page}`
})
function navigate(per) {
  router.push(`/per/${per}/1`)
}
</script>

<template>
  <div class="page">
    <div class="cards">
      <BlogCard v-for="post in posts" :key="post.id" :data="post" />
    </div>

    <div class="pagination">
      <!-- Select -->
      <div class="pagination__left">
        <div class="perpage-buttons">
          <button
              v-for="num in [6, 12, 18]"
              :key="num"
              :class="{ active: perPage === num }"
              @click="navigate(num)"
          >
            {{ num }}
          </button>
        </div>
      </div>

      <!-- Page info -->
      <idv class="pagination__center">
        <span>Page: {{ page }} of {{ totalPages }}</span>
      </idv>

      <!-- Arrows -->
      <div class="pagination__right">
        <NuxtLink v-if="page > 1" :to="`/per/${perPage}/${page - 1}`">←</NuxtLink>
        <span v-else class="disabled">←</span>

        <NuxtLink v-if="page < totalPages" :to="`/per/${perPage}/${page + 1}`">→</NuxtLink>
        <span v-else class="disabled">→</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  padding: 2rem;
  gap: 2rem;
  max-width: 250rem;
  margin: 0 auto;
}


.cards {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: stretch;

}

.pagination {
  margin-top: auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
}

.pagination__left label {
  justify-self: start;

}

.pagination__center span {
  font-size: 1.6rem;
  font-weight: 500;
  justify-self: center;

}

.pagination__right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-self: end;


}

a {
  color: var(--green-color);
  font-size: 1.6rem;
  text-decoration: none;
  padding: 0.8rem;
  background-color: var(--light-gray-color);
  transition: 0.3s;
  border-radius: 50%;
}

a:hover {
  background-color: var(--light-green-color);

}

.disabled {
  color: gray;
  font-size: 1.6rem;
  padding: 0.8rem;

}
.perpage-buttons{
  display: flex;
  gap: 0.5rem;
}
button{
  font-size: 1.6rem;
  padding: 0.8rem;
  background-color: var(--light-gray-color);
  transition: 0.3s;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-self: center;
}
button:hover, button:active{
  background-color: var(--light-green-color);
  color: var(--green-color);
}
button.active{
  background-color: var(--green-color);
  color: var(--light-green-color);
}
@media (max-width: 40rem) {
  .page{
    padding: 1rem;
  }
  .cards {
    grid-template-columns: 1fr; /* одна колонка */
    gap: 1.5rem; /* уменьшаем отступы */
  }

  .pagination {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
  }

  .pagination__center {
    grid-column: 1 / span 2; /* по центру первого ряда */
    justify-self: center;
  }

  .pagination__left {
    grid-column: 1 / 2;
    grid-row: 2;
    justify-self: start;
  }

  .pagination__right {
    grid-column: 2 / 3;
    grid-row: 2;
    justify-self: end;
  }
}
</style>