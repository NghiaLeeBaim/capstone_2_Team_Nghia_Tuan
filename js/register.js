$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open')
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            // alert('Type text');
            $(this).prev().attr('type', 'text')
        }else{
            $(this).prev().attr('type', 'password')
        }
    });
});


document.querySelector('#form-login').onsubmit = function (event) {
    // event.target
    event.preventDefault(); //Chặn sự kiện reload lại trang
    //input: thông tin sinh viên object sinhVien
    var sv = new infoAccount();
    sv.firstName = document.querySelector('#firstName').value;
    sv.lastName = document.querySelector('#lastName').value;
    sv.email = document.querySelector('#email').value;
    sv.userName = document.querySelector('#userName').value;
    sv.password = document.querySelector('#password').value;
    sv.confirmPassword = document.querySelector('#confirmPassword').value;
    //output: sinhVien
    console.log(sv);

    var validd = true;
    var messError = '';
    //Trước khi đưa giá trị vào mảng và render ra giao diện thì kiểm tra dữ liệu có hợp lệ hay không (validation)
    validd = kiemTraRong(sv.firstName, 'firstName') & kiemTraRong(sv.lastName, 'lastName') & kiemTraRong(sv.email, 'email') & kiemTraRong(sv.userName, 'userName') & kiemTraRong(sv.password, 'pasword') & kiemTraRong(sv.confirmPassword, 'confirmPassword');

    if (!validd) {
        // alert(messError);
        return;
    }
}




