// Modifiez ici les titres, descriptions et photos de chaque réalisation.
// Les images actuelles sont des illustrations, PAS des travaux attribués à l'atelier.
const realisations = [
 {titre:"Réparation de pièces métalliques",description:"Exemple de remise en état de pièces et d'équipements métalliques.",photos:["assets/repair.jpg","assets/welding.jpg","assets/fabrication.jpg"]},
 {titre:"Fabrication sur mesure",description:"Exemple de fabrication et d'assemblage de structures métalliques.",photos:["assets/fabrication.jpg","assets/repair.jpg","assets/welding.jpg"]},
 {titre:"Travaux de soudure",description:"Exemple d'intervention en soudure et d'assemblage métallique.",photos:["assets/welding.jpg","assets/fabrication.jpg","assets/repair.jpg"]}
];
const gallery=document.getElementById('realizationGrid');
if(gallery){realisations.forEach((item)=>{
 const card=document.createElement('article');card.className='realization-card';
 const main=document.createElement('img');main.className='realization-main';main.src=item.photos[0];main.alt=item.titre;main.loading='lazy';card.append(main);
 const body=document.createElement('div');body.className='realization-content';
 const tag=document.createElement('span');tag.className='demo-tag';tag.textContent='Photo illustrative';body.append(tag);
 const h=document.createElement('h3');h.textContent=item.titre;body.append(h);
 const p=document.createElement('p');p.textContent=item.description;body.append(p);
 const thumbs=document.createElement('div');thumbs.className='realization-thumbs';thumbs.setAttribute('aria-label','Photos de '+item.titre);
 item.photos.forEach((photo,i)=>{const b=document.createElement('button');b.className='realization-thumb';b.type='button';b.setAttribute('aria-label','Afficher la photo '+(i+1));b.setAttribute('aria-pressed',String(i===0));const img=document.createElement('img');img.src=photo;img.alt='';img.loading='lazy';b.append(img);b.addEventListener('click',()=>{main.src=photo;main.alt=item.titre+' - photo '+(i+1);thumbs.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true')});thumbs.append(b)});
 body.append(thumbs);card.append(body);gallery.append(card);
})}
