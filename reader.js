(()=>{const root=document.documentElement;
function size(n){n=Math.max(13,Math.min(25,n));root.style.setProperty('--type',n+'px');try{localStorage.setItem('statmech-font',String(n))}catch(e){}}
try{const n=Number(localStorage.getItem('statmech-font'));if(n>=13&&n<=25)size(n)}catch(e){}
for(const [id,step] of [['larger',1],['smaller',-1]]){const button=document.getElementById(id);if(button)button.addEventListener('click',()=>size((parseInt(getComputedStyle(root).getPropertyValue('--type'),10)||16)+step))}
const details=[...document.querySelectorAll('main details')];
const expand=document.getElementById('expand'),collapse=document.getElementById('collapse');
if(expand)expand.addEventListener('click',()=>details.forEach(d=>d.open=true));
if(collapse)collapse.addEventListener('click',()=>details.forEach(d=>d.open=false));
const search=document.getElementById('search');
if(search)search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();let n=0;
for(const card of document.querySelectorAll('.catalog a')){let match=!q||card.textContent.toLowerCase().includes(q);card.hidden=!match;if(match)n++}
const empty=document.getElementById('empty');if(empty)empty.hidden=n>0});
})();