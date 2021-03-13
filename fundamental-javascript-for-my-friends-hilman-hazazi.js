// tidak memakai function, dan variable.
console.log("Hello Hilman"); // < ini berfungsi untuk menampilkan output langsung, outputnya ialah Hello Hilman 

// "" < tanda 2 kutip itu ialah string.

// Memakai variable, dan tanpa fucntion

// dalam js untuk mengeluarkan output bisa console / eval.

var kata = "Hello Hilman";
console.log(kata); // Fungsi var ialah untuk membuat variable, kemudian variable tersebut berisi kata Hello Hilman

// menggungakan fuction

function kata() {
	console.log("Hello Hilman");
}

kata(); // Ini berfungsi untuk memanggil fucntion kata yang berisikan Hello Hilman.

// Tipe data Js Primitive
// Tipe data string javascript 

// contoh kode menghitung berapa huruf dalam kalimat / kata

function kata() {
	var kata = "Belajar javascript";
	console.log(kata[0]);
}

kata();

// tipe data number 

// dalam tipe data number ada number dan double number, contoh double number : -(253 -1) dan (253 -1)

// dalam js tidak ada integer : int float : float, jika mau int dan float harus menggunakan teknik Math.ceil, Math.floor / pembulatan decimal 


function angka() {
	a = 10
	b = 10
	hasil = a + b
	console.log(hasil);
}
angka();

// Tipe data Symbol 

var _x = Symbol("x");
var _y = Symbol("y");
// class js, dalam class js function js tidak dituliskan lagi dengan kalimat function lagi

class contoh {
	constructor(x,y) {
		this[_x] = x; // fungsi this mengartikan ini adalah variable,function, yang sebelumnya dibuat bagian atas.
		this[_y] = y;
		this._z = 5;
	}

	getCoordinate() {
		return ("x:"+this[_x]+", y:"+this[_y]); // return berfungsi untuk mengembalikan pemanggilan var x dan y, akan tetapi di combine untuk menghasilkan output terbaru
	}

	getZ() {
		return this._z;
	}

	changeCoordinate(x,y) {
		this[_x] = x;
		this[_y] = y;
	}
}
console.log(_x) // Symbol(x)
var AB = new contoh(2,3);
console.log(AB._z); // 5
console.log(AB.getZ()); // 5
console.log(AB._x); // undefined
console.log(AB.getCoordinate()); // x:2, y:3
AB._z = 7;
console.log(AB.getZ()); // 7
AB.changeCoordinate(3,4);
console.log(AB.getCoordinate()); // x:3, y:4
