const listItems = document.querySelectorAll('.item');
console.log('Number of categories:', listItems.length);

listItems.forEach((item) => {
    const hedRef = item.querySelector('h2');
    console.log('Category:', hedRef.textContent);
    const itemsList = item.querySelectorAll('li');
    console.log("Elements:", itemsList.length);
}); 
