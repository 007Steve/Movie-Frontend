

// this is getting all the data 
fetch("http://localhost:3000/movies")
.then(res => res.json())
.then(movies => {
    
 movies.forEach(movie => {
     const { id, title, description, year, image, category} = movie
     
     new Movie(id, title, description, year, image, category)
 });

})

 document.getElementById('new-movie-form').addEventListener('submit',addMovie)

 function addMovie(e){
    e.preventDefault()
    debugger
    let data = {
        
        
        'title' : e.target.title.value, 
        'description' : e.target.description.value,
        'year' : e.target.year.value, 
        'image' : e.target.image.value, 
        'category' : e.target.category.value
    }

    
}