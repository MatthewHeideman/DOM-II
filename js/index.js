// Your code goes here
const viewImage = document.querySelectorAll('img')

Array.from(viewImage).forEach(item => { item.addEventListener('dblclick', function(event){
    console.log(event.target)
})

})