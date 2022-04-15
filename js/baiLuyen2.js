/**
 * Khối 1: Input
 * + num (số dương có 3 chữ số)
 * 
 * Khối 2: Các bước xử lý
 * - B1: khai báo biến và gán giá trị khởi tạo
 * - B2: Xây dựng công thức tính toán
 *  + hund (hàng trăm): num/100 -> lấy phần nguyên floor(num/100)
 *  + ten (hàng chục): lấy phần dư của num/100 ->phần Dư = num%100 -> floor(phần Dư/10)
 *  + unit (hàng đơn vị): phần dư % 10
 *   -> sum = hund + ten + unit
 * - B3: Hiển thị kết quả
 * 
 * Khối 3: Output
 * + tổng các chữ số
 */

var num = 586;
var hund = 0;
var ten = 0;
var unit = 0;
var sum = 0;

hund = Math.floor(num/100);
ten = Math.floor((num % 100) / 10);
unit = (num % 100) % 10;

num = hund + ten + unit;

console.log("Tong 3 chu so: " + num);