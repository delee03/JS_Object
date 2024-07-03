//Yêu cầu thực hiện lưu trữ thông tin cơ bản về một nhân viên trong cybersoft
// họ tên : Nguyễn Đình ĐÔng
//năm sinh; 2005 chức vụ sale; msnv FE140604

//thuoc tinh va gia tri

let nhanVienDong = {
    hoTen: "NguyenDinhDong",
    namSinh: 2005,
    chucVu: "sale",
    msnv: "FE140604",
    tienLuong: 250000,
    //phuong thuc
    tinhTienLuong: function () {
        //a đông đi làm trong tháng 24ngayf
        return 24 * this.tienLuong;
    },
};

let tenNhanVien = nhanVienDong.hoTen;
console.log(tenNhanVien);
//namSinh
let id = "namSinh";
let namSinh = nhanVienDong[id];
console.log(namSinh);

//
nhanVienDong.diaChi = "48 Bùi Thị Xuân";
console.log(nhanVienDong);

console.log(nhanVienDong.tinhTienLuong());
//Tham trị và tham chiếu
let objectA = {
    hoTen: "QUách kHải",
    namSinh: 2000,
};

let objectB = objectA;
let objectC = {
    hoTen: "QUách khải",
    namSinh: 2000,
};
console.log(objectA == objectB);
objectA.hoTen = "Minh Lâm";
console.log(objectB);

//Sử dụng object.assign;
let monAn = {
    tenMon: "Mì Sủi Cảo",
    giaMon: 6000,
    soLuong: 5,
};

//object cho dữ liệu
//object nhận dữ liệu
//Cách 1 dùng để clone 1 object
let monAnChay = Object.assign({}, monAn);
console.log(monAnChay);
console.log(monAn == monAnChay); //chứng tỏ 2 object giống nhau nhưng không cùng 1 vùng nhớ
monAnChay.tenMon = "Rau xào";
console.log(monAn);
//cách 2 sử dụng ES6 SPREAD OPERATOR để clone 1 object

let monAnTau = { ...monAn, dangBan: true };
console.log("Món ăn tàu");
console.log(monAnTau);

//Cách 3 : sử dụng JSON.stringtify và JSON.parse
console.log("sử dụng stringtify và json .parse");
let monAnJson = JSON.stringify(monAn);
console.log(monAnJson);

let monAnPhap = JSON.parse(monAnJson);
console.log(monAnPhap == monAn);

let arrNumber = [1, 2];
let arrNumber2 = [...arrNumber, "heo ngoc nghech"];
//sử dụng spread operator và chèn 1 phần tử String vào mảng
arrNumber[0] = 9;
console.log(arrNumber2);

//REST PARAMETER
function tinhToanDiemCuoiKi(...diemMonThi) {
    console.log("Điểm môn thi");
    console.log(diemMonThi);
    let tong = 0;
    for (let diem of diemMonThi) {
        tong += diem;
    }
    return tong / diemMonThi.length;
}

let sinhVienToan = tinhToanDiemCuoiKi(7, 5, 6);
let sinhVienHung = tinhToanDiemCuoiKi(10, 8, 4, 9, 5, 6);
console.log(sinhVienToan);
console.log(sinhVienHung);

let xeHoi = {
    tenXe: "Merc S680",
    hang: "Mercesdes",
    mauXe: "màu đỏ",
};

//destructuring (es6)
//bóc tách các thuộc tính để dễ sử dụng tốt cho object

//let mauxe = xeHoi.mauXe;

let { hang, mauXe } = xeHoi;
console.log(hang);
console.log(mauXe);

let sinhVien = [
    {
        hoTen: "vân",
        namSinh: 2010,
    },
    {
        hoTen: "phát",
        namSinh: 2003,
    },
    {
        hoTen: "lâm",
        namSinh: 2010,
    },
    {
        hoTen: "sĩ",
        namSinh: 2003,
    },
];
//mảng phải bóc tách theo đúng thứ tự phần tử => hạn chế
let [sinhVienVan, sinhVienPhat, ThuTu3, svSi] = sinhVien;
console.log(svSi);

