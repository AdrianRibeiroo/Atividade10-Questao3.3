function conta(a,b,car)
{
    let z;
    
    if(car == '+')
    {
       z = a + b;
    }
    else if(car == '-')
    {
       z = a - b;
    }
    else if(car == '*')
    {
       z = a * b;
    }
    else if(car == '/')
    {
       z = a / b;
    }
    return z;

}

let x = parseInt(prompt('Digite um número:'));
let y = parseInt(prompt('Digite um número:'));
let op = prompt('Escolha a operação a ser realizada: \n+ Soma\n- Subtrai\n* Multiplica\n/ Divide');

resultado=conta(x,y,op)

alert(`O resultado é ${resultado}`)