"use strict";

var obj = {
  data: {
    uuid: '289038e7-cea7-4a49-afd4-86ec766c3f7f',
    products: []
  },
  getData: function getData() {
    var vm = this; // 取得 productlist data path
    // https://course-ec-api.hexschool.io/api/${uuid}/admin/ec/products"

    var apiPath = 'https://course-ec-api.hexschool.io/';
    var url = "".concat(apiPath, "api/").concat(this.data.uuid, "/ec/products"); // this.data.uuid  ---> obj.data.uuid
    // console.log(this.data.uuid);

    axios.get(url).then(function (res) {
      vm.data.products = res.data.data; // 取得 productlist data

      vm.render(); // 取得資料後才進行繪製畫面
    });
  },
  render: function render() {
    var vm = this;
    var app = document.querySelector('#app');
    var product = vm.data.products; //這裡指的是 productlist data
    // console.log(product);

    var str = ''; // 建立一個空字串放 forEach 跑完的資料

    product.forEach(function (item) {
      str += "<div class=\"card\">\n            <img src=\"".concat(item.imageUrl[0], "\" class=\"card-img-top\"/>\n            <div class=\"card-body\">\n            <h5 class=\"\"card-title>").concat(item.title, "</h5>\n            <p class=\"card-text\">").concat(item.content, "</p>\n            </div>  \n            </div>");
    });
    app.innerHTML = str;
  }
};
obj.getData();
//# sourceMappingURL=all.js.map
