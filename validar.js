/**
    * @author Rafael Jesús Nieto Cardador
*/

{
    Validar = (function() {
        function validarCorreo(email, emailReg){
            if(email == ""){
                throw "ERROR: El correo no puede estar vacío.";
            }
            if(!emailReg.test(email)){
                throw "ERROR: El formato del correo es incorrecto (Ej example@gmail.com)."
            }
        }

        function validarDNI(dni, dniReg){
            const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
            let dniExec = dniReg.exec(dni);
            if(dni == ""){
                throw "ERROR: El DNI no puede estar vacío.";
            }
            
            if(!dniReg.test(dni)){
                throw "ERROR: El formato del DNI es incorrecto.";
            }
            
            if(dniExec[2] != letras[dniExec[1]%23]){
                throw "ERROR: La letra introducida no es correcta.";
            }
        }

        function validarFecha (fecha, fechaReg){
            let fechaExec = fechaReg.exec(fecha);
            if(fecha == ""){
                throw "ERROR: La fecha no puede estar vacía.";
            }

            if(fechaExec == null){
                throw "ERROR: El formato de la fecha es incorrecto. (DD-MM-AAAA)";
            }

            let fechaObjeto = new Date(`${fechaExec[5]}/${fechaExec[3]}/${fechaExec[1]}`);
            
            if(fechaExec[2] != fechaExec[4]){
                throw false,"ERROR: El formato de la fecha es incorrecto. (Puedes usar / o - para separar la fecha, pero no ambos.)";
            }

            if(Number(fechaExec[1]) != fechaObjeto.getDate() || Number(fechaExec[3]) != fechaObjeto.getMonth() +1 || Number(fechaExec[5]) != fechaObjeto.getFullYear()){
                throw false,"ERROR: La fecha es incorrecta (Ejemplo: día 45 de febrero).";
            }  
        }

        function validarTel (tel, telReg){
            if(tel == ""){
                throw false,"ERROR: El teléfono no puede estar vacío.";
            }
            
            if(!telReg.test(tel)){
                throw false,"ERROR: El formato del número de teléfono es incorrecto (Ej 657 01 23 45 o 657012345).";
            }
             
        }

        function validarUrl (url, urlReg){
            if(url == ""){
                throw false,"ERROR: La URL no puede estar vacía.";
            }
            
            if(!urlReg.test(url)){
                throw false,"ERROR: El formato de la URL es incorrecto. (Ej https://example.com/example/).";
            }
        }

        function validarModulo (modulo){
            if(modulo == undefined || modulo == ""){
                throw false,"ERROR: Debes elegir un módulo.";
            }
             
        }

        function validarAficiones (aficiones){
            if(!aficiones[0].checked && !aficiones[1].checked && !aficiones[2].checked){
                throw false,"ERROR: Debes elegir al menos una afición.";
            }
             
        }

        function validarGrado (grado){
            if(!grado.checked){
                throw false,"ERROR: Debes elegir un grado.";
            }
        }

        return{
            validarCorreo: validarCorreo,
            validarDNI: validarDNI,
            validarFecha: validarFecha,
            validarTel:validarTel,
            validarUrl:validarUrl,
            validarModulo:validarModulo,
            validarAficiones:validarAficiones,
            validarGrado:validarGrado
        }

    })();
}