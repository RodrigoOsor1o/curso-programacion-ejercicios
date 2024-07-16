const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');

const post = document.querySelectorAll('.post');

post.forEach(post =>{
    post.addEventListener('click', ()=>{
        post.querySelector('.status').classList.remove('not-read')
    updateNotifications()
    })
})

markAll.addEventListener('click', ()=>{
    const notReadElements = document.querySelectorAll('.not-read')


    notReadElements.forEach((notReadElements)=>{
        notReadElements.classList.remove('not-read')
    })
    const notReadElementsActual = document.querySelectorAll('.not-read')
    numberElement.innerText = notReadElementsActual.length;

    updateNotifications()
    
})

const updateNotifications = () =>{
    const notReadElementsActual = document.querySelectorAll('.not-read')
    numberElement.innerText = notReadElementsActual.length;
}