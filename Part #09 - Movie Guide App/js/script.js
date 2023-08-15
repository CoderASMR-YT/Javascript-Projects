let searchInput = document.getElementById("search"),
  btnSearch = document.querySelector(".btn-search"),
  resultMovie = document.querySelector(".result-movie");

let getMovieInfo = () => {
  const apikey = "c357faf5";
  const url = `http://www.omdbapi.com/?t=${searchInput.value}&apikey=${apikey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let { Poster, Title, Year, Rated, Genre, Actors, Plot, Error } = data;

      if (data.Response == "True") {
        resultMovie.innerHTML = `
        <img src="${Poster}" alt="img" class="img-movie" />
        <div class="container-info">
          <h1>${Title}</h1>
          <div class="details">
            <p class="year">${Year}</p>
            <p class="rating">
              <i class="fa-solid fa-star"></i>
              <span>${Rated}</span>
            </p>
          </div>
          <div class="genre">${Genre.split(",").join("</span><span>")}</div>
          <div class="actors">
            <h3>Actors:</h3>
            <p>${Actors}</p>
          </div>
          <div class="plot">
            <h3>Plot:</h3>
            <p>${Plot}</p>
          </div>
        </div>
        `;
      } else {
        resultMovie.innerHTML = `<h3>${Error}</h3>`;
      }
    })
    .catch(() => {
      resultMovie.innerHTML = `<h3>Error Occured</h3>`;
    });
};
btnSearch.addEventListener("click", getMovieInfo);
getMovieInfo();
