


//tio no inicio do código afirma que o texto iniciar por ali
//\d é validação de números seguido por {3} casas
// $ é o final do texto
cpf = () =>{
    var cpf = '012.345.678-90';
    var reg =  /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    var result = reg.test(cpf)

    console.log(result)
}


cnpj = () =>{
    var cnpj = '12.345.654/0001-22';
    var reg =   /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    var result = reg.test(cnpj)
    console.log(result)
}

placaCarro = () =>{
    var placa = 'ABC-1234'
    var reg = /^[A-Z]{3}-[0-9]{4}/;
    var result = reg.test(placa);
    console.log(result)
}


//Não aceita a primeira minuscvula, não aceita numero, não aceita caracter especial, não aceita espaço
nome = () =>{
    var nome = 'Raphael'
    var reg = /^[A-ZÀ-Ú]{1}[a-zà-ú]+$/;
    var result = reg.test(nome);
    console.log(result)
}

nomeCompleto = () =>{
var nomeCompleto = 'Raphael Santantonio';
var isTrue = false;
nomeCompleto.split(' ').forEach((nome, index, arr) =>{
    var reg = /^[A-ZÀ-Ú]{1}[a-zà-ú]+$/;
    var result = reg.test(nome);
    isTrue = result
})
if(isTrue){
    console.log(nomeCompleto.concat(' '))
}
console.log(isTrue)
}

cpf();
cnpj();
placaCarro();
nome();
nomeCompleto();