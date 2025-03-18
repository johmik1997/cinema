export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
   const upcomingMoviesurl='https://api.themoviedb.org/3/movie/upcoming'
   const moviesUpcoming=await $fetch(upcomingMoviesurl,{
    method:'get',
    headers:{
        accepts:'application/json',
        Authorization:`Bearer ${AccessToken}`
    },
   })
  return {moviesUpcoming}
})