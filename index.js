const buttonElement = document.getElementById("btn")
const jokeElement = document.getElementById("joke")
const apiKey = "BdXDmRcyX8lLmBbJTd/9AQ==7m5XuRye8eFJcf4K";
const options ={
    method:"GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"
async function getJoke(){
  try{
    jokeElement.innerText = "Loading...";
    buttonElement.disabled = true;
    buttonElement.innerText = "Updating..."
    const res =await fetch(apiURL,options)
    const data=await res.json()
    buttonElement.disabled = false;
    buttonElement.innerText = "Another joke"
    jokeElement.innerText = data[0].joke;
} catch(error){
    jokeElement.innerText="No network, check your connection!";
    buttonElement.disabled = false;
    buttonElement.innerText = "Tell me a joke"
    console.log(error);
}
}

buttonElement.addEventListener("click",getJoke);
