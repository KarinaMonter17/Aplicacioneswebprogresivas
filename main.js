//service worker
if('serviceWorker' in navigator){
    console.log('puedes usar los serviceWorker del navegador');
    navigator.serviceWorker.register('./sw.js')
                           .then(res => console.log('serviceWorker cargado correctamente', res))
                           .catch(err => console.log('serviceworker no se ha podido registrar', err))
  
                        
} else {
    console.log('No puedes usar los serviceWorker del navegador');

}
//scroll suavisado
$(document).ready(function(){

$("#menu a").click(function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).attr(href)).offset().top
    });
    return false;
});

});