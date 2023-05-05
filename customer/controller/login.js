$(document).ready(function () {
  $("#eye").click(function () {
    $(this).toggleClass("open");
    $(this).children("i").toggleClass("fa-eye-slash fa-eye");
    if ($(this).hasClass("open")) {
      // alert('Type text');
      $(this).prev().attr("type", "text");
    } else {
      $(this).prev().attr("type", "password");
    }
  });
});

document.querySelector("#form-login").onsubmit = function (event) {
  // event.target
  event.preventDefault(); //Chặn sự kiện reload lại trang
  //input: thông tin sinh viên object sinhVien
  var sv = new Login();
  sv.tenDangNhap = document.querySelector("#tenDangNhap").value;
  sv.matKhauDangNhap = document.querySelector("#matKhauDangNhap").value;
  //output: sinhVien
  console.log(sv);

  var valid = true;
  var messError = "";
  //Trước khi đưa giá trị vào mảng và render ra giao diện thì kiểm tra dữ liệu có hợp lệ hay không (validation)
  valid =
    kiemTraRong(sv.tenDangNhap, "tenDangNhap") &
    kiemTraRong(sv.matKhauDangNhap, "matKhauDangNhap");

  if (!valid) {
    // alert(messError);
    return;
  }
};
