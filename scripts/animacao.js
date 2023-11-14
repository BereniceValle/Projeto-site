/*-------  Ações de navegação hader-nav-menu  -------*/

$('header nav#nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.make').offset().top}, 1000)
})

/*-------  Ações de navegação hader-nav-menu  -------*/

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 1000)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.make').offset().top}, 1000)
})

/*-------  Section sobre  -------*/
/*//elementos de opacidade 0

$('div.sobre-mestre').css('opacity', .0);

$('div.sobre-mestre').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.sobre-mestre').addClass('animate__animated animate__fadeInUp animate__slow');
    }else{
        $('div.sobre-mestre').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
}, {
    offset: '500px;'
})*/
