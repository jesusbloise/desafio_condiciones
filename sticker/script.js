  // Agregar evento al botón
  document.getElementById('calcularButton').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const sticker1 = parseInt(document.getElementById('sticker1').value);
    const sticker2 = parseInt(document.getElementById('sticker2').value);
    const sticker3 = parseInt(document.getElementById('sticker3').value);
    
    // Calcular el total de stickers
    const totalStickers = sticker1 + sticker2 + sticker3;
    
    // Obtener el párrafo de resultado
    const resultado = document.getElementById('resultado');
    
    // Verificar si el total de stickers es menor o igual a 10
    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        resultado.textContent = "Llevas demasiados stickers.";
    }
});