const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

axios.get('https://api.tvmaze.com/shows/912/episodes')
    .then(response => {
        response.data.forEach((tv) => {
            // Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = tv.name;

            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            //TO DO: OPTIONAL - Add the episode image [tv.image.medium]
            tv.summary = tv.summary.substring(0, 300); // Limit to 300 chars
            p.textContent = `${tv.summary}...`; // End with an ellipses

            // Append the cards to the container element
            container.appendChild(card);

            // Each card will contain an h1 and a p
            card.appendChild(h1)
            card.appendChild(p)
        })
    })
    .catch(function (error) {
        // handle error
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    })
