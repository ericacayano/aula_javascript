function soma(n1, n2){
     return n1+ n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}
 var idade = prompt("Qual sua idade");
 console.log(validaIdade(idade));

//alert (soma(5,10));
//var d = new Date();
//alert (d.getMonth());

/*
var count ;
for (count=0; count<= 5; count++){
    alert(count);
};
*/
/*var count = 5;
while(count <= 5){
    console.log(count);
    count ++;

};
*/
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*var fruta =[{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(fruta[1].nome);
*/

/*
var fruta ={nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
*/
//var lista =("maça", "pera", "laranja");
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*
var nome = "Erica Cayano";
var idade = 17;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
*/
