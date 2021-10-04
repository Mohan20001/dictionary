let txt=document.querySelector('input[type="search"]');
let btn=document.getElementById('btn-search');
var h=document.getElementById('w');
let speaker=document.getElementById('speaker');
let mean=document.getElementById('meaning');
let pron=document.getElementById('pron');

speaker.addEventListener('click',()=>{
    ad.play();
});


btn.addEventListener('click',()=>{
   getDATA(txt.value);
});


function getDATA(word="mocking") {
    url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(data => data.json()).then(Response=>{
        alert(Response[0].meanings[0].definitions[0].definition);
        h.innerText=Response[0].word;
        console.log(Response);
        mean.innerHTML=Response[0].meanings[0].definitions[0].definition;
    });
}
///comment added