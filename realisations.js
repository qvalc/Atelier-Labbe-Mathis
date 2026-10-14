// Photos stockées dans le dépôt GitHub, dossier /realisations.
// Respecter les majuscules et les noms exacts des dossiers.
const realisations = [
  {
    titre: "Ridelle arrière de remorque",
    description: "Réalisation d'une ridelle arrière de remorque.",
    photos: [1,2,3,4].map(n => `realisations/Ridelle-arriere-remorque/${n}.avif`)
  },
  {
    titre: "Réservoir 60 L",
    description: "Réalisation d'un réservoir de 60 litres.",
    photos: [1,2,3,4].map(n => `realisations/reservoir-60L/${n}.avif`)
  }
];
const gallery = document.getElementById('realizationGrid');
if (gallery) {
  realisations.forEach(item => {
    const card = document.createElement('article');
    card.className = 'realization-card';
    const main = document.createElement('img');
    main.className = 'realization-main';
    main.src = item.photos[0];
    main.alt = item.titre;
    main.loading = 'lazy';
    card.append(main);
    const body = document.createElement('div');
    body.className = 'realization-content';
    const h = document.createElement('h3');
    h.textContent = item.titre;
    body.append(h);
    const p = document.createElement('p');
    p.textContent = item.description;
    body.append(p);
    const thumbs = document.createElement('div');
    thumbs.className = 'realization-thumbs';
    thumbs.setAttribute('aria-label', 'Photos de ' + item.titre);
    item.photos.forEach((photo, i) => {
      const button = document.createElement('button');
      button.className = 'realization-thumb';
      button.type = 'button';
      button.setAttribute('aria-label', 'Afficher la photo ' + (i+1));
      button.setAttribute('aria-pressed', String(i === 0));
      const img = document.createElement('img');
      img.src = photo;
      img.alt = '';
      img.loading = 'lazy';
      button.append(img);
      button.addEventListener('click', () => {
        main.src = photo;
        main.alt = item.titre + ' — photo ' + (i+1);
        thumbs.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed','false'));
        button.setAttribute('aria-pressed','true');
      });
      thumbs.append(button);
    });
    body.append(thumbs);
    card.append(body);
    gallery.append(card);
  });
}
