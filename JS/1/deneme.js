//console.log("merhaba");
//console.log(25);
//console.log(5*42);
//
//let isim = "musat";
//let yas = 19;
//
//console.log(isim, yas);

//////////////////////////////////////////////////

//let puan = 100;
//puan = 75;
//
//console.log(puan);
// sonuc 75 olacaktir

//////////////////////////////////////////////////

//atama yapilmayan degisken
//const pi= 3.14;
//const ulke = "turkiye";
//
//console.log(pi);
//console.log(ulke);

////////////////////////////////////////////////////

//const yas = 20;
//yas = 25;
// hata verir cunko const degistirilemez

//////////////////////////////////////////////

//prompt() kullanicidan veri almak icin kullanilir
//let isim = prompt("isminizi giriniz: "); // prpmpt kutucuk olustururur isminizi giriniz: yazisini ekrana yazar ve kullanicidan veri alir
//console.log("merhaba " , isim); 

/////////////////////////////////////////////////////

//let sayi= number(prompt("bir sayi giriniz: ")); // prompt ile kullanicidan veri alinir ve number ile sayiya cevrilir
//
//console.log("girdiginiz sayi: " , sayi); // console.log ile ekrana yazdirilir
//
//yada bir sayi arttirma islemi yapmak icin
//let sayi= number(prompt("bir sayi giriniz: "));
//
//console.log(sayi + 10); // mesela 5 girdi 5+10 = 15 yazar

//////////////////////////////////////////////////

// let yas = 20;
//
// if (yas >= 18) {
//     console.log("reşitsiniz");
// } else {
//     console.log("reşit değilsiniz");
// }

//////////////////////////////////////////////////

//  let notu = 75;
//  
//  if (notu >= 85) {
//      console.log("Çok iyi");
//  } else if (notu >= 50) {
//      console.log("Geçtin");
//  } else {
//      console.log("Kaldın");
//  }

///////////////////////////////////////////

//  function selamVer() {
//      console.log("merhaba");
//  }
//  
//  selamVer(); // fonksiyon cagrilir ve ekrana merhaba yazdirir

//////////////////////////////////////////////

//  function topla(a, b) {
//      return a + b;
//  }
//  
//  console.log(topla(5, 3));

////////////////////////////////////////////////

// bir kodu birden fazla kez calistirir

//  for (let i = 0; i < 5; i++) {
//      console.log(i);
//  }                        // cikti 0 1 2 3 4 olur

// let i = 0: Sayaç sıfırdan başlar.
// i < 5: Sayaç 5'ten küçük olduğu sürece döngü devam eder.
// i++: Sayaç her turda bir artar.

/////////////////////////////////////////////////////

// while kosul dogru oldugu surece tekrarlama
//  let i =0;
//  
//  while (i < 5) {
//      console.log(i);
//      i++;
//  }

//////////////////////////////////////////////////////

//Array birden fazla veri saklamak
//  let meyveler = ["elma", "armut", "muz", "çilek"];
//  
//  console.log(meyveler); // cikti ["elma", "armut", "muz", "çilek"] olur
//  console.log(meyveler[0]); // cikti elma olur
//  console.log(meyveler[1]); // cikti armut olur
//  console.log(lenght(meyveler)); // cikti 4 olur
//  yada
//  console.log(meyveler.length); // cikti 4 olur
//  
//  yeni eleman eklemek
//  meyveler.push("ananas"); // meyveler listesine ananas ekler
//  console.log(meyveler); // cikti ["elma", "armut", "muz", "çilek", "ananas"] olur

////////////////////////////////////////////////////////

//   typeof veri tipini ogrenmek icin kullanilir
//   
//   console.log(typeof 5); // cikti number olur
//   console.log(typeof "merhaba"); // cikti string olur
//   console.log(typeof true); // cikti boolean olur

/////////////////////////////////////////////////////////

//  5 === 5	Eşit mi?	true
//  5 === 3	Eşit mi?	false
//  5 !== 3	Eşit değil mi?	true
//  5 !== 5	Eşit değil mi?	false
//  