let arrMovie = [
    {
        maPhim: 14034,
        tenPhim: "Tấm Vé Đến Thiên Đường",
        biDanh: "tam-ve-den-thien-duong",
        trailer: "https://youtu.be/pyYq_iGzetM",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/tam-ve-den-thien-duong_gp01.png",
        moTa: "Hai diễn viên kỳ cựu của Hollywood",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-08T00:00:00",
        danhGia: 8,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14045,
        tenPhim: "Doraemon: Nobita & bản giao hưởng Địa Cầu",
        biDanh: "doraemon-nobita-ban-giao-huong-dia-cau",
        trailer: "https://www.youtube.com/watch?v=Yug8gbDd5EQ",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/doraemon-nobita-va-ban-giao-huong-dia-cau_gp01.jpg",
        moTa: "Doraemon: Nobita và bản giao hưởng Địa Cầu là bộ phim điện ảnh thứ 43 trong loạt phim điện ảnh Doraemon. Bộ phim được đạo diễn bởi Imai Kazuaki, người cũng đã thực hiện hai phần phim trước đó là Nobita và đảo giấu vàng và Nobita và những bạn khủng long mới. Utsumi Teruko sẽ đảm nhận phần biên kịch cho bộ phim. ",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-04T20:37:12.097",
        danhGia: 8,
        hot: true,
        dangChieu: true,
        sapChieu: false,
    },
    {
        maPhim: 14057,
        tenPhim: "Đất rừng phương Nam",
        biDanh: "dat-rung-phuong-nam",
        trailer: "https://youtu.be/hktzirCnJmQ?si=uWvVMofTrwlEVv3i",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/dat-rung-phuong-nam_gp01.jpg",
        moTa: "Đất rừng phương Nam",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-05T00:00:00",
        danhGia: 7,
        hot: true,
        dangChieu: false,
        sapChieu: true,
    },
    {
        maPhim: 14058,
        tenPhim: "Thám tử Pikachu",
        biDanh: "tham-tu-pikachu",
        trailer: "https://youtu.be/1roy4o4tqQM",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/tham-tu-pikachu_gp01.png",
        moTa: "Hay lắm",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-06T00:00:00",
        danhGia: 5,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14059,
        tenPhim: "THOR 5 - Tình yêu sấm sét",
        biDanh: "thor-5-tinh-yeu-sam-set",
        trailer: "https://www.youtube.com/watch?v=229zaCyuWKQ",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/thor-5-tinh-yeu-sam-set_gp01.png",
        moTa: "Hayyyy",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-04T00:00:00",
        danhGia: 5,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14060,
        tenPhim: "Người sắt 4",
        biDanh: "nguoi-sat-4",
        trailer: "https://youtu.be/SwwlFvOwkhA",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-sat-4_gp01.png",
        moTa: "Do you know that iron man is a really rich man ?",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-07T00:00:00",
        danhGia: 10,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14061,
        tenPhim: "Captain Marvel 2",
        biDanh: "captain-marvel-2",
        trailer: "https://youtu.be/M3tBP1MyMB0",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/captain-marvel-2_gp01.png",
        moTa: "Hay ",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-04T00:00:00",
        danhGia: 7,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14063,
        tenPhim: "Nghề siêuu dễ",
        biDanh: "nghe-sieuu-de",
        trailer: "https://youtu.be/1anBxcsV5b8",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/nghe-sieuu-de_gp01.png",
        moTa: "Oke",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-08T00:00:00",
        danhGia: 5,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14065,
        tenPhim: "Tăng tốc phía em",
        biDanh: "tang-toc-phia-em",
        trailer: "https://youtu.be/h261_whvLPM",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/tang-toc-phia-em_gp01.png",
        moTa: "Oke",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-04T00:00:00",
        danhGia: 10,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14070,
        tenPhim: "Lật mặt 7: Một điều ước",
        biDanh: "lat-mat-7-mot-dieu-uoc",
        trailer: "https://youtu.be/d1ZHdosjNX8?si=-lBG_8wb4WbyJxIS",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-7-mot-dieu-uoc_gp01.jpg",
        moTa: "Mẹ thương yêu con vô điều kiện, nhưng mẹ bệnh con chưa đủ điều kiện để về chăm!\r\n\r\nPhim được phân loại K cho mọi lứa tuổi - các bé dưới 13 tuổi có thể xem khi đi cùng người lớn. \r\n\r\nLật Mặt 7: Một Điều Ước khởi chiếu 26.04.2024 tại các cụm rạp trên toàn quốc.",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-06T00:00:00",
        danhGia: 8,
        hot: true,
        dangChieu: false,
        sapChieu: true,
    },
    {
        maPhim: 14073,
        tenPhim: "Nhà Bà Nữ",
        biDanh: "nha-ba-nuuu",
        trailer: "https://www.youtube.com/watch?v=uAop-vMrggI",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/nha-ba-nuuu_gp01.png",
        moTa: "Phim hay",
        maNhom: "GP01",
        ngayKhoiChieu: "2020-10-10T00:00:00",
        danhGia: 3,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14074,
        tenPhim: "Kẻ Độc Hànhh",
        biDanh: "ke-doc-hanhh",
        trailer: "https://youtu.be/_iyC2aUCxY0",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/ke-doc-hanhh_gp01.png",
        moTa: "Good",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-13T00:00:00",
        danhGia: 8,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14075,
        tenPhim: "BỖNG DƯNG TRÚNG S Ố",
        biDanh: "bong-dung-trung-s-o",
        trailer: "https://youtu.be/D3KbO3QF-lg",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/bong-dung-trung-s-o_gp01.png",
        moTa: "Phim hài hết biết",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-13T00:00:00",
        danhGia: 3,
        hot: false,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14076,
        tenPhim: " Black AAdam",
        biDanh: "black-aadam",
        trailer: "https://youtu.be/uAop-vMrggI",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/black-aadam_gp01.png",
        moTa: "Dwayne Johnson sẽ góp mặt trong tác phẩm hành động - phiêu lưu mới của New Line",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-08T00:00:00",
        danhGia: 10,
        hot: false,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14088,
        tenPhim: "nestJS",
        biDanh: "nestjs",
        trailer: "",
        hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/nestjs_gp01.png",
        moTa: "desc nestJS",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-08T13:43:26.677",
        danhGia: 10,
        hot: false,
        dangChieu: true,
        sapChieu: false,
    },
    {
        maPhim: 14097,
        tenPhim: "Cô gái từ wá khứ",
        biDanh: "co-gai-tu-wa-khu",
        trailer: "https://youtu.be/WsBV9s1SqpM",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/co-gai-tu-wa-khu_gp01.png",
        moTa: "Phim có màu sắc u buồn",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-29T00:00:00",
        danhGia: 10,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 14106,
        tenPhim: "NestJsMovie",
        biDanh: "nestjsmovie",
        trailer: "",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/nestjsmovie_gp01.png",
        moTa: "desc nestJsMovie",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-06-08T00:00:00",
        danhGia: 8,
        hot: true,
        dangChieu: true,
        sapChieu: false,
    },
];

