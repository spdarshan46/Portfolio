/* THEME */
function toggleTheme(){
  const h=document.documentElement,dark=h.getAttribute('data-theme')==='dark';
  h.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('themeIcon').className=dark?'bx bx-sun':'bx bx-moon';
  localStorage.setItem('spd-theme',dark?'light':'dark');
}
(()=>{
  const t=localStorage.getItem('spd-theme')||'dark';
  document.documentElement.setAttribute('data-theme',t);
  const i=document.getElementById('themeIcon');
  if(i&&t==='light')i.className='bx bx-sun';
})();

/* HEADER SCROLL */
const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>50),{passive:true});

/* MOBILE NAV */
function toggleMobileNav(){
  const nav=document.getElementById('mobileNav'),icon=document.getElementById('menuIcon');
  const o=nav.classList.toggle('open');
  icon.classList.toggle('open',o);
  document.body.style.overflow=o?'hidden':'';
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('menuIcon').classList.remove('open');
  document.body.style.overflow='';
}
/* close on outside tap */
document.getElementById('mobileNav').addEventListener('click',function(e){
  if(e.target===this)closeMobileNav();
});

/* ACTIVE NAV */
const secs=document.querySelectorAll('section[id]');
const navAs=document.querySelectorAll('.navlist a');
window.addEventListener('scroll',()=>{
  let c='';
  secs.forEach(s=>{if(scrollY>=s.offsetTop-180)c=s.id;});
  navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+c));
},{passive:true});

/* SKILLS FILTER */
function filterSkills(cat,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.skill-card').forEach(c=>{
    const show=cat==='all'||c.dataset.cat===cat;
    c.classList.toggle('hidden',!show);
    if(show){c.style.animation='none';void c.offsetWidth;c.style.animation='fadeUp .3s ease both';}
  });
}

/* SCROLL REVEAL */
const ro=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('up');ro.unobserve(e.target);}});
},{threshold:.07,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

/* FORM */
function handleForm(e){
  const btn=document.getElementById('sendBtn'),txt=document.getElementById('btnText');
  txt.textContent='Sending...';btn.disabled=true;
  setTimeout(()=>{
    txt.textContent='Sent! ✓';
    btn.style.background='linear-gradient(135deg,#059669,#10b981)';
    setTimeout(()=>{txt.textContent='Send Message';btn.disabled=false;btn.style.background='';},3000);
  },900);
}

// ==================== INSPECT DISABLE (SAFE) ====================

// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable key shortcuts
document.addEventListener("keydown", function (e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl + Shift + I / J / C
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
        e.preventDefault();
    }

    // Ctrl + U (view source)
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
});


