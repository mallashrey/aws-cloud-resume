const counter = document.querySelector(".counter-number")
async function updateCounter() {
    let response = await fetch("https://mpdosod3lmvngad35h323h74bu0cfksm.lambda-url.ap-southeast-2.on.aws/")
    let data = await response.json()
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter()