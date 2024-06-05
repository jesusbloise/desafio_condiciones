 // Obtener la imagen por su id
 const imagen = document.getElementById('miImagen');

 // Agregar un evento de clic a la imagen
 imagen.addEventListener('click', function() {
     // Verificar si la imagen ya tiene la clase borde-rojo
     if (this.classList.contains('borde-rojo')) {
         // Si tiene la clase, quitarla
         this.classList.remove('borde-rojo');
     } else {
         // Si no tiene la clase, agregarla
         this.classList.add('borde-rojo');
     }
 });