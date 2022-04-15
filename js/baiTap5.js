/**
 * Khối 1: Input (dữ liệu đầu vào)
 * - num
 * 
 * Khối 2: Các bước xử lý
 * - B1: Tạo biến và gán giá trị khởi tạo
 * - B2: Xây dựng công thức tính toán
 * + soHangChuc = num / 10
 * + soHangDV = num % 10
 * - B3: Hiển thị kết quả ra màn hình
 * 
 * Khối 3: Output (kết quả)
 * - soHangChuc
 * - soHangDV
 */

var num = 99;
var soHangChuc = 0;
var soHangDV = 0;
var tong = 0;

soHangChuc = Math.floor(num / 10);
soHangDV = num % 10;
tong = soHangChuc + soHangDV;

console.log("Tổng số có 2 chữ số: " + tong);