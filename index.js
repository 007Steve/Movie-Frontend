

// this is getting all the data 
fetch("http://localhost:3000/movies")
.then(res => res.json())
.then(movies => {
    
 movies.forEach(movie => {
     const { id, title, description, year, image, category} = movie
     
     new Movie(id, title, description, year, image, category)
 });

})
