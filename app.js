function getDATA(url="https://api.dictionaryapi.dev/api/v2/entries/en/mocking") {
    fetch(url).then(data => data.json()).then(Response=>console.log(Response[0].word));
}

getDATA();
///comment added