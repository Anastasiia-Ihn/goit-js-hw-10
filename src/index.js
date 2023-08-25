import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const refs = {
    breedsSelect: document.querySelector(".breed-select"),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
};
refs.loader.classList.add('is-hidden')
refs.error.classList.add('is-hidden')

fetchBreeds().then((data) => {  
  data.map(elem => {
    refs.breedsSelect.insertAdjacentHTML('beforeend', `<option value="${elem.id}">${elem.name}</option>`);
  })
})
  .catch(() => Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!')
)

refs.breedsSelect.addEventListener('change', clickEL)

function clickEL(e) {
    e.preventDefault();
  
  let idEvent = e.currentTarget.value
  Notiflix.Notify.info('Loading data, please wait...');
  fetchCatByBreed(e).then((data) => {
             if (idEvent === data[0].breeds[0].id) {
          renderCatCard(data);
        }
  })
    .catch(() => {
      Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!');
      console.log('тут помилка')
    }
      )
}
      
function renderCatCard(json) {
  const breedInfo = json[0].breeds[0];
  const img = {
    url: json[0].url,
    alt: breedInfo.name,
  };
  const markup = `
     <div class="blok-img">
      <img src="${img.url}" alt="Cat breed ${img.alt}" class="image" width="500" height="500">
   </div>
   <div class="card">
       <h2 class="header">${breedInfo.name}</h2>
       <div class="description">
        <p class="text">${breedInfo.description}</p>
        <p class="text"><b>Temperament:</b> ${breedInfo.temperament}</p>
      </div>
   </div>
  `;
  refs.catInfo.innerHTML = markup;
}



// і тоді в зен передати ту ф - цію.then(renderCatCard)


//   if (e.target.value === qwe) {
//       create(elem);
      
//   } else {
//     refs.error.classList.add("is-hidden")
    
// }  
// }

// fetchBreeds().then((data) => {
//     console.log(data);
//     data.find(elem =>
//     refs.breedsSelect.addEventListener('click', (e)=> {
//       e.preventDefault();
      
      
//   console.log(e.target.value);
//   console.log(elem.id);
//     if (e.target.value===elem.id) {
//        renderCatCard() 
//     }
// }  )
 
//  )
// })
    