import {fetchBreeds} from './cat-api'

const refs = {
    breedsSelect: document.querySelector(".breed-select"),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
};
refs.loader.innerHTML
refs.error.classList.add('is-hidden')

fetchBreeds().then((data) => {
  data.map(elem => {
    const qwe = elem.id
    refs.breedsSelect.insertAdjacentHTML('beforeend', `<option value="${elem.id}">${elem.name}</option>`);


refs.breedsSelect.addEventListener('change', (e)=> {
      e.preventDefault();
      refs.loader.classList.add('is-hidden')
      
  if (e.target.value === qwe) {
      create(elem);
      
  } else {
    refs.error.classList.add("is-hidden")
    }
}  )


  })
})
  .catch((err) => {
    refs.error.classList.add("is-hidden");
    console.log(err);
  }).finally(() => {
    // .classList.remove("is-hidden");
  })


function create(oneEl) {
  const { name, description, temperament, image: { url } } = oneEl;
  const markup = `
    
   <div class="blok-img">
      <img src="${url}" alt="Cat breed ${name}" class="image" width="500" height="500">
   </div>
   <div class="card">
       <h2 class="header">${name}</h2>
       <div class="description">
        <p class="text">${description}</p>
        <p class="text"><b>Temperament:</b> ${temperament}</p>
      </div>
   </div>
  `;
  refs.catInfo.innerHTML = markup;
}

function fetchCatByBreed(breedId){

}


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
    
 


// function renderCatCard(json) {
//   const breedInfo = json[0].breeds[0];
//   const img = {
//     url: json[0].url,
//     alt: breedInfo.name,
//   };
//   const markup = `
//     <h2 class="header">${breedInfo.name}</h2>
//     <div class="card">
//       <img src="${img.url}" alt="Cat breed ${img.alt}" class="image">
//       <div class="description">
//         <p class="text">${breedInfo.description}</p>
//         <p class="text"><b>Temperament:</b> ${breedInfo.temperament}</p>
//       </div>
//     </div>
//   `;
//   refs.catInfo.innerHTML = markup;
// }
// і тоді в зен передати ту ф - цію.then(renderCatCard)