let content = "";
arrMovie.forEach((item) => {
    //destructuring để bóc tách thuộc tính
    let { hinhAnh, tenPhim, hot } = item; // để gọi ra cho gọn
    content += `
        <div class="col-12  col-lg-4 col-xl-3 mt-lg-5"> 
          <div class="card">
                <img height="300px" class="card-img-top object-fit-cover" src="${hinhAnh}" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">${tenPhim}</h4>
                    ${
                        hot
                            ? "  <p class='bg-danger px-4 py-2 rounded position-absolute top-0 end-0 text-white text-uppercase'>Hot</p>"
                            : ""
                    }
                  
                    <a class="btn btn-info">Go to Booking</a>
                </div>
         </div>
        </div>  
    `;
});

document.getElementById("renderPhim").innerHTML = content;

let arrNguoiDung = [
    {
        taiKhoan: "13123",
        hoTen: "NguyenVan123",
        email: "Quyenvan@gmail.com",
        soDT: "0987654321",
        matKhau: "Movie12120088888888",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "abcdfgh",
        hoTen: "Có ai trong đây xin được job chưa ạ",
        email: "huiq@gmail.com",
        soDT: "0987654321",
        matKhau: "123456",
        maLoaiNguoiDung: "QuanTri",
    },
    {
        taiKhoan: "admin_quyen_luc",
        hoTen: "admin_cui_bap",
        email: "admin_quyen_luc@gmail.com",
        soDT: "0323467891",
        matKhau: null,
        maLoaiNguoiDung: "QuanTri",
    },
    {
        taiKhoan: "admin0002",
        hoTen: "Có ai ở đây không",
        email: "AdminS@gmail.com",
        soDT: "0323467891",
        matKhau: "yurtal_tunalsos1",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "admin0003",
        hoTen: "Có ai trong đây xin được job chưa ạ",
        email: "phan03110991@gmail.com",
        soDT: "0987654324",
        matKhau: "John123@f",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "admin01",
        hoTen: "Có ai trong đây xin được job chưa ạ",
        email: "admin01@gmail.com",
        soDT: "0987654321",
        matKhau: "Movie2",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "admin1123",
        hoTen: "admin",
        email: "admin123@gmail.com",
        soDT: "0990090090",
        matKhau: "123321",
        maLoaiNguoiDung: "QuanTri",
    },
    {
        taiKhoan: "admin321",
        hoTen: "admin 123",
        email: "admin321@gmail.com",
        soDT: "0987654321",
        matKhau: "321321",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "admin996",
        hoTen: "PhucDv",
        email: "admin999@gmail.com",
        soDT: "0396244169",
        matKhau: "123456",
        maLoaiNguoiDung: "QuanTri",
    },
    {
        taiKhoan: "Admovie",
        hoTen: "Admovie",
        email: "ad@mail.com",
        soDT: "0909999999",
        matKhau: "123456",
        maLoaiNguoiDung: "QuanTri",
    },
    {
        taiKhoan: "alphameta",
        hoTen: "Thằng ngu ",
        email: "alphametaa@gmail.com",
        soDT: "0937332232",
        matKhau: "123456789",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "Axxx",
        hoTen: "KIM CƯƠNG",
        email: "zzcc@gmail.com",
        soDT: "0376797569",
        matKhau: "@Abc132",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "BC42admin",
        hoTen: "stringUpdate",
        email: "stringupdate@g.xxx",
        soDT: "0333050242",
        matKhau: "nguvuathoi",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "BC55admin",
        hoTen: "BC55 Admin",
        email: "bc55admin@gmail.com",
        soDT: "7979",
        matKhau: "BC55admin",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "caovanlucn6",
        hoTen: "Cao Văn Lực",
        email: "vancaoluc@gmail.com",
        soDT: "0933991939",
        matKhau: "Anhyeuem1@",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "CbsAdmin",
        hoTen: "CBS Admin",
        email: "CbsAdmin@example.com",
        soDT: "0123456789",
        matKhau: "123456aA",
        maLoaiNguoiDung: "QuanTri",
    },
    {
        taiKhoan: "conan123",
        hoTen: "Edogawa Conan",
        email: "conan123@gmail.com",
        soDT: "0909555666",
        matKhau: "Conan123",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "dung251996",
        hoTen: "Mai Anh Dũng",
        email: "maianhdung02051996@gmail.com",
        soDT: "0784586066",
        matKhau: "dung123",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "duyvbadmin",
        hoTen: "Duy",
        email: "duyvb1111@gmail.com",
        soDT: "1234567893",
        matKhau: "123456",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "Hanh",
        hoTen: "Nguyễn Thị Hạnh ",
        email: "updatehanh@gmail.com",
        soDT: "0386992381",
        matKhau: "Bulong@122",
        maLoaiNguoiDung: "khachHang",
    },
    {
        taiKhoan: "Johnsan",
        hoTen: "John Hookasd",
        email: "hookKa@gmail.comasd",
        soDT: "0223452556",
        matKhau: "12356789asdsdaasd",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "mannguyenbc51fake",
        hoTen: "Man Ng",
        email: "mannguyen@gmail.com",
        soDT: "0855512123",
        matKhau: "123123123",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "marking234",
        hoTen: "mark",
        email: "marking234@example.com",
        soDT: "0123456789",
        matKhau: "123456aA",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "meta",
        hoTen: "marking123",
        email: "meta@gmail.com",
        soDT: "0833523888",
        matKhau: "meta",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "nguyen#!",
        hoTen: "Update",
        email: "update@gmail.com",
        soDT: "0386992381",
        matKhau: "123456",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "nguyentest",
        hoTen: "ntntestUpdate2",
        email: "testntnguyen275@gmailcom",
        soDT: "0386992381",
        matKhau: "123456",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "nhlong2305",
        hoTen: "Đây Là Đâu",
        email: "nhlong2305@gmail.com",
        soDT: "0987654321",
        matKhau: "123456",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "robinnhi125admin",
        hoTen: "GumayuLong",
        email: "lt6883958@gmail.com",
        soDT: "0922461176",
        matKhau: "123456",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "tannienad",
        hoTen: "tan nien",
        email: "ad321@gmail.com",
        soDT: "123456789",
        matKhau: "123123",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "thebao27",
        hoTen: "Bao Tran",
        email: "email2710@gmail.com",
        soDT: "2710199798",
        matKhau: "thebao27105",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "TienAdmin",
        hoTen: "Tien Nguyen",
        email: "tiennguyentest@gmail.com",
        soDT: "0123456789",
        matKhau: "Anhtien@1999",
        maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "tinadmin",
        hoTen: "XUI THÔI",
        email: "adminbb@gmail.com",
        soDT: "0833523887",
        matKhau: "Abc@123",
        maLoaiNguoiDung: "KhachHang",
    },
];

