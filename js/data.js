document.addEventListener('DOMContentLoaded', function() {
    // Recupera el dato almacenado en localStorage
    const storedData = localStorage.getItem('storedData');
    
    // Verifica si hay un dato almacenado
    if (storedData) {
        // Muestra el dato en el span con id="data"
        document.getElementById('data').textContent = storedData;
    } else {
        document.getElementById('data').textContent = 'No hay datos guardados';
    }
});
