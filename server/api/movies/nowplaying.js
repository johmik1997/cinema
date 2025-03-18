export default defineEventHandler( async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
   const nowplayingurl='https://api.themoviedb.org/3/movie/now_playing'
   const movieplayingUrl=await $fetch(nowplayingurl,{
    method:'get',
    headers:{
        accepts:'application/json',
        Authorization:`Bearer ${AccessToken}`
    },
   })
  return {movieplayingUrl}
})