document.addEventListener('DOMContentLoaded',()=>{
   
   itemNavegacion = document.querySelector('.nav');

   // console.log(itemNavegacion.children);
   
   
   // itemNavegacion.addEventListener('click', e =>{
   //    e.stopPropagation();
   //    var itemNagevacion = document.querySelectorAll('.navbItem');
   //    console.log(itemNagevacion);
      
   // })

   /*Mouse Hover */
   itemNavegacion.addEventListener('mouseover',e =>{
      if(e.target.id !== ''){
         var idName=e.target.id;
         var classItem = document.getElementById(idName);
         classItem.classList.remove('text-white','nav-link');
         // console.log('esta es mi impresion',classItem);
         // classItem.classList.add('navbItem333','text-white');
         classItem.classList.add('navbItem333');
         
      }
      
   });

   /*mouse output*/
   itemNavegacion.addEventListener('mouseout',e =>{
      if(e.target.id !== ''){
         var idName=e.target.id;
         var classItem = document.getElementById(idName);
         classItem.classList.add('text-white','nav-link');
         // classItem.classList.remove('navbItem333','text-white');
         classItem.classList.remove('navbItem333');
         
      }
      
   });

   // var alturaBanner = document.querySelector('.cabecera').offsetHeight;
   // var alturaBanner2 = document.querySelector('.navbarRow').offsetHeight;
   
   document.addEventListener('scroll',() =>{
      var positionY = window.pageYOffset;
      
      console.log(positionY);

      if(positionY >=374){

            var navBarSeleccion = document.querySelector('.navbarRow');
            navBarSeleccion.classList.add('sticky-top');
            navBarSeleccion.classList.remove('bg-white','bg-opacity-10');
            navBarSeleccion.style.backgroundColor='#242C77';
            // console.log(navBarSeleccion);
            // navBarSeleccion.style.backgroundColor='#FFFFFF';
            //Se seleccionan todas las calses con navbItem 12
            
            var elementosNavBar2 = document.getElementsByClassName("navbItem");
            for (var i = 0; i<elementosNavBar2.length; i++) {
               elementosNavBar2[i].classList.add('text-white');
               // console.log(elementosNavBar2[i]);
               
            }

            var bannerEstatico = document.querySelector('.bannerEstatico');
            bannerEstatico.classList.add('d-none');

            var fondoTextQuienesSomos = document.querySelector('.textQuienesSomos');
            fondoTextQuienesSomos.classList.add('textQuienesSomosScroll');
            var contenidoQsomosScroll =document.querySelector('.contenidoQsomos');
            fondoTextQuienesSomos.classList.add('contenidoQsomosScroll');
            

      }else{
            var navBarSeleccion = document.querySelector('.navbarRow');
            navBarSeleccion.classList.remove('sticky-top');
            
            navBarSeleccion.removeAttribute("style");
            //navBarSeleccion.removeAttribute('style');
            var elementosNavBar2 = document.getElementsByClassName("navbItem");

            for (var i = 0; i<elementosNavBar2.length; i++) {               
               elementosNavBar2[i].classList.add('text-white');
            
            }

            var bannerEstatico = document.querySelector('.bannerEstatico');
            bannerEstatico.classList.remove('d-none');


            var fondoTextQuienesSomos = document.querySelector('.textQuienesSomos');
            fondoTextQuienesSomos.classList.remove('textQuienesSomosScroll');
            var contenidoQsomosScroll =document.querySelector('.contenidoQsomos');
            fondoTextQuienesSomos.classList.remove('contenidoQsomosScroll');


            
         }

         if(positionY >=7700){
            
            var arrow = document.querySelector('.filaBlanco1');
            arrow.classList.remove('d-none');
         }else{
            var arrow = document.querySelector('.filaBlanco1');
            arrow.classList.add('d-none');
         }
         var arrow2 = document.querySelector('.filaBlanco1');

         arrow.addEventListener('click',()=>{
            positionY = 0;
         });
      
   });


   var today = new Date();
   var year = today.getFullYear();
   var year2 = '&copy; ' + year + ' | Todos los Derechos Reservados V-1.0.0'
   var itemYear =document.getElementById('derechos').innerHTML=year2;
   
   

});
