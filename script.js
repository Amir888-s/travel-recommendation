const recommendations = {
  beaches: [
    {title:'Grace Bay, Turks & Caicos', text:'Powder-white sand and calm turquoise water make this an easygoing Caribbean classic.', image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85'},
    {title:'McWay Falls, California', text:'A sheltered beach and a coastal waterfall create a spectacular view along California’s Big Sur coast.', image:'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85'}],
  temples: [
    {title:'Kiyomizu-dera, Japan', text:'A timber temple above Kyoto, especially memorable among spring blossoms and autumn color.', image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85'},
    {title:'Wat Arun, Thailand', text:'Bangkok’s riverside Temple of Dawn glows with porcelain detail in the early morning light.', image:'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=85'}],
  japan: [
    {title:'Kyoto, Japan', text:'Centuries-old lanes, quiet gardens, and an extraordinary food culture reward slow exploration.', image:'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1000&q=85'},
    {title:'Tokyo, Japan', text:'A thrilling mix of neighborhood intimacy, contemporary design, and endless culinary discovery.', image:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=85'}],
  italy: [
    {title:'Florence, Italy', text:'Renaissance masterpieces, artisan workshops, and golden Tuscan light meet along the Arno.', image:'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?auto=format&fit=crop&w=1000&q=85'},
    {title:'Amalfi Coast, Italy', text:'Clifftop villages, lemon groves, and winding roads frame the brilliant Mediterranean.', image:'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1000&q=85'}],
  australia: [
    {title:'Sydney, Australia', text:'Harbor icons, creative neighborhoods, and urban beaches create an effortless outdoor rhythm.', image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=85'},
    {title:'Great Barrier Reef, Australia', text:'Coral gardens and island landscapes offer a vivid window into the underwater world.', image:'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=85'}]
};
recommendations.countries = [...recommendations.japan.slice(0,1), ...recommendations.italy.slice(0,1)];
const aliases = {beach:'beaches', seaside:'beaches', temple:'temples', country:'countries'};
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#search-input');
const results = document.querySelector('#results');
function showResults(raw){
  const query = raw.trim().toLowerCase(); const key = aliases[query] || query;
  const items = recommendations[key];
  results.innerHTML = items ? items.map(item => `<article class="result-card"><img src="${item.image}" alt="${item.title}" loading="lazy"><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join('') : `<p class="result-message">No exact match yet. Try <strong>beaches</strong>, <strong>temples</strong>, <strong>countries</strong>, <strong>Japan</strong>, <strong>Italy</strong>, or <strong>Australia</strong>.</p>`;
  document.querySelector('#discover').scrollIntoView({behavior:'smooth'});
}
searchForm.addEventListener('submit', e => {e.preventDefault(); showResults(searchInput.value)});
document.querySelector('.clear-btn').addEventListener('click', () => {searchInput.value=''; results.innerHTML=''; searchInput.focus()});
document.querySelectorAll('.category-card').forEach(button => button.addEventListener('click', () => {searchInput.value=button.dataset.query; showResults(button.dataset.query)}));
document.querySelector('.menu-toggle').addEventListener('click', e => {const nav=document.querySelector('.nav'); nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.querySelector('#contact-form').addEventListener('submit', e => {e.preventDefault(); document.querySelector('#form-status').textContent='Thank you—your travel idea is on its way!'; e.currentTarget.reset()});