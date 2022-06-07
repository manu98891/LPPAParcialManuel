window.onload = function(){

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var edad = document.getElementById('edad');
    var pais = document.querySelector('select');



    var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var sendButton = document.getElementById('btn-Enviar');

    nombre.addEventListener('blur',function(){
        checkNombre();
    })
    nombre.addEventListener('focus', function() {
        reset(nombre);
    });

    apellido.addEventListener('blur', function() {
        checkApellido();
    });
    apellido.addEventListener('focus', function() {
        reset(apellido);
    });

    email.addEventListener('blur', function() {
        checkEmail();
    });
    email.addEventListener('focus', function() {
        reset(email);
    });

    edad.addEventListener('blur', function() {
        checkEdad();
    });
    edad.addEventListener('focus', function() {
        reset(edad);
    });

    function checkInput (input) {
        if (input.value === '') {
            showError(input,'Campo incompleto');
            return true;
        };
    };

    function corroboration (string) {
        string = string.split(" ").join(""); 
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (Number(string[i]) == string[i]) {
                control ++;
            };
        };
        if (control == 0) {
            return false;
        } else {
            return true;
        };
    };

    // validad que no tenga simbolos
    function symbolCheck (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            for(var x=0;x < symbols.length;x++) {
                if (string[i] == symbols[x]) {
                    control ++;
                };
            }
        };
        if (control == 0) {
            return false;
        } else {
            return true;
        };
    };

}