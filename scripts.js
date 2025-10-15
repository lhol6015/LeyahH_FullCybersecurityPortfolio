(function(){
  const slides=document.getElementById('slides');
  const navBtns=Array.from(document.querySelectorAll('.nav-btn'));
  let index=0;const max=slides.children.length;
  function update(){slides.style.transform=`translateX(${-index*100}%)`;navBtns.forEach(b=>b.classList.toggle('active',Number(b.dataset.goto)===index));}
  navBtns.forEach(b=>b.addEventListener('click',()=>{index=Number(b.dataset.goto);update();}));
  document.getElementById('year').textContent=new Date().getFullYear();
  const form=document.getElementById('contact-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();alert('Thank you — your message has been received.');form.reset();});}
  update();
})();