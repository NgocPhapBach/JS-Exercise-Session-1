/**
 * Khối 1: Input (dữ liệu đầu vào)
 * - luong1Ngay
 * - soNgayLam
 * 
 * Khối 2: Các bước xử lý
 * - B1: Tạo biến và gán giá trị khởi tạo
 * - B2: Xây dựng công thức tính toán
 * + tongLuong = luong1Ngay * soNgayLam
 * - B3: Hiển thị kết quả ra màn hình
 * 
 * 
 * Khối 3: Output (kết quả)
 * - tongLuong
 */

var luong1Ngay = 100000;
var soNgayLam = 5;
var tongLuong = 0;

tongLuong = luong1Ngay * soNgayLam;
// toLocaleString hiển thị dấu chia phần ngàn cho number
console.log("Tổng lương của bạn là: " + tongLuong.toLocaleString() + "VND");

