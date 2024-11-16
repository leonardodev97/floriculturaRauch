window.revelar = ScrollReveal({reset:true})

revelar.reveal('.parttner',{
    duration: 2000,
    distance:'90px',
     origin:'left',
     delay: 500
})

revelar.reveal('.img-topo',{
    duration: 2000,
    distance:'90px',
     origin:'right',
     delay: 900
})

revelar.reveal('.foto1',{
    duration:2000,
    distance:'90px',
    origin:'left',
    delay:800
})

revelar.reveal('.foto2',{
    duration:2000,
    distance:'90px',
    origin:'left',
    delay:1000
})

revelar.reveal('.foto3',{
    duration: 2000,
    distance:'90px',
    origin:'right',
    delay: 1200
})

revelar.reveal('.h2',{
    duration: 2000,
    distance:'90px',
    origin:'right',
    delay: 1200
})

revelar.reveal('.div-album',{
    duration: 2000,
    distance:'90px',
    origin:'right',
    delay: 1200
})

revelar.reveal('.parttner1',{
    duration:2000,
    distance:'90px',
    origin:'left',
    delay:800
})

revelar.reveal('.parttner2',{
    duration:2000,
    distance:'90px',
    origin:'left',
    delay:800
})

revelar.reveal('.parttner3',{
    duration:2000,
    distance:'90px',
    origin:'right',
    delay:800
})

revelar.reveal('.elemento',{
    duration:2000,
    distance:'90px',
    origin:'right',
    delay:800
})

revelar.reveal('.top',{
    duration:2000,
    distance:'90px',
    origin:'right',
    delay:800
})

revelar.reveal('.next',{
    duration:2000,
    distance:'90px',
    origin:'right',
    delay:800
})

function clickMenu(){
    if(itens.style.display == 'none'){
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}



