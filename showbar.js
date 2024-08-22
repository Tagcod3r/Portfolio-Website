
    const a=document.querySelector('.sidebar1');
    const sidebar=document.querySelector('.showbar');
    const b=document.querySelector('.sidebar');

    a.addEventListener("click",()=>{

     sidebar.style.display="flex";
     a.style.opacity="0";
                                
    });
    b.addEventListener("click",()=>{
        sidebar.style.display="none";
        a.style.opacity="1";
        
    });


    const play=document.querySelector('.logo').addEventListener("click",()=>{
        location.reload();
    })
    
