'use strict';


const api = "https://jsonplaceholder.typicode.com/posts";

// fetch(api)
//     .then(response => response.json())
//     .then(data => {
//         console.table(data)
//     })
//     .catch(e => console.log(e));

// console.log('Plop');


async function httpGet(url) 
{
    // const response = fetch(url);
    const response = await fetch(url);
    const json = await response.json();

    return json;
}


// Methode 1
// --
// async function getData(url)
// {
//     const response = await httpGet(url);
//     const posts = response;

//     console.log(posts);
// }
// getData(api);


// Methode 2
// --
(async () => {
    let data = await httpGet(api);
    console.log(data);
})();