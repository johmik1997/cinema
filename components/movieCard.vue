<template>
    <div class=" mb-4">
      <div class="max-w-sm h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 mb-4">
        <NuxtLink @click="changeItemState(item)" :to="`/item/${title}`">
          <img 
            class="rounded-t-lg w-full py-2 px-2 object-cover" 
            :src="`${imageSiteUrl}${poster_path}`" 
            alt="Movie Image" 
          />
        </NuxtLink>
        <div class="p-4 flex flex-col" style="min-height: 180px;">
          <div class="min-h-[60px] mb-2">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {{ title }}
            </h5>
          </div>
          <p class="mb-2 text-sm text-gray-700 dark:text-gray-400">
            Release Date: {{ release_date }}
          </p>
          <div class="flex-grow overflow-hidden">
            <p v-if="overview" class="text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
              {{ overview }}
            </p>
            <p v-else class="text-sm text-gray-500 italic">
              No overview available
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  
<script setup>
  defineProps([
      'title',
      'id',
      'overview',
      'release_date',
      'popularity',
      'poster_path',
      'item'
  ])

  const imageSiteUrl = 'https://image.tmdb.org/t/p/w500'

  const itemState = useState('chosenItem', () => {})
  const changeItemState = (item) => {
      itemState.value = item
  }

</script>