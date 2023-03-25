const buttonElement = document.getElementById("btn");
const jokesElement = document.getElementById("jokes");
const opt = {
    method:"GET",
    headers:{
        "X-Api-Key": "BdXDmRcyX8lLmBbJTd/9AQ==7m5XuRye8eFJcf4K",
    },
};

apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function newJoke(){
    try{
    jokesElement.innerText = "Updating...";
    buttonElement.disabled = true;
    buttonElement.innerText = "Loading";
    const response = await fetch(apiURL,opt);
    const data = await response.json();
    buttonElement.disabled = false;
    buttonElement.innerText = "Another Joke";
    jokesElement.innerText = data[0].joke;
}   catch(error){
    jokeElement.innerText="No network, check your connection!";
    buttonElement.disabled = false;
    buttonElement.innerText = "Tell me a joke"
    console.log(error);
}
}
buttonElement.addEventListener("click", newJoke);