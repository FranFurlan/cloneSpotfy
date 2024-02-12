const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const playListContainer = document.getElementById('result-playlists');

function requestApi(searchTerm){
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result){
    hidePlaylists();
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultsArtist.classList.remove('hidden');
}

function hidePlaylists() {
    playListContainer.classList.add("hidden");
  }

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ''){
        resultsArtist.classList.add('hidden');
        playListContainer.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
});