module.export = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,   //视图宽度
      viewportHeight:667,   //视图高度
      unitPrecision: 5,     //小数位数
      viewportUnit: 'vw',   //要转化为的单位
      selectorBlackList: ['ignore'],//不需要转化的内容。 
      minPixelValue: 1,     //小于等于1px不转换
      mediaQuery:false,     //
      exclude:['/tabbar/'], //过滤的文件
    }
  }
}