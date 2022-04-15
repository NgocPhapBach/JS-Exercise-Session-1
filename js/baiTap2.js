/**
 * Khối 1: Input (dữ liệu đầu vào)
 * - var num1...num5
 * 
 * Khối 2: 
 * - B1: Tạo biến và gán giá trị khởi tạo
 * - B2: Xây dựng công thức tính toán
 * + tb = (num1 + ... + num5) / 5
 * - B3: Hiển thị kết quả ra màn hình
 * 
 * Khối 3: Output (kết quả)
 * + độ dài cạnh huyền: edge3
 */

var num1 = 3.78;
var num2 = 5.42;
var num3 = 2.6;
var num4 = 9.24;
var num5 = 12.7;
var tb = 0;

tb = (num1 + num2 + num3 + num4 + num5) / 5;

console.log("Số trung bình là: " + tb);

console.log("Làm tròn: " + Math.round(tb));

console.log("Làm tròn lấy bao nhiêu số sau . : " + tb.toFixed(2));