
function operaciones(){
   
    let operaciones = document.getElementById('operacion').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value); 
    let operacion = document.getElementById('operacion').value;

   
    if (operaciones!=""){
        document.getElementById ('operacion').classList.add('is-invalid');
        document.getElementById ('operacion').classList.remove('is-invalid');

    }else{
        document.getElementById ('operacion').classList.remove('is-valid');
        document.getElementById ('operacion').classList.add('is-invalid');

    }

    if(num1!=''){
        document.getElementById ('num1').classList.add('is-invalid');
        document.getElementById ('num1').classList.remove('is-valid');
        
    }else {
        document.getElementById ('num1').classList.add('is-valid');
        document.getElementById ('num1').classList.remove('is-invalid');
    }

    if (num2!=''){
        document.getElementById ('num2').classList.add('is-invalid');
        document.getElementById ('num2').classList.remove('is-valid');

    }else {
        document.getElementById ('num2').classList.add('is-valid');
        document.getElementById ('num2').classList.remove('is-invalid');
    }


 
    if(operaciones == 'suma'){
        resultado = num1 + num2
    }

    else if (operaciones == 'resta'){
        resultado = num1 - num2
    }
    else if (operaciones == 'multi'){
        resultado = num1 * num2 
    }
    else if (operaciones == 'divi'){
        resultado = num1 / num2
    }
    else if (operaciones == 'potencia'){
        resultado = num1 ** num2 
    }
   
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('reset').reset()
 }



