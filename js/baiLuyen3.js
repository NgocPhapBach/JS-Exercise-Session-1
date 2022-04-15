/**
 * Khối 1: 
 * + tenPhim
 * + soVeNguoiLon
 * + soVeTreEm
 * + giaBanNguoiLon
 * + giaBanTreEm
 * + phanTramTuThien
 * 
 * Khối 2:
 * + soVeBan = soVeNguoiLon + soVeTreEm
 * + doanhThu = soVeNguoiLon * giaBanNguoiLon + soVeTreEm * giaBanTreEm
 * + tienTuThien = doanhThu * phanTramTuThien/100
 * + tienConLai = doanhThu - tienTuThien
 * 
 * 
 * Khối 3:
 * + soVeDaBan
 * + doanhThu
 * + tienTuThien
 * + tienConLai
 */

var tenPhim = "Morbius";
var soVeNguoiLon = 10;
var soVeTreEm = 5;
var giaBanNguoiLon = 10000;
var giaBanTreEm = 5000;
var phanTramTuThien = 10;

var soVeBan = 0;
var doanhThu = 0;
var tienTuThien = 0;
var tienConLai = 0;

soVeBan = soVeNguoiLon + soVeTreEm;
doanhThu = soVeNguoiLon * giaBanNguoiLon + soVeTreEm * giaBanTreEm;
tienTuThien = doanhThu * phanTramTuThien / 100;
tienConLai = doanhThu - tienTuThien;

console.log(
"Tên phim: " + tenPhim + "\n" 
+ "Số vé đã bán: " + soVeBan + "\n" 
+ "Doanh thu: " + doanhThu + "\n" 
+ "Trích % từ thiện: " + phanTramTuThien + "%" + "\n" 
+ "Tổng tiền trích từ thiện: " + tienTuThien + "\n" 
+ "Tổng thu được sau khi trừ: " + tienConLai
);
