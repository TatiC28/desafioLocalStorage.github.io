document.getElementById('buttonText').addEventListener('click', function() {
    // Obtiene el valor ingresado en el campo de texto
    const inputText = document.getElementById('inputText').value;
    
    // Verifica que el campo no esté vacío
    if (inputText.trim() !== '') {
        // Almacena el valor en el localStorage
        localStorage.setItem('storedData', inputText);
        alert('Dato guardado en localStorage');
    } else {
        alert('Por favor ingresa un valor antes de guardar');
    }
});
