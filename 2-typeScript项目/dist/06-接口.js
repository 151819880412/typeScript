"use strict";
(() => {
    const obj = {
        name: 'xiaoming',
        age: 18
    };
    const obj2 = {
        name: '小明',
        age: 18,
        gender: '男'
    };
    // 定义类时，可以使类去实现一个接口
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log('类实现接口');
        }
        ;
    }
})();
