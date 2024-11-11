document.getElementById("jokeButton").addEventListener("click", getJoke);

async function getJoke() {
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = "Loading joke..."; // Funny loading message
    
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
            method: "GET",
            headers: {
                "X-Api-Key": "YOUR_API_KEY" // Replace 'YOUR_API_KEY' with your actual API key
            }
        });
        
        if (!response.ok) throw new Error("Failed to fetch joke");
        
        const data = await response.json();
        jokeElement.textContent = data[0].joke;
    } catch (error) {
        jokeElement.textContent = "Oops! Couldn't fetch a joke. Try again later.";
    }
}