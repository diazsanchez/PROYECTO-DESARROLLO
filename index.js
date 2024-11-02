function getCharacters(done) {

    const results = fetch("https://superheroapi.com/api/access-token/character-id/image");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="Imagen de ${personaje.name}" style="width: 200px;">
                </div>
                <h2>${personaje.name}</h2>
                <span>Estado: ${personaje.status}</span>
            </article>
        `);
        const main = document.querySelector("main");
        main.append(article);
        document.querySelector('main').appendChild(article);
    });
});

