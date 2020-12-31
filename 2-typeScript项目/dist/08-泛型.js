"use strict";
(() => {
    // 定义函数或者类时，如果遇到类型不明确的就可以使用泛型
    function fn(a) {
        return a;
    }
    // 可以直接调用具有泛型的函数
    let result1 = fn(10); //不指定泛型，TS可以自动对类型进行推断
    let result2 = fn('10'); //指定泛型
    console.log(result1);
    console.log(result2);
    // 泛型可以同时指定多个
    function fn2(a, b) {
        return a;
    }
    fn2(1, '1');
    // T extends Inter 表示泛型T必须是 Inter 的实现类
    function fn3(a) {
        return a.length;
    }
    fn3('123');
    fn3({ length: 3 });
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    const myc = new MyClass('小明');
})();
