class Movie {
// this is getting data from fetch and matching it when we create a new instance of movie or new Movie?
constructor(id , title, description, year, image, category){
    this.id = id
    this.title = title
    this.description = description
    this.year = year
    this.image = image
    this.category = category
    this.renderMovie()
    console.log(this.title);
}



 movieHTML(){
    
    return ` 
    
     <img src="${this.image}"  alt=""/>
     <h2>${this.title}</h2>
     <p>${this.description}</p>
     <h4>${this.year}</h4>
     <h3>${this.category}</h3>
     <button class="delete" data-id="${this.id}">Delete</button>
     <img id="reviews-button" src="https://cdn.dribbble.com/users/2087607/screenshots/6451099/free-youtube-comments-icon-png-download.jpg"  alt="">
 `
 
  }

renderMovie(){
    const movieContainer = document.getElementById("movie-container")
    const movieCard = document.createElement('div')
    movieCard.classList.add('movies-Card')
    movieCard.id = this.id
    movieCard.innerHTML += this.movieHTML() 
    movieContainer.appendChild(movieCard)
}



}