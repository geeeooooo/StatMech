(()=>{
const boxes=[...document.querySelectorAll('input[data-id]')],chapters=[...document.querySelectorAll('.chapter')];
const count=document.getElementById('count'),status=document.getElementById('status');
const store='statmech-selected-v1',fontStore='statmech-font-v1';
let saved=[];try{saved=JSON.parse(localStorage.getItem(store)||'[]');if(!Array.isArray(saved))saved=[]}catch(e){}
boxes.forEach(b=>b.checked=saved.includes(b.dataset.id));
function update(){const ids=boxes.filter(b=>b.checked).map(b=>b.dataset.id);count.textContent=ids.length+' section'+(ids.length===1?'':'s')+' selected';try{localStorage.setItem(store,JSON.stringify(ids))}catch(e){}}
boxes.forEach(b=>b.addEventListener('change',update));update();
document.getElementById('clear').addEventListener('click',()=>{boxes.forEach(b=>b.checked=false);update();status.textContent='Selections cleared.'});
document.getElementById('copy').addEventListener('click',async()=>{
 const chosen=boxes.filter(b=>b.checked);
 if(!chosen.length){status.textContent='Select one or more sections first.';return}
 const message='Please add these topics to my StatMech GitHub Pages website, including complete step-by-step derivations, physical explanations, assumptions, and fully worked examples:\n'+chosen.map(b=>b.dataset.id+' '+b.closest('.topic').textContent.trim().replace(/^\d+\.\d+/,'').trim()).join('\n');
 try{await navigator.clipboard.writeText(message);status.textContent='Copied! Paste your selected topics into ChatGPT.'}
 catch(e){status.textContent='Copy is unavailable here; select the text below manually.';let ta=document.getElementById('copy-fallback');if(!ta){ta=document.createElement('textarea');ta.id='copy-fallback';ta.style.width='100%';ta.rows=6;status.after(ta)}ta.value=message;ta.focus();ta.select()}
});
function resize(n){let size=Math.min(25,Math.max(13,n));document.documentElement.style.setProperty('--size',size+'px');try{localStorage.setItem(fontStore,String(size))}catch(e){}}
try{const n=Number(localStorage.getItem(fontStore));if(n>=13&&n<=25)resize(n)}catch(e){}
for(const [id,step] of [['larger',1],['smaller',-1]])document.getElementById(id).addEventListener('click',()=>resize((parseInt(getComputedStyle(document.documentElement).getPropertyValue('--size'),10)||16)+step));
document.getElementById('expand').addEventListener('click',()=>chapters.forEach(c=>c.open=true));
document.getElementById('collapse').addEventListener('click',()=>chapters.forEach(c=>c.open=false));
const search=document.getElementById('search'),empty=document.getElementById('empty');
search.addEventListener('input',()=>{
 const q=search.value.toLowerCase().trim();let found=0;
 for(const c of chapters){const heading=c.querySelector('.heading').textContent.toLowerCase();let visible=0;
  for(const row of c.querySelectorAll('.topic')){const show=!q||heading.includes(q)||row.textContent.toLowerCase().includes(q);row.hidden=!show;if(show)visible++}
  c.hidden=visible===0;if(visible)found++;if(q&&visible)c.open=true;
 }
 empty.hidden=found!==0;
});
})();