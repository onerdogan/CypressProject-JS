//8) splice(): yeni data ekleyebiliyoruz, kaldirabiliyoruz
//mevcut datayi degistirebiliyoruz
const months = ["jan", "march", "april", "june"];
console.log(months);
months.splice(1, 0, "feb");
//1:1. indexe ekle
//0:herhangibirseyi silme
//feb'i ekle
console.log(months);

months.splice(4, 1, "may");
console.log(months);
//4: 4. index'e ekle
//1: ekledikten sonra 1 tane sil

months.splice(5, 0, "june", "july", "aug");
console.log(months);
//5: 5. index'e ekle
//0: herhangibirsey silme

months.splice(5, 3);
console.log(months);

//-1 son index
//-2: son 2 index
months.splice(-1);
console.log(months);
months.splice(-2);
console.log(months);
months.splice(2, 0, "march", "april", "may", "june", "july", "augs");
console.log(months);
//9)slice(startIndex(dahil), endIndex(haric))

console.log(months.slice(2));
//ilk 2 index'i sil

console.log(months.slice(-3));
//son 3 datayi getir

console.log(months.slice(2, 5));
//
console.log(months);
