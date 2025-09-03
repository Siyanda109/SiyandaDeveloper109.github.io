         const closedb = document.getElementById('close')
          const learn = document.getElementById('learn')
          const sec1 = document.getElementById('sec1')
          const lang = document.getElementById('lang')


          closedb.addEventListener('click',()=>{
            lang.style.display = 'none'
            sec1.style.filter = 'none'

          })
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
    else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el)=> observer.observe(el));

          learn.addEventListener('click',()=>{
            lang.style.display = 'flex'
            sec1.style.filter = 'blur(20px)'
          })