//yêu cầu : từ dữ liệu được cung cấp ở mảng arNguoiDung, thực hiện tạo
//ra các tr nằm trong tbody hiển thị các thông tin như tài khoản họ tên, email mã loại người dùng
let info = "";
// arrNguoiDung.forEach((item) => {
//     //destructuring mảng người dùng để bóc tách thuộc tính
//     let { taiKhoan, hoTen, email, maLoaiNguoiDung } = item; // để gọi ra cho gọn
//     info += `
//            <tr class="table-primary">
//                 <td scope="row">${taiKhoan}</td>
//                 <td>${hoTen}</td>
//                 <td>${email}</td>
//                 <td>${maLoaiNguoiDung}</td>
//             </tr>
//         `;
// });

for (let item of arrNguoiDung) {
    //destructuring mảng người dùng để bóc tách thuộc tính
    let { taiKhoan, hoTen, email, maLoaiNguoiDung } = item; // để gọi ra cho gọn
    info += `
           <tr class="table-dark">
                <td scope="row">${taiKhoan}</td>
                <td>${hoTen}</td>
                <td>${email}</td>
                <td>${
                    maLoaiNguoiDung == "KhachHang" ? "Khách hàng" : "Quản trị"
                }</td>
            </tr>
        `;
}

document.getElementById("tbody").innerHTML = info;

