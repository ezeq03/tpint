let cantidad = document.getElementById('cantidad').value;
let categoria = document.getElementById('categoria').value;
let pagarTotal = document.getElementById('pagarTotal')

const initCalc =()=>{
  let ticket=200;
  

  if (cantidad > 0 || !cantidad == Number) {
    switch (categoria) {
        case 'Estudiante':
            total = (ticket*0.8) * cantidad;
            pagarTotal.innerHTML = `Total a pagar: $ ${total}`;
            break;
        case 'Trainee':
            total = (ticket*0.5) * cantidad;
            pagarTotal.innerHTML = `Total a pagar: $ ${total}`;
            break;
        case 'Junior':
            total = (ticket*0.15) * cantidad;
            pagarTotal.innerHTML = `Total a pagar: $ ${total}`;
            break;
        case 'Ninguna':
            total = ticket * cantidad;
            pagarTotal.innerHTML = `Total a pagar: $ ${total}`;
            break;
    }
  
}

const resetCalc=()=>{
  cantidad.value = ' ';
  categoria.value = 'Ninguna';
  pagarTotal.innerHTML = 'Total a pagar: $';  
}
