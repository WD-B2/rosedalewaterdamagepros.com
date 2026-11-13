(function(){
var mq=window.matchMedia('(max-width: 900px)');
var t=document.querySelector('.menu-toggle'),m=document.getElementById('mobnav');
if(t&&m){t.addEventListener('click',function(){var o=m.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');t.textContent=o?'Close':'Menu';});}
document.querySelectorAll('.nav-drop>button').forEach(function(b){
b.addEventListener('click',function(ev){ev.stopPropagation();var d=b.parentNode,o=d.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');
document.querySelectorAll('.nav-drop').forEach(function(x){if(x!==d){x.classList.remove('open');x.firstElementChild.setAttribute('aria-expanded','false');}});});});
document.addEventListener('click',function(){document.querySelectorAll('.nav-drop.open').forEach(function(x){x.classList.remove('open');x.firstElementChild.setAttribute('aria-expanded','false');});});
document.addEventListener('keydown',function(ev){if(ev.key==='Escape'){document.querySelectorAll('.nav-drop.open').forEach(function(x){x.classList.remove('open');});if(m&&m.classList.contains('open')){m.classList.remove('open');t.setAttribute('aria-expanded','false');t.textContent='Menu';}}});
mq.addEventListener('change',function(e){if(!e.matches&&m){m.classList.remove('open');if(t){t.setAttribute('aria-expanded','false');t.textContent='Menu';}}});
})();
