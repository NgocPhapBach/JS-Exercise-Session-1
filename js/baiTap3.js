/**
 * Khối 1: Input (dữ liệu đầu vào)
 * - tienUSD
 * - giaDoi
 * 
 * Khối 2:
 * - B1: Tạo biến và gán giá trị khởi tạo
 * - B2: Xây dựng công thức tính toán
 * + quyDoi = tienUSD * giaDoi
 * - B3: Hiển thị kết quả ra màn hình
 * 
 * Khối 3: Output (kết quả)
 * - quy đổi tiền USD sang VND: quyDoi
 */

var tienUSD = 2;
var giaDoi = 23500;
var quyDoi = 0;

quyDoi = tienUSD * giaDoi;

console.log("Số tiền sau khi quy đổi: " + quyDoi.toLocaleString() + "VND")