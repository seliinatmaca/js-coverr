//bir soydan export edilen bütün elemanlara erişme
// import { deneme,deneme1 } from "./main.js";
import * as ages from "./main.js";
console.log(ages);

/*
Modul yapısı programlamada kodun bölümlenmesini ve yönetiminin
kolaylaşmasını sağlar.
Programın daha organize hale getirir ve kodun
yeniden kullanılabilirliğini artırır.
! export (dışa aktarma): 
farklı dosyaların bu export edilen elemana erişimim sağlar.

*/

export const leaderTable1 = [
  {
    id: "1asdk123",
    name: "Ali",
    point: 8090,
    isActive: true,
  },
];
export const leaderTable = [
  {
    id: "1asdk123",
    name: "Ali",
    point: 8090,
    isActive: true,
  },
  {
    id: "2bsdf456",
    name: "Ayşe",
    point: 7300,
    isActive: true,
  },
  {
    id: "3ctgh789",
    name: "Ahmet",
    point: 6700,
    isActive: false,
  },
  {
    id: "4duij012",
    name: "Fatma",
    point: 5900,
    isActive: true,
  },
  {
    id: "5evkl345",
    name: "Emre",
    point: 5200,
    isActive: true,
  },
  {
    id: "6fwmn678",
    name: "Mehmet",
    point: 4500,
    isActive: false,
  },
  {
    id: "7gxop901",
    name: "Zeynep",
    point: 4100,
    isActive: true,
  },
  {
    id: "8hyqr234",
    name: "Hasan",
    point: 3700,
    isActive: true,
  },
  {
    id: "9izst567",
    name: "Elif",
    point: 3200,
    isActive: false,
  },
  {
    id: "10jklu89",
    name: "Can",
    point: 2900,
    isActive: true,
  },
  {
    id: "11lmno01",
    name: "Leyla",
    point: 2500,
    isActive: false,
  },
];

//varsayılan olarak dışa aktarılan eleman
// her dosya da sadece 1 varsayılan dışa aktarım hakkımız var.

const adminPass = "sdajkdf123";
export default adminPass;