//Object literal
//ES6

let hoTenNam = "Sun Nguyễn ";
let sinhVienNam = {
    hoTenNam,
    namSinh: 2002,
};
console.log(sinhVienNam);

//callback funtion(Hàm gọi lại)
function tinhDiemTB() {
    let diemToan = 10;
    let diemLy = 8;
    let diemHoa = 9;

    let diemTB = (diemToan + diemLy + diemHoa) / 3;
}

let arrDienVien = ["Phương Trang", "Lệ Tổ", "Huỳnh Trần", "Vinh Râu"];

// tạo ra một function giống hàm map
function fakeMap(chucNang1) {
    // ở hàm chức năng, nhiệm vụ của hàm sẽ thực hiện nhận vào giá trị phần tử và vị trí index của phần tử đang có trong vòng lặp và trả về một phần tử mới
    let newArrDienVien = [];
    for (let i = 0; i < arrDienVien.length; i++) {
        let newDienVien = chucNang1(arrDienVien[i], i);
        newArrDienVien.push(newDienVien);
    }
    return newArrDienVien;
}

let newArrr = fakeMap((item, index) => {
    console.log(item);
    console.log(index);
    return `Diễn viên ${item}`;
});
console.log(newArrr);

let chucNang1 = function () {};

// Yêu cầu tạo ra một hàm filter ảo để thực hiện lọc các phần tử trong mảng
let arrChampion = [
    {
        hoTen: "Garen",
        tanCong: 93,
        giap: 55,
        khangPhep: 40,
    },
    {
        hoTen: "Kaisa",
        tanCong: 80,
        giap: 30,
        khangPhep: 35,
    },
    {
        hoTen: "Jhin",
        tanCong: 109,
        giap: 35,
        khangPhep: 30,
    },
    {
        hoTen: "Aatrox",
        tanCong: 85,
        giap: 40,
        khangPhep: 25,
    },
];

