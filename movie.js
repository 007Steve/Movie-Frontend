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
 // add create 
 
 deleteMovie(e){
    const id  = this.id
    fetch(`http://localhost:3000/movies/${id}`,{
        method: 'DELETE'
       
    })
    .then(() => {
        
        document.getElementById('movie-container').removeChild(document.getElementById(id))
    })

 }
 
  


 movieHTML(){
    //show_hide
    return ` 
    
     <img onClick="show_hide()"src="${this.image}"  alt=""/>

     <h2>${this.title}</h2>
     <div id="movie-texts">
     <p> <strong>Description: </strong>${this.description}</p>
     <h4><strong>Year: </strong>${this.year}</h4>
     <h3><strong>Category: </strong>${this.category}</h3>
     <div>
     <button class="delete" data-id="${this.id}">Delete</button>
     <img id="reviews-button" onClick="" src="https://cdn.dribbble.com/users/2087607/screenshots/6451099/free-youtube-comments-icon-png-download.jpg"  alt="">
 `
 // get on click to work to hide and show movies-text and nested reviews
  }

 renderMovie(){
    const movieContainer = document.getElementById("movie-container")
    const movieCard = document.createElement('div')
    movieCard.classList.add('movies-Card')
    movieCard.id = this.id
    movieCard.innerHTML += this.movieHTML() 
    movieContainer.appendChild(movieCard)
    movieCard.addEventListener('click', e => {
        if (e.target.className.includes('delete')) this.deleteMovie(e) // added e.listener
    })
}


}

