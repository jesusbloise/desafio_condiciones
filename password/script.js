      // Agregar evento al botón
      document.getElementById('verificarButton').addEventListener('click', function() {
        // Obtener los valores de los selectores
        const digito1 = document.getElementById('digito1').value;
        const digito2 = document.getElementById('digito2').value;
        const digito3 = document.getElementById('digito3').value;
        
        // Formar el password concatenando los valores seleccionados
        const password = digito1 + digito2 + digito3;
        
        // Obtener el párrafo de resultado
        const resultado = document.getElementById('resultado');
        
        // Verificar el password y mostrar el mensaje correspondiente
        if (password === '911') {
            resultado.textContent = "Password 1 correcto";
        } else if (password === '714') {
            resultado.textContent = "Password 2 correcto";
        } else {
            resultado.textContent = "Password incorrecto";
        }
    });