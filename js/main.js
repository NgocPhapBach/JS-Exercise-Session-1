
//debug code - kiem tra ket qua code -> thong bao ket qua o tab console
console.log("Hello World");

/**
 * Cú pháp của ngôn ngữ (syntax)
 * Variable - Biến
 * lưu trữ dữ liệu
 * tukhoakhaibao tenbien = giatri;
 */

// tên biến: - không bắt đầu bằng số, không chứ ký tự đặc biệt, không có khoảng trắng
// camel case: cú pháp lưng lạc đà (fullName, soLuong, getUserName,...)
var fullName = "Bach Ngoc Phap";
console.log(fullName);

// Kiểu dữ liệu: string, number, boolean (t/f)
// Object, Array

// String
var address = "103 Nguyen Huu Dat"

// Number
var age = 20;

// Boolean (khuyến khích đặt tên theo dạng câu hỏi yes/no)
var isLogin = false;
console.log(address, age, isLogin);

/**
 * const: hằng số
 * không được đặt tên trùng, không gán lại giá trị
 * nên đặt biến là kí tự in hoa
 * => khi cần thay đổi thì chỉ được thay đổi ở dòng code khai báo biến
 */
 const PI = 3.14;
 console.log(PI);

/**
 * Toán tử tính toán
 *  +, -, *, /
 */
var num1 = 5;
var num2 =  6;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
// chia lấy phần dư
var num3 = 14;
var num4 = 3;
console.log("chia lay phan du");
console.log(num3 % num4);

console.log("Kiem tra 8 co phai la so chan khong?")
console.log(8 % 2);

/**
 * Toán tử tăng giảm biến
 * biến tích lũy
 */

// Khoi tao gia tri ban dau
var count = 0;
// Viết rút gọn count = count + 1;
count += 1;
console.log("Tăng lần 1: " + count);
// or 
count++
console.log("Tăng lần 2: " + count);

/**
 * count1++, ++count1
 * Kết hợp chung với =
 */

var count1 = 0
count1++;
console.log(count1);//1
++count1;
console.log(count1);//2

//? nếu có dấu gán = : count2++ => gán trước tăng sau
var count2 = 0;
count2 = count2++;
console.log(count2)//0

//? nếu có dấu gán = : ++count2 => tăng trước gán sau
count2 = ++count2;
console.log(count2)//1
