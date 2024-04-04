const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex=0;
let letterIndex=0;
let interval;

function type() {
  let currentWord=words[wordIndex];
  let currentLetter = currentWord[letterIndex]

  typedTextSpan.innerHTML+=currentLetter
  letterIndex++;

  if(letterIndex>=currentWord.length){
    clearInterval(interval)

    setTimeout(()=>{
      interval=setInterval(erase,300)
    },200)
  }

}



function erase() {
  let currentWord=words[wordIndex];

  let text = currentWord.substring(0,letterIndex-1)
  typedTextSpan.innerHTML=text
  letterIndex--;

  if(text===''){
    clearInterval(interval)
  if(wordIndex==(words.length-1)){
    wordIndex=0
    setTimeout(()=>{
      interval=setInterval(type,100)
    },200)
  }
  else{
    wordIndex++;
    letterIndex=0;
    setTimeout(()=>{
      interval=setInterval(type,100)
    },200)
  }
  }
}

interval=setInterval(type,300)


setInterval(function(){
 
if(cursor.classList.contains("show")){
  cursor.classList.remove("show")
}
else{
  cursor.classList.add("show")
}
},500)