// ------------------ Hiệu ứng chữ -----------------

$(".txt").html(function (i, html) {
    var chars = $.trim(html).split("");
  
    return "<span>" + chars.join("</span><span>") + "</span>";
  });

  
// ------------------ Call API Product --------------------

(async function () {
    try {
      var res = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        ResponseType: JSON,
      });
  
      var mangGiay = res.data.content;
      var content = "";
      for (var index = 0; index < mangGiay.length; index++) {
        //Mỗi lần duyệt lấy ra 1 object giày
        var giay = mangGiay[index];
  
        content += `
                  <div class="col-4">
                      <div class="product">
                          <div class="product-img">
                              <a href="#"><img src="${giay.image}" alt="img"></a>
                          </div>
                          <h1 class="product-heading">
                              <a href="#">${giay.name}</a>
                          </h1>
                  
                          <div class="product-price">
                          &dollar;${giay.price} 
                          </div>
                          <div class="product-lower">
                              <div class="product-short-description">
                              ${giay.description}
                              </div>
                              <a href="/customer/view/detail.html?productid=${giay.id}" class="product-atc">Add to Cart</a>
                          </div>
                      </div>
                  </div>
                `;
      }
      document.querySelector("#danh-sach-giay").innerHTML = content;
  
      console.log("gọi thành công");
    } catch (err) {
      console.log(err);
    }
  })(); //IIFE function
  

  