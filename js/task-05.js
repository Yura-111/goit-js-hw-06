const inputNameRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const handelInputName = (event) => {
    const {value} = event.target;
    outputRef.textContent = value ? value : 'Anonymous';
}
inputNameRef.addEventListener('input', handelInputName);