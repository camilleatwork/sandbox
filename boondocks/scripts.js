const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'sandbox-example-logo.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://api.tvmaze.com/shows/912/episodes', true);

request.onload = function () {
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {
        data.forEach(tvshow => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = tvshow.name;

            const p = document.createElement('p');
            tvshow.summary = tvshow.summary.substring(0, 300);
            tvshow.summary = tvshow.summary.replace('<p>', '');
            tvshow.summary = tvshow.summary.replace('</p>', '');
            p.textContent = `${tvshow.summary}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        console.log('error');
    }
}

request.send();