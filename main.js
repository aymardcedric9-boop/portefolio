
function toggleMenu(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('overlay').classList.toggle('show')}
const roles=["Développeuse Web","Passionnée de Code","Créatrice Chic","BTS IDA 2024-26","Abidjan • CI • @penielle.atto"];let ri=0,ci=0,del=false;
function typeEffect(){const el=document.getElementById('type');if(!el)return;const cur=roles[ri];if(!del){el.textContent=cur.slice(0,ci+1);ci++;if(ci===cur.length){setTimeout(()=>del=true,1400);}}else{el.textContent=cur.slice(0,ci-1);ci--;if(ci===0){del=false;ri=(ri+1)%roles.length;}}setTimeout(typeEffect,del?40:90)}typeEffect();
window.addEventListener('scroll',()=>{
  document.getElementById('progress').style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%';
  document.querySelectorAll('.fade').forEach(e=>{if(e.getBoundingClientRect().top<innerHeight*0.88)e.classList.add('show')});
  document.querySelectorAll('.bar').forEach(b=>{if(b.getBoundingClientRect().top<innerHeight*0.9)b.style.width=b.dataset.w})
});
window.dispatchEvent(new Event('scroll'));
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
document.getElementById('newsletterForm')?.addEventListener('submit',e=>{e.preventDefault();toast('Merci! Abonnée: '+document.getElementById('newsEmail').value);e.target.reset()});
