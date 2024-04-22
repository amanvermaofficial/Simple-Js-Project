const baseURL = 'https://source.unsplash.com/all/300x300';

// this url gives an image. Use this and NO API calls
const content = document.querySelector(".content")
const btn =  document.querySelector("button");
const img = document.createElement("img")
btn.addEventListener('click',(e)=>{
  async function getImg(){
    try{
       const response = await fetch(baseURL)
       console.log(response.url)
       img.src=response.url
       content.appendChild(img)
    }
    catch(error){
      console.log(error)
    }
  }
  getImg()
})