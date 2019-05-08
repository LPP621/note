(function () {
   let result = [1,2,3,4].map((item, index) => {
        return item +10;
    });
    console.log(result);       // 如果只定义而不调用函数，则工具会认为此函数没有任何意义，所以在压缩或者合并的时候会自动去掉此函数
})();
