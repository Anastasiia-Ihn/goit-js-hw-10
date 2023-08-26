import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const refs = {
    breedsSelect: document.querySelector(".breed-select"),
    loader: document.querySelector('.loader-text'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
};
isHidden(refs.error);
isHidden(refs.breedsSelect)

fetchBreeds().then((data) => {  
  refs.breedsSelect.classList.remove('is-hidden')
  refs.loader.classList.remove('is-hidden');

  data.map(elem => {
    refs.breedsSelect.insertAdjacentHTML('beforeend', `<option value="${elem.id}">${elem.name}</option>`);
    isHidden(refs.loader);
  })
})
  .catch(() => Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!')
)

refs.breedsSelect.addEventListener('change', clickEL)

function clickEL(e) {
  e.preventDefault();

  refs.catInfo.innerHTML = '';
  
  let idEvent = e.currentTarget.value;

  refs.loader.classList.remove('is-hidden');
  
  fetchCatByBreed(e).then((data) => {
    if (idEvent === data[0].breeds[0].id) {
      renderCatCard(data);
    };
  })
    .catch(() => { 
      Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!');
    }
    ).finally(() => isHidden(refs.loader)

)}
      
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


function isHidden(elem) {
   elem.classList.add('is-hidden')
}



// function isHidden(elem) {
//   if (elem.classList.includes('is-hidden')) {
//         refs.loader.classList.remove('is-hidden');

//   }
//   elem.classList.add('is-hidden')
// }




// fetchBreeds().then((data) => {
//   data.map(elem => {
//     const value = elem.id
//     refs.breedsSelect.insertAdjacentHTML('beforeend', `<option value="${elem.id}">${elem.name}</option>`);


//     refs.breedsSelect.addEventListener('change', (e) => {
//       e.preventDefault();
//       refs.loader.classList.remove('is-hidden');
      
//       if (e.target.value === value) {
//         create(elem);
//       };
//     })
//   });
// })
//   .catch(() => Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!'))
//   .finally(() => refs.loader.classList.add('is-hidden'))


// function create(oneEl) {
//   const { name, description, temperament, image: { url } } = oneEl;
//   const markup = `
    
//    <div class="blok-img">
//       <img src="${url}" alt="Cat breed ${name}" class="image" width="500" height="500">
//    </div>
//    <div class="card">
//        <h2 class="header">${name}</h2>
//        <div class="description">
//         <p class="text">${description}</p>
//         <p class="text"><b>Temperament:</b> ${temperament}</p>
//       </div>
//    </div>
//   `;
//   refs.catInfo.innerHTML = markup;
// }
