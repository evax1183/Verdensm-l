const url = "https://api.mediehuset.net/sdg/goals";
const maincontainer = document.getElementById('maincontainer');
function ListController() {
    removeHTML();
    fetch(url)
    .then(response => response.json())
    .then(data => {
       for(let item of data.items) {
           const {id, title, byline, color, icon: svg} = item;
           ListView(id, title, byline, color, svg);
       }
    })

}

function ListView (id, title, byline, color, svg) {
    const div = document.createElement('div');
    div.setAttribute('id',`goal${id}`);
    div.style.backgroundColor = `#${color}`;
    div.innerHTML = svg;

    const h3 = document.createElement('h3');
    h3.innerText = title;
    div.appendChild(h3);
    h3.setAttribute('class', `heading`)
    
    const p_byline = document.createElement('p');
    p_byline.innerText = byline;
    div.appendChild(p_byline);
    p_byline.setAttribute('class', `byline`)


    div.onclick = () => {
        DetailController(id);
    }
    maincontainer.appendChild(div);
}

function DetailController(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        removeHTML();
        DetailView(data.item);
    })
}

function DetailView({id, title, description, image, color} = data) {
    const div = document.createElement('div');
    div.style.backgroundColor = `#${color}`;
    div.setAttribute('class',`details`)

    const h1 = document.createElement('h1');
    h1.innerText = title;
    div.appendChild(h1);

    const a = document.createElement('a');
    a.href = '#';
    a.innerText = '&laquo; Tilbage til Oversigt';
    a.onclick = () => {
        ListController();
    }
    div.appendChild(a);

    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);

    const p = document.createElement('p');
    p.innerText = description;
    div.appendChild(p);

    maincontainer.appendChild(div);
}

function removeHTML() {
    maincontainer.innerHTML = '';
}
ListController();

