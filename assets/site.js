/* ELOURE THE STUDIO – shared header, footer, images, reveal */
const SITE = {
  email: 'elourethestudio@outlook.com',
  phone: '+41 76 529 71 29',
  wa: '41765297129',
  address: 'Bahnhofstrasse 20, 8580 Amriswil',
  live: 'https://www.elourethestudio.ch',
  hours: { 1:[10,20], 2:[10,20], 3:[10,20], 4:[10,20], 5:[10,20], 6:[10,16] } // Mo–Sa; So geschlossen
};

const IMG = {
  hero:      'images/hero.jpg',       // Corine & Caro
  portrait1: 'images/portrait1.jpg',
  portrait2: 'images/portrait2.jpg',
  legs:      'images/legs.jpg',
  room:      'images/room.jpg',
  window:    'images/window.jpg',
  lounge:    'images/lounge.jpg',
  sofa:      'images/sofa.jpg',
  armchair:  'images/armchair.jpg',
  treatment: 'images/treatment.jpg'
};

const NAV = [
  ['index.html','Start','home'],
  ['leistungen.html','Leistungen & Preise','leistungen'],
  ['ueber-uns.html','Über uns','ueber-uns'],
  ['faq.html','FAQ','faq'],
  ['kontakt.html','Kontakt','kontakt'],
  ['termin-buchen.html','Termin buchen','buchen']
];

const ICON = {
  ig:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/></svg>',
  wa:'<svg viewBox="0 0 24 24"><path d="M4 20l1.2-4A8 8 0 1 1 8 18.8Z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-1-.4-1.8-1.2-2.2-2.2l.8-1-1-2Z"/></svg>'
};

function buildChrome(){
  const page = document.body.dataset.page || '';
  const h = document.getElementById('site-header');
  if(h){
    h.outerHTML = `<header class="site" id="top"><div class="wrap nav">
      <a class="logo" href="index.html" aria-label="ELOURE THE STUDIO – Start"><b>ELOURE</b><small>THE STUDIO</small></a>
      <nav id="nav" aria-label="Hauptnavigation"><ul>${NAV.map(n=>`<li><a href="${n[0]}"${n[2]===page?' class="active" aria-current="page"':''}>${n[1]}</a></li>`).join('')}</ul></nav>
      <a class="btn btn-terra" href="termin-buchen.html">Jetzt Termin buchen</a>
      <button class="burger" id="burger" aria-label="Menü öffnen" aria-expanded="false"><span></span><span></span></button>
    </div></header>`;
  }
  const f = document.getElementById('site-footer');
  if(f){
    f.outerHTML = `<footer class="site"><div class="wrap">
      <div class="fg">
        <div><div class="logo"><b>ELOURE</b><small>THE STUDIO</small></div>
          <p>Professionelle Laserhaarentfernung in Amriswil – persönlich, ruhig und individuell.</p>
          <div class="soc">
            <a href="https://www.instagram.com/elourethestudio/" aria-label="Instagram" target="_blank" rel="noopener">${ICON.ig}</a>
            <a href="https://wa.me/${SITE.wa}" aria-label="WhatsApp" target="_blank" rel="noopener">${ICON.wa}</a>
          </div></div>
        <div><h4>Navigation</h4><ul>${NAV.map(n=>`<li><a href="${n[0]}">${n[1]}</a></li>`).join('')}</ul></div>
        <div><h4>Kontakt</h4><ul>
          <li>Bahnhofstrasse 20<br>8580 Amriswil</li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li><a href="tel:${SITE.phone.replace(/\s/g,'')}">${SITE.phone}</a></li></ul></div>
        <div><h4>Öffnungszeiten</h4><ul><li>Montag – Freitag<br>10:00 – 20:00</li><li>Samstag<br>10:00 – 16:00</li></ul></div>
      </div>
      <div class="fb"><span>© ELOURE THE STUDIO</span>
        <div><a href="${SITE.live}/impressum">Impressum</a><a href="${SITE.live}/datenschutz">Datenschutzbestimmung</a><a href="${SITE.live}/agb-s">AGB</a></div></div>
    </div></footer>`;
  }
  const nav = document.getElementById('nav'), b = document.getElementById('burger');
  if(nav && b){
    b.addEventListener('click',()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');b.setAttribute('aria-expanded',false)}));
  }
  const hd = document.querySelector('header.site');
  if(hd) addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>10),{passive:true});
}

function applyImages(root=document){
  root.querySelectorAll('[data-img]').forEach(el=>{
    const u = IMG[el.dataset.img]; if(!u) return;
    el.style.backgroundImage = `url("${u}")`;
    el.classList.add('photo');
  });
  root.querySelectorAll('img[data-src]').forEach(el=>{ el.src = IMG[el.dataset.src]; });
}

function initReveal(root=document){
  if(!('IntersectionObserver' in window)){ root.querySelectorAll('.rv').forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  root.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));
}

/* Requests are handed to the visitor's WhatsApp / mail app, prefilled – no backend needed. */
function waLink(text){ return `https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`; }
function mailLink(subject, text){ return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`; }

function chf(n){ return n==null ? 'Preis auf Anfrage' : 'CHF ' + n; }
function dur(min){ const h=Math.floor(min/60), m=min%60; return (h? h+' Std.' : '') + (h&&m?' ':'') + (m? m+' Min.' : ''); }

document.addEventListener('DOMContentLoaded',()=>{ buildChrome(); applyImages(); initReveal(); });
