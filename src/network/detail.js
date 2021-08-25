import {request} from "./request.js";
export function getUnil(iid) {
  // return的作用是返回request这个函数，只执行不返回是获取不到他的.then和.catach的
  return request({
    url:'/detail/',
    params: {
      iid
    }
  })
}

export function getRecommends() {
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newprice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountdesc
    this.columns = columns
    this.services = services
    this.realyPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info,rule) {
    // 为false时显示空字符串
    this.image = info.image ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}