// TC Kimlik numarası girisi icin gerekli resmi NodeJS kütüphanesini ekliyoruz
const readline = require('readline');

// Komut sisteminde giris alabilmek icin kurulumu yapıyoruz.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TC Kimlik numarasını değisken olarak alıyor ve "answer" değerine kaydediyor ve icinde callback fonksiyonunu calıstırıyoru.z
rl.question('TC Kimlik numarası Numarasını giriniz ', (answer) => {
  rl.close();
  // Girilen değer gecerli bir sayımı kontrol ediyoruz.
  if (isNaN(parseInt(answer))) {
    console.log('Girilen TC Kimlik numarası gecerli bir sayı olmalıdır.');
    return;
  }
  // Girilen sayıyıyı array'e ceviriyoruz.
  let output = answer.split('');
  output.map((el, i) => {
    // Harf seklinde olan sayıları sayıya ceviriyoruz(String'i int'e cevirmek).
    output[i] = Number(el);
  });
  // Uzunluğunu kontrol ediyoruz.
  if (output.length !== 11) {
    console.log('Girilen TC Kimlik numarası 11 haneli olmalıdır.');
    return;
  }
  // Ilk 10 hanesinin toplamını alıyoruz.
  let checkone = 0;
  for (let i = 0; i < 10; i++) {
    checkone += output[i];
  }
  // Girilen TC numarası ile ilk 10 hanesinin toplamının birler basamaklarının esit olup olmadığını kontrol ediyoruz.
  if (Number(checkone.toString().split('').at(-1)) != output.at(-1)) {
    console.log(
      'Bu TC Kimlik numarası icin, ilk 10 rakamın toplamının birler basamağı, 11. rakamı vermemektedir'
    );
  } else if (/* 1,3,5,7,9'uncu hanelerinin toplamının 7 ile carpımının; 2,4,6,8'inci hanelerinin 9 ile carpımının toplamının birler basamaığının 10. haneye esit olup olmadığını kontrol ediyoruz. */
    Number(
      (
        (output[0] + output[2] + output[4] + output[6] + output[8]) * 7 +
        (output[1] + output[3] + output[5] + output[7]) * 9
      )
        .toString()
        .split('')
        .at(-1)
    ) != output[9]
  ) {
    console.log(
      'Bu TC Kimlik numarası icin; 1, 3, 5, 7 ve 9. rakamın toplamının 7 katı ile 2, 4, 6 ve 8. rakamın toplamının 9 katının toplamının birler basamağı 10. rakamını vermemektedir.'
    );
  } else if (/* 1,3,5,7,9'uncu hanelerin toplamının 8 ile carpımının sonucunda cıkan sayının birler basamagının 11. haneye esit olup olmadığını kontrol ediyoruz. */
    Number(
      ((output[0] + output[2] + output[4] + output[6] + output[8]) * 8)
        .toString()
        .split('')
        .at(-1)
    ) != output[10]
  ) {
    console.log(
      'Bu TC Kimlik numarası icin; 1, 3, 5, 7 ve 9. rakamın toplamının 8 katının birler basamağı 11. rakamı vermemektedir.'
    );
  } else {
    // Eğer girilen 11 haneli sayı tüm standartlara uyuyorsa bunu sonuc olarak yazdırıyoruz.
    console.log(`Girdiğiniz "${output.join('')}" gecerli bir TC numarasıdır.`);
  }
});
