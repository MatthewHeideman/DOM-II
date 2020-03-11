// Your code goes here
const viewImage = document.querySelectorAll('img')

Array.from(viewImage).forEach(item => { 
    item.style.transform = 'scale(1)';
    item.style.transition = 'transform 2s';
    const transform = document.createElement('div')
    
    item.addEventListener('dblclick', function(event){
    
    console.log(item);
    });
});

const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseenter', function(event){
    console.log(event.target)
    logo.style.transform = 'scale(1.3)';
});
logo.addEventListener('mouseleave', function(event){
    console.log(event.target)
    logo.style.transform = 'scale(1)';
});
