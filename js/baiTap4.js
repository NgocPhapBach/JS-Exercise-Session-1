/**
 * Khối 1: Input (dữ liệu đầu vào)
 * - chieuDai
 * - chieuRong
 * - chuVi
 * - Dientich
 * 
 * Khối 2: 
 * - B1: Tạo biến và gán giá trị khởi tạo
 * - B2: Xây dựng công thức tính toán
 * + chuVi: (chieuDai + chieuRong) * 2
 * + dienTich: chieuDai * chieuRong
 * - B3: Hiển thị kết quả ra màn hình
 * 
 * Khối 3: Output (kết quả)
 * - chuVi
 * - dienTich
 */

var chieuDai = 10;
var chieuRong = 5;
var chuVi = 0;
var dienTich= 0;

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log("Chu vi của HCN: " + chuVi + "\n" + "Diện tích của HCN: " + dienTich)