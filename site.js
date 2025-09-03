         const closedb = document.getElementById('close')
          const learn = document.getElementById('learn')
          const sec1 = document.getElementById('sec1')
          const lang = document.getElementById('lang')


          closedb.addEventListener('click',()=>{
            lang.style.display = 'none'
            sec1.style.filter = 'none'

          });


          learn.addEventListener('click',()=>{
            lang.style.display = 'flex'
            sec1.style.filter = 'blur(20px)'
          });


