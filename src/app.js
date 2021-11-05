console.log("Merhaba Kodlama.io")

//JS type safe değildir
//Typescript type safe jsnin gelişmişi

//var -- aynı değişkene iki değer atadığında izin verir
//let -- aynı değişkene iki değer atadığında hata verir

let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2 //const ile bir değişken tanımlandığında sabittir başka bişey atanmaz
//euroDun = 11 

console.log(euroDun)

//array
//camelCasing -- değişkenler 
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")



console.log(konutKredileri)