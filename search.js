$(document).ready(() => {
    $("#searchForm").on('submit', (e) => {
      e.preventDefault();
      let searchText = $("#searchText").val();
      getComics(searchText);
    });
  });
  
  function getComics(searchText){
    
    // resquest cho id
    axios.get(`https://comics-api.vercel.app/search?q=${searchText}&page=1`)
      .then(function (response) {
        console.log(response);
        let comics = response.data.results;
        
        localStorage.setItem("comics",JSON.stringify(comics))
        let output = '';
        $.each(comics, (index, comic) => {
          output+=`
            <div class="col-md-3">
              <div class="well text-center">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <h5>${comic.title}</h5>
                <a onclick="comicSelected('${index}')" class="btn btn-primary" href="#">Comic Details</a>
              </div>
            </div>
          `;
        });
        $('#comics').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  function comicSelected(comic){
    // localStorage.setItem("movie",JSON.stringify(movie))
    window.location ='detail.html?id='+comic;
    return false;
  }
  
 