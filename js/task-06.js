const focusInputRef = document.querySelector('#validation-input');
const quantityLength = focusInputRef.getAttribute('data-length');


function onInputBlur(event) {
    const validLength = event.currentTarget.value.length === Number(quantityLength);
    if (validLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
    
}


focusInputRef.addEventListener('blur', onInputBlur);

