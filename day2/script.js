document.getElementById('searchBtn').addEventListener('click', searchMovie);

async function searchMovie() {
    const movieTitle = document.getElementById('movie').value;
    const apiKey = 'c2062f5b'; // Replace with your OMDb API key
    const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Movie not found');
        
        const data = await response.json();
        if (data.Response === "False") throw new Error(data.Error);
        
        displayMovie(data);
    } catch (error) {
        document.getElementById('movieResult').innerText = error.message;
    }
}

function displayMovie(data) {
    const { Title, Year, Genre, Director, Plot, Poster ,Language} = data;
    console.log(data);
    const movieInfo = `
<div>        
<h2>${Title} (${Year})</h2>
<h2>${Language}</h2>
        <img src="${Poster}" alt="${Title} poster" />
   </div><div class="part">     
<p><strong>Genre:</strong> ${Genre}</p>
        <p><strong>Director:</strong> ${Director}</p>
        <p>${Plot}</p></div>
    `;
    document.getElementById('movieResult').innerHTML = movieInfo;
}
