<template>
    <div class=" mt-4 mb-4">
      <div class="max-w-sm h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-3">
        <NuxtLink @click="changeItemState(item)" :to="`/item/${name}`">
          <!-- Fixed height image with consistent aspect ratio -->
          <img 
            class="rounded-t-lg w-full px-2 py-2 object-cover" 
            :src="`${imageSiteUrl}${poster_path}`" 
            alt="Series Image" 
          />
        </NuxtLink>
        
        <!-- Card content with fixed height sections -->
        <div class="p-5 flex flex-col h-64"> <!-- Fixed total height for content -->
          <!-- Title section with fixed height -->
          <div class="h-16 mb-2">
            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {{ name }}
            </h5>
          </div>
          
          <!-- Date section -->
          <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
            First Air Date: {{ first_air_date }}
          </p>
  
          <!-- Overview section with fixed height and scroll if needed -->
          <div class="flex-grow overflow-hidden">
            <p v-if="overview" class="text-sm text-gray-700 dark:text-gray-400 line-clamp-4">
              {{ overview }}
            </p>
            <p v-else class="text-sm text-gray-500 italic">No overview available</p>
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
  
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  
<script setup>
  defineProps([
      'name',
      'overview',
      'first_air_date',
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