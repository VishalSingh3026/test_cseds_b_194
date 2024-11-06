

function getJoke() {
    async function fetchJoke() {
        try {
            let response = await fetch("https://v2.jokeapi.dev/joke/Any");
            let data = await response.json();

            if (data.joke) {
                return data.joke; 
            } else if (data.setup && data.delivery) {
                return `${data.setup} - ${data.delivery}`; 
            }
        } catch (error) {
            console.error(error);
        }
        return null; 
    }

   
    fetchJoke().then(joke => {
        if (joke) {
            document.getElementById("joke").textContent = joke;
            document.getElementById("charCount").textContent = `Character count: ${joke.length}`;
        } else {
            document.getElementById("joke").textContent = "Failed to fetch a joke.";
            document.getElementById("charCount").textContent = "Character count: 0";
        }
    });
}

function clearJoke() {
    document.getElementById("joke").textContent = "Press the button for a joke!";
    document.getElementById("charCount").textContent = "Character count: 0";
}