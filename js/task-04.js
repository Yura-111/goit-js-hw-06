const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

const handlPlusBtnRefClick = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
    }

incrementBtnRef.addEventListener('click', handlPlusBtnRefClick);


const handMinusBtnRefClick = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

decrementBtnRef.addEventListener('click', handMinusBtnRefClick);


