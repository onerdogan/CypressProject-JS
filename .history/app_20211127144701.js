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

//9)slice()
