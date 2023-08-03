const request = {
   request:"https://api.themoviedb.org/3/movie/550?api_key=7ea656863a111a8a0c01ba1fedf5695d",
   requestFavorite: 'https://api.themoviedb.org/3/account/20250843/favorite/movies?language=en-US&page=1&sort_by=created_at.asc' ,
   requestTrending: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
   requestGenres: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
   requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
}
export default request;