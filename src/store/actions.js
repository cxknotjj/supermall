import {  
  mustionBack,
  minBack
} from "./mutations-type.js";
export default {
  addCart(context,payload) {
    // 1. resolve是成功时执行的内容（then），reject是失败时执行的内容（catch）
    return new Promise((resolve,reject) => {
          // 2.方法二使用find() 使用上下文引用state内容时要加上state
      let oldcart = context.state.cartList.find(item => {
        // 返回的是布尔值，但是oldcart还是一个对象
        return item.iid === payload.iid;
      })
      if (oldcart) {
        context.commit(mustionBack,oldcart);
        resolve('商品+1');
      }
      else {
        payload.count = 1;
        context.commit(minBack,payload);
        resolve('添加了新商品');
      }
    })
  }
}