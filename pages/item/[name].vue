<template>
    <div>
        <div class="flex flex-row justify-center items-center">
            <MovieCard  v-if="item.release_date"
                        :poster_path="item.poster_path"
                        :title="item.title"
                        :id="item.id"
                        :overview="item.overview"
                        :release_date="item.release_date"
                        :popularity="item.popularity"
                        :item="item"
                    />
                    <div class="p-4 flex flex-col w-64 bg-blue-800 text-black text-2xl ml-56">
                        <h1 class="text-4xl text-white">Title</h1>
                        {{item.title}}
                        <h1 class="text-4xl text-white">Description</h1>
                        {{item.overview}}
                    </div>
        </div>
       

                    <SeriesCard v-if="item.first_air_date"
                        :poster_path="item.poster_path"
                        :name="item.name"
                        :overview="item.overview"
                        :first_air_date="item.first_air_date"
                        :popularity="item.popularity"
                        :item="item" />

    </div>
</template>

<script setup>
const itemState=useState('chosenItem',()=>{
    return{}
})
const item=itemState.value 
</script>