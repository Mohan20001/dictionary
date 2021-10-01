function getDATA(url="https://api.dictionaryapi.dev/api/v2/entries/en/mocking") {
    fetch(url).then(data => data.json()).then(Response=>document.body.innerText=Response[0].word);
}

getDATA();