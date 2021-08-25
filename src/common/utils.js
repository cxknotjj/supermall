// 函数默认值
export function delayed(fun,deplay=50) {
  let time = null;
  return function (...args) {
    if (time) clearTimeout(time);
    time = setTimeout(()=> {
      fun.apply(this,args);
    },deplay)
  }
}

// 时间戳转换
export function formatDate (data,fmt) {
  let date = new Date(data * 1000);
  if (/(y+)/.test(fmt)) {                            // 截取多少个字符
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length));
    // console.log(fmt);
  }
  let o = {
    // 月，在遍历属性时也会执行这么属性
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (let k in o) {      
    // 在date中查找k
    if (new RegExp(`(${k})`).test(fmt)) {
      // 隐式转换，将查找到的转化成字符
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : paddleft(str));
    }
    
  }
  return fmt
};

function paddleft(str) {
  return ('00' + str).substr(str.length);
}