const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
    </div>
  `;
  }
}

class GoodsList {
  list = [];
  fetchGoods() {
    this.list = goods;
  }

  calculate() {
    return goods.reduce((previousValue, item) => {
      return previousValue + item.price;
    }, 0)
  }


  render() {
    let goodsList = this.list.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render()
    }).join("");
    document.querySelector(".goods-list").innerHTML = goodsList;
  }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();