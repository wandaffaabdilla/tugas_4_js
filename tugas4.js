var siswaSunu = 180;
var siswaVito = 160;
var siswaBudi = 175;

if (siswaSunu > siswaVito && siswaSunu > siswaBudi && siswaBudi > siswaVito) {
  console.log(
    "siswa sunu yang tertinggi, siswa budi memiliki tertinggi kedua, siswa vito memiliki tertinggi ketiga"
  );
} else if (
  siswaVito > siswaSunu &&
  siswaVito > siswaBudi &&
  siswaSunu > siswaBudi
) {
  console.log(
    "siswa vito yang tertinggi, siswa sunu memiliki tertinggi kedua, siswa budi memiliki tertinggi ketiga"
  );
} else if (
  siswaBudi > siswaVito &&
  siswaBudi > siswaSunu &&
  siswaSunu > siswaVito
) {
  console.log(
    "siswa budi yang tertinggi, siswa vito memiliki tertinggi kedua, siswa sunu memiliki tertinggi ketiga"
  );
} else {
  console.log("tidak terdefinisi");
}
