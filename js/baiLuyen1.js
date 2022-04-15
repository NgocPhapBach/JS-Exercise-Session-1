/**
 * Khối 1: Input (dữ liệu đầu vào)
 * - độ dài 2 cạnh góc vuông
 * + edge1 (cạnh góc vuông 1)
 * + edge2 (cạnh góc vuông 2)
 * 
 * 
 * Khối 2: Các bước xử lý
 * - B1: Tạo biến và gán giá trị khởi tạo
 * - B2: Xây dựng công thức tính toán
 * + edge3 = Math.sqrt(Math.pow(edge1,2) + Math.pow(edge2,2));
 * - B3: Hiển thị kết quả ra màn hình
 * 
 * 
 * Khối 3: Output (kết quả)
 * + độ dài cạnh huyền: edge3
 */

var edge1 = 3;
var edge2 = 4;
var edge3 = 0;

// edge3 = Math.sqrt(edge1 * edge1 + edge2 * edge2);
edge3 = Math.sqrt(Math.pow(edge1,2) + Math.pow(edge2,2));

console.log("Do dai canh huyen: " + edge3);