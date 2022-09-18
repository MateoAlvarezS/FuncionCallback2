(function(){
    'use strict';
    
    var callback2 = {
        // Callback con numero aleatorio de 1 a 100
        numero_aleatorio: function(callback) {
            var randomNumber = Math.floor((Math.random() * 100) + 1);
            // Devuelve numero aleatorio
            callback(randomNumber);
        },
    };

    // Llamar a nuestras funciones
    callback2.numero_aleatorio(function(num) {
        logResult("numero_aleatorio", num);
    });
    
})();