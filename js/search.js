const searchbar=document.querySelector('.searchbar');const gameTitles=document.querySelectorAll('.game-title');searchbar.addEventListener('input',function(event){const searchTerm=event.target.value.toLowerCase();gameTitles.forEach(function(title){const gameTitle=title.textContent.toLowerCase();if(gameTitle.includes(searchTerm)){title.parentElement.parentElement.style.display='block'}else{title.parentElement.parentElement.style.display='none'}})});