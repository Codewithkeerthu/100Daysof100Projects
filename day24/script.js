const jokeEl = document.getElementById('joke');
const jokeBtn= document.getElementById('jokeBtn');

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()
  console.log(data)

  jokeEl.innerHTML = data.joke
}
generateJoke();
jokeBtn.addEventListener('click',generateJoke)