export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
const topRatedmovieUrl='https://api.themoviedb.org/3/movie/top_rated'
const topRatedseriesUrl='https://api.themoviedb.org/3/tv/top_rated'

const topMovies = await $fetch(topRatedmovieUrl, {
    method: 'get',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AccessToken}`
    },
})
const topSeries = await $fetch(topRatedseriesUrl, {
    method: 'get',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AccessToken}`
    },
})

return {topMovies,topSeries}
})