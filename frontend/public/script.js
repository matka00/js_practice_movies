console.log(movies)

const movieCardComponent = function(title, release, story){
    return`
    <div class="card">
        <div class="movie title">${title}</div>
        <div class="release year">${release}</div>
        <div class="movie story">${story}</div>
    </div>
    `
}

const movieTitleComponent =`
<h1>Movies</h1>
`

const loadEvent = function (){
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", movieTitleComponent);

    for (const movie of movies.cards) {
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text))
    }
}

window.addEventListener("load", loadEvent)