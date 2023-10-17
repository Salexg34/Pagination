// const ELEMENTS_COUNT = 10;
// export const generateSlides = () => {
//     let defaultCard = document.querySelector('.slider__cards');

//     for (let i = 1; i <= ELEMENTS_COUNT; i++) {

//         let clonedCard = defaultCard.cloneNode(true);
//         const defaultIndexEl = document.createElement('div');

//         defaultIndexEl.textContent = i;
//         defaultIndexEl.classList.add('default_index');
//         clonedCard.appendChild(defaultIndexEl);

//         defaultCard.parentElement.appendChild(clonedCard);
//     }

//     for (let i = 2; i <= ELEMENTS_COUNT; i++) {
//         const clonedCard = defaultCard.cloneNode(true);

//         const defaultIndexEl = document.createElement('div');
//         defaultIndexEl.classList.add('default_index');

//         defaultIndexEl.textContent = i;
//         clonedCard.appendChild(defaultIndexEl);
//         defaultCard.parentElement.appendChild(clonedCard);

//         if (i === ELEMENTS_COUNT) { 
//             debugger
//             defaultIndexEl.textContent = 1;
//             debugger
//             defaultCard.appendChild(defaultIndexEl)
//         } 
        
//     }
// }

//     function createSlide(index) {
//         const clonedCard = defaultCard.cloneNode(true);
//         const defaultIndexEl = document.createElement('div');
//         defaultIndexEl.textContent = index;
//         defaultIndexEl.classList.add('default_index');
//         clonedCard.appendChild(defaultIndexEl);
//         defaultCard.parentElement.appendChild(clonedCard);
//     }

//     for (let i = 2; i <= ELEMENTS_COUNT; i++) {
//         createSlide(i)
//     }

//     const firstCardIndex = document.createElement('div');
//     firstCardIndex.textContent = 1;
//     firstCardIndex.classList.add('default_index');
//     defaultCard.appendChild(firstCardIndex);
// };

const addIndexElementToCard = (card, index) => {
    const defaultIndexEl = document.createElement('div');
    defaultIndexEl.textContent = index;
    defaultIndexEl.classList.add('default_index');
    card.appendChild(defaultIndexEl);
}
const createSlider = () => {
    const ELEMENTS_COUNT = 100;
    let defaultCard = document.querySelector('.slider__cards');

    function createSlide(index) {
        const clonedCard = defaultCard.cloneNode(true);
        addIndexElementToCard(clonedCard, index)

        defaultCard.parentElement.appendChild(clonedCard);
    }
    const generateSlides = () => {


        for (let i = 2; i <= ELEMENTS_COUNT; i++) {
            createSlide(i)

        }
        addIndexElementToCard(defaultCard, 1)
    };

    return generateSlides;

}

export const generatorSlider = createSlider()



