// const get = (url) => {
//     return new Promise((resolve, reject) =>{
//         const request = new XMLHttpRequest();
//         request.open('GET', url);
//         request.onload = () => {
//             if(request.status === 200) {
//                 resolve(request.response);
//             }else{
//                 reject(Error());
//             }
//         }
//         request.onerror = () => {
//             reject(Error("network error"));
//         };

//         request.send();
//     })
// }

// const allTasks = async () => {
//     try{
//         const t1 = await get('https://jsonplaceholder.typicode.com/posts/1');
//         console.log(t1);
//     }catch(err){
//         console.log(err);
//     }
// }

// allTasks();
   
// //fetch also return a promise
// fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=comilla&units=metric&APPID=1cddef7f1f89f95769e3b62bd2fa22a6"
// )
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// console.log('Hi after promise but showing before promise cause promise is a callback functin or asynchronous task');


const img = document.querySelector('img');
const showGif = (name) =>{
    img.src = "";

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=HEvpHFBnnYNw3t64KbuKWlw0mGoOfq3U&s=${name}`,{mode: 'cors'})
    .then(response => response.json())
    .then(data => img.src = data.data.images.original.url)
    .catch(err => console.log(err))
}

async function showGif1(name){
    try{
        img.src = "";
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=HEvpHFBnnYNw3t64KbuKWlw0mGoOfq3U&s=${name}`,{mode: 'cors'});
        const data = await response.json();
        img.src = data.data.images.original.url;
    }
    catch{err => console.log(err)}
}
// const btn = document.querySelector('button');
// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(e.target);
// })
const form = document.querySelector('form');
form.onsubmit = (e) =>{
    const name = e.target.children[0].value;
    showGif(name);
    e.target.children[0].value = ""
    e.preventDefault();
}