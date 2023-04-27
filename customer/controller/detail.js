// ------------------ Call API Product --------------------

// ------------------ Call API Detail --------------------

window.onload = function(){
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('productid');
  console.log('params',myParam)
}

function renderDetail(myParam) {
  try {
    var res = axios({
      url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
      method: "GET",
      ResponseType: JSON,
    });

    var mangGiay = res.data.content;
    var content = "";

    content += `
      <div class="container">
              <div class="head-product">
                  <div class="product-Img"><img src="${mangGiay.image}" alt="..."></div>
  
                  <div class="product-Content">
                      <h1 class="title">${mangGiay.name}</h1>
                      <span class="price">$ ${mangGiay.price}</span>
                      <div class="star-ratings-css">
                          <div class="star-ratings-css-top">
                              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                          </div>
                          <div class="star-ratings-css-bottom">
                              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                          </div>
                      </div>
                      <p class="description"><a href="#description">${mangGiay.shortDescription}</a></p>
                      <ul class="sub-details">
                          <li><i class="fa fa-shield"></i> Secured Payment</li>
                          <li><i class="fa fa-truck"></i> Delivered in 2-5 working days</li>
                      </ul>
  
                      <ul class="size">
                          <li><button class="size"> 36
                              </button>
                          </li>
                          <li><button class="size"> 37
                              </button>
                          </li>
                          <li><button class="size"> 38
                              </button>
                          </li>
                          <li><button class="size"> 39
                              </button>
                          </li>
                          <li><button class="size"> 40
                              </button>
                          </li>
                          <li><button class="size"> 41
                              </button>
                          </li>
                          <li><button class="size"> 42
                              </button>
                          </li>
                      </ul>
  
  
                      <table>
                          <tr>
                              <td><button class="btn2">ADD TO CART</button></td>
                              <td><button class="btn3">BUY NOW</button></td>
                          </tr>
                      </table>
                  </div>
              </div>
  
              <div class="body-product">
                  <h1 id="description"></h1>
                  <span>${mangGiay.description}</span>
              </div>
  
              <div id="User_reviews" class="review_container ">
                  <div class="user_star_ratings">
                      <div class="rating">
                          <section class="overall_rating">
                              <span class="sub-title" style="font-weight: 700;">OVERALL RATING</span>
                              <span class="title" style="font-weight: 700;">4.0</span>
                              <p>(123 Reviews)</p>
                          </section>
                          <section class="rating_blocks">
                              <span class="sub-title">BASED ON 123 REVIEWS</span>
                              <ul>
                                  <li>
                                      5 Star
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      23
                                  </li>
                                  <li>
                                      4 Star
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      40
                                  </li>
                                  <li>
                                      3 Star
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      35
                                  </li>
                                  <li>
                                      2 Star
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      10
                                  </li>
                                  <li>
                                      1 Star
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      <span class="fa fa-star checked"></span>
                                      15
                                  </li>
                              </ul>
                          </section>
                      </div>
                      <section class="reviews_recorded">
                          <ul>
                              <li>
                                  <img src="https://source.unsplash.com/50x50/?person" alt="User"> <b>Albert</b>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt
                                      ut labore et dolore magna aliqua.</p>
                              </li>
                              <li>
                                  <img src="https://source.unsplash.com/50x50/?person" alt="User"> <b>Albert</b>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <span class="fa fa-star checked"></span>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt
                                      ut labore et dolore magna aliqua.</p>
                              </li>
                          </ul>
                          <center><button class="btn1" style="width:150px; height: 40px;">Load More...</button></center>
                      </section>
                  </div>
                  <div class="enter_user_star_ratings">
                      <h1 class="title">ADD YOUR REVIEW</h1>
                      <div class="rating-box">
                          <div class="rating-container">
                              <input type="radio" name="rating" value="5" id="star-5"> <label for="star-5">&#9733;</label>
  
                              <input type="radio" name="rating" value="4" id="star-4"> <label for="star-4">&#9733;</label>
  
                              <input type="radio" name="rating" value="3" id="star-3"> <label for="star-3">&#9733;</label>
  
                              <input type="radio" name="rating" value="2" id="star-2"> <label for="star-2">&#9733;</label>
  
                              <input type="radio" name="rating" value="1" id="star-1"> <label for="star-1">&#9733;</label>
                          </div>
                      </div>
                      <textarea placeholder="Write a review" name="userreview" required></textarea>
                      <button class="btn2" style="width: 90%; background-color:  #384aeb; color: white; height: 40px; border: none; border-radius: 70px;">SUBMIT</button>
                  </div>
              </div>
  
          </div>
      `;

    document.querySelector("#product_Info").innerHTML = content;

    console.log("gọi thành công");
  } catch (err) {
    console.log(err);
  }
}
