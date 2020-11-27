## Projektdokumentation

Eksempel på Arrow Funktion.
Findes på linje 33 i script.

`div.onclick = () => {
        DetailController(id);
    }`

Eksempel på Closures.
Findes på linje 57 i script.

`    const a = document.createElement('a');
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

    maincontainer.appendChild(div);`

    Eksempel på Destructuring Assignment.
    Findes på linje 9 i script.

            `const {id, title, byline, color, icon: svg} = item;`
