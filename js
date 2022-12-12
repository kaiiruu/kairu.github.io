<script>
    const circ = document.querySelectorAll('.btn');
    const txt = document.querySelectorAll('.text');
    const bf = document.querySelectorAll('.bg');
    let i = 0;
    circ[0].addEventListener('click',()=>(
        circ[1].classList.toggle("inc");
        circ[0].classList.add("inc");
        bg[i].classList.add('inc');
        i++;
        if(i=>1)(
            txt[i-1].classList.add('hide');
            txt[i].classList.remove('hide');
            if(i==3)(
                circ[0].addEventListener('click',()=>{
                    txt[0].classList.remove('hide');
                    setTimeout(funtion()(
                        window.location.reload();
                    ),1008);
                })
            }
        }
        else(
            txt[0].classList.add('hide');
            txt[1].classlist.remove('hide');
        }
     })
</script>