// Yêu cầu : Thực hiện tạo ra một hàm fakeFilter với công dụng sẽ kiểm tra mảng arrChampion và trả về kết quả mảng mới dựa trên mong muốn của người dùng
// với hàm fakeFilter sẽ có một tham số là một callback function và tham số đó sẽ nhận vào các hàm được cung cấp bên dưới
function kiemTraTanCong(item, index) {
    // kiểm tra nếu tấn công trên 80 thì sẽ nhận  và mảng mới

    return item.tanCong > 80;
}

function kiemTraKhangPhep(item, index) {
    // Kiểm tra nếu kháng phép lớn hơn 30 thì sẽ nhận vào mảng mới

    return item.khangPhep > 30;
}

function fakeFilter(chucNang) {
    let newArrChampion = [];
    for (let i in arrChampion) {
        let isValid = chucNang(arrChampion[i], i);
        if (isValid) {
            newArrChampion.push[arrChampion[i]];
        }
    }
    return newArrChampion;
}

let newArrChampion = fakeFilter(kiemTraTanCong);
console.log(newArrChampion);
let newArrChampion2 = fakeFilter(kiemTraKhangPhep);
console.log(newArrChampion2);

//Lớp đối tượng OOP

//lớp xe tên xe,loại xe , giá , màu sắc
class XeHoi {
    //thuộc tính
    // tenXe  = "Merc S450";
    // loaiXe = "S Class";
    // giaTien = 1200;
    // mauSac = "Đen huyền";

    //Hàm constructor
    constructor(tenXe, loaiXe, giaTien, mauSac) {
        this.tenXe = tenXe;
        // console.log(tenXe);
        this.loaiXe = loaiXe;
        this.giaTien = giaTien;

        this.mauSac = mauSac;
    }

    //Phương thức
    hienThiThongSoXe = function () {
        console.log(`Chiếc xe ${this.tenXe} thuộc loại ${this.loaiXe} Có màu ${
            this.mauSac
        }
            Giá tiền: ${new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(this.giaTien)} `);
    };
}

let xeS680 = new XeHoi("G65", "G CLass", 3000, "Đen");
console.log(xeS680);
xeS680.hienThiThongSoXe();
