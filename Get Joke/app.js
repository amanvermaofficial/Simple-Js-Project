const url = 'https://api.chucknorris.io/jokes/random';

const btn=document.querySelector(".btn")
const display = document.querySelector("#display-joke")

// handle this end point with XMLHttpRequest

// btn.addEventListener('click',()=>{
//   const xhr = new XMLHttpRequest();
// xhr.open('GET',url)
// xhr.onreadystatechange=function(){
//   if(xhr.readyState===4){
//     const data = JSON.parse(this.responseText)
//     display.innerHTML=`${data.value}`
//     console.log(data.value)
//   }
// }
// xhr.send()
// })

 // handle this end point with promises
btn.addEventListener('click',()=>{
async function getJoke(){
  try{
   const response = await fetch(url)
   const data = await response.json()
   display.innerHTML=`${data.value}`
  }
  catch(error){
    console.log("E:",error)
  }
}
getJoke()
})

// handle the case of race condition
