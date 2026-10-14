(function(){
  // year
  document.querySelectorAll('.js-year').forEach(function(el){ el.textContent=new Date().getFullYear(); });
  // nav scrolled state
  var nav=document.getElementById('nav');
  if(nav){ var onScroll=function(){ nav.classList.toggle('scrolled', window.scrollY>8); };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll(); }
  // mobile menu
  var hamb=document.getElementById('hamb'), links=document.getElementById('navLinks');
  if(hamb&&links){ hamb.addEventListener('click',function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ links.classList.remove('open'); }); }); }
  // reveal on scroll
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  // js-on: signal JS is active so CSS can hide-then-reveal (graceful no-JS fallback)
  document.documentElement.classList.add('js-on');
  // staggered chat reveal for conversation exchanges
  if('IntersectionObserver' in window){
    var seenIO=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('seen'); seenIO.unobserve(e.target); } }); },{threshold:.2});
    document.querySelectorAll('.xchg, .flow').forEach(function(el){ if(el){ seenIO.observe(el); } });
  } else {
    // no IntersectionObserver: reveal everything so nothing stays hidden
    document.querySelectorAll('.xchg, .flow').forEach(function(el){ if(el){ el.classList.add('seen'); } });
  }
  // faq accordion (if present)
  document.querySelectorAll('.qa button').forEach(function(btn){
    btn.addEventListener('click',function(){
      var qa=btn.parentElement, a=qa.querySelector('.a'), open=qa.classList.contains('open');
      document.querySelectorAll('.qa.open').forEach(function(o){ if(o!==qa){ o.classList.remove('open'); o.querySelector('.a').style.maxHeight=null; } });
      if(open){ qa.classList.remove('open'); a.style.maxHeight=null; }
      else{ qa.classList.add('open'); a.style.maxHeight=a.scrollHeight+'px'; }
    });
  });
})();
