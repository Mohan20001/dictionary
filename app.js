let txt=document.querySelector('input[type="search"]');
let btn=document.getElementById('btn-search');
var h=document.getElementById('w');
let speaker=document.getElementById('speaker');
let mean=document.getElementById('meaning');
let pron=document.getElementById('pron');
let ad=document.getElementById('ad');
let pic=document.getElementById('pic');


speaker.addEventListener('click',()=>{
    ad.play();
});


btn.addEventListener('click',()=>{
   getDATA(txt.value);
   getPhoto(txt.value);
});


function getDATA(word="mocking") {
    url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(data => data.json()).then(Response=>{
        // console.log(Response);
        // alert(Response[0].meanings[0].definitions[0].definition);
        h.innerText=Response[0].word;
        pron.innerText=Response[0].phonetic;
        ad.src=Response[0].phonetics[0].audio;
        // console.log(Response[0].phonetics[0].audio);
        console.log(Response);
        mean.innerHTML=Response[0].meanings[0].definitions[0].definition;
    });
}
///comment added

async function getPhoto(photo="hello") {
    let data=await fetch(`https://api.unsplash.com/search/photos/?query=${photo}&client_id=DXNxQppU-zU28G0kHbOVjEsPGfnP6YE-7_kxKpDaS3c&per_page=1'`);
    let res=await data.json();
    console.log(res.results[0].urls.regular);
    pic.src=res.results[0].urls.regular;
}

getPhoto();