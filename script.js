var d=document.getElementById('deck'),n=d.children.length,sg=document.getElementById('seg'),ct=document.getElementById('ct');
for(var i=0;i<n;i++)sg.appendChild(document.createElement('i'));
function cur(){return Math.round(d.scrollLeft/d.clientWidth)}
function upd(){var c=cur();[].forEach.call(sg.children,function(e,i){e.className=i<=c?'on':''});ct.textContent='0'+(c+1)+'/0'+n}
function go(k){d.scrollTo({left:Math.max(0,Math.min(n-1,k))*d.clientWidth,behavior:'smooth'})}
d.addEventListener('scroll',upd);upd();
document.getElementById('pv').onclick=function(){go(cur()-1)};
document.getElementById('nx').onclick=function(){go(cur()+1)};