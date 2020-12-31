"use strict";
(() => {
    // 以 abstract 开头的类是抽象类
    // 抽象类和其他类差别不大，只是不能用来创建对象(let animal = new Animal())
    // 抽象类就是专门用来被继承的类
    // 抽象类中可以添加抽象方法
    class Animal {
        constructor(name) {
            this.name = name;
        }
        ;
    }
    class Dog extends Animal {
        say() {
            console.log('抽象类的抽象方法');
        }
        ;
    }
    const dog = new Dog('旺财');
    dog.say();
})();
