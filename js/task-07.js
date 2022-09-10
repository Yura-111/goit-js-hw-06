const controlRef = document.querySelector('#font-size-control');
const inputTxtRef = document.querySelector('#text');

const onInputDrag = (event) => {
    inputTxtRef.style.fontSize = event.currentTarget.value + "px";
}
controlRef.addEventListener('input', onInputDrag);