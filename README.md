# T.C. Kimlik Numarası gecerlilik kontrolü
Komut satırından girilen sayıyı tüm T.C. Kimlik numarasına uyup uymadığını kontrol eder.

## T.C. Kimlik Numarası Standartları
T.C. Kimlik No, on bir (11) haneden oluşan ve son rakamı bir çift sayı olan kişiye özgü bir sayıdır.

Üzerinde basit bir pariteyle hata bulma özelliği bulunmaktadır; ilk 10 rakamın toplamının birler basamağı, 11. rakamı vermektedir. Bu algoritmayı kullanan oluşturucularla yaklaşık 900 milyon kadar geçerli T.C. kimlik numarası üretilebilmektedir.

Ayrıca; 1, 3, 5, 7 ve 9. rakamın toplamının 7 katı ile 2, 4, 6 ve 8. rakamın toplamının 9 katının toplamının birler basamağı 10. rakamı; 1, 3, 5, 7 ve 9. rakamın toplamının 8 katının birler basamağı 11. rakamı vermektedir.

## Kullanılan yöntemler
### Bir sayının son hanesini alma
```js
// Bir sayı tanımlıyoruz.
let number = 109735;

// Son haneyi daha kolay alabilmek icin sayıyı string'e ceviriyoruz.
number = number.toString()

// Son haneyi alabilmek icin sayıları ayırıyoruz.
number = number.split('')

// Olusan array dizininin son hanesini 'at' fonksiyonu ile alıyoruz.
number = number.at(-1)

// Eğer string olarak değil int olarak gerekliyse, int'e ceviriyoruz.
number = Number(number)

// Konsol'a yazdırıyoruz
console.log(number)
```
Konsol:
```log
5
```
### Sayıyı parcalamak
```js
// Bir sayı tanımlıyoruz.
let number = 956353;

// Sayıyı array olarak parcalalıyoruz.
number = number.split('')

// Daha sonra bu array icersindeki her sayıyı yani stringi number olan hallerine ceviriyoruz.
number.map((num,index) => {
  number[index] = Number(num)
})

// Konsola yazdırıyoruz.
console.log(number)
```
Konsol: 
```log
[9,5,6,3,5,3]
```
