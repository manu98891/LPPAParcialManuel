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

    function checkNombre (){
        if (checkInput(nombre)) {
            return 'Nombre es imcompleto';
        } else if (nombre.value.length < 3) {
            showError(nombre,'Tiene que tener mas de 3 caracteres');
            return 'Nombre muy caoto';
        } else if (corroboration(nombre.value) || symbolCheck(nombre.value)) {
            showError(nombre,'Porfavor insertar un formato valido');
            return 'Formato invalido';
        } else {
            return '';
        }
    };

    function checkApellido (){
        if (checkInput(apellido)) {
            return 'Apellido es imcompleto';
        } else if (apellido.value.length < 3) {
            showError(apellido,'Tiene que tener mas de 3 caracteres');
            return 'Apellido muy caoto';
        } else if (corroboration(apellido.value) || symbolCheck(apellido.value)) {
            showError(apellido,'Porfavor insertar un formato valido');
            return 'Formato invalido';
        } else {
            return '';
        }
    };

    function checkEmail () {
        if (checkInput(email)) {
            return 'Email imcompleto';
        } else if (!emailFormat.test(email.value)){
            showError(email,'Insertra email valido');
            return 'Formato del email invalido';
        } else {
            return '';
        };
    };

    function checkMensaje(){
        if(checkInput(message)){
            return 'Campo mensaje incompleto';
        } else if (message.value.length < 3){
            showError(message,'Tiene que tener minimoo 3 caracteres');
            return 'Demaciado corto el mendaje';
        } else {
            return '';
        };
    };

    function showError (input,textError) {
        var container = input.parentElement;
        var text = container.querySelector('p');
        text.textContent = textError;
        container.className = 'verification done';
    };

    function reset (input) {
        var container = input.parentElement;
        container.className = 'verification';
    };
}