let txt=document.querySelector('input[type="search"]');
let btn=document.getElementById('btn-search');

btn.addEventListener('click',()=>{
   getDATA(txt.value);
});


function getDATA(word="mocking") {
    url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(data => data.json()).then(Response=>{
        alert(Response[0].meanings[0].definitions[0].definition);
        console.log(Response);
    });
}
///comment added