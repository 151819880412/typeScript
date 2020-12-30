"use strict";
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        ;
        say() {
            console.log('叫~');
        }
    }
    class Dog extends Animal {
        say() {
            // 在类的方法中 super 就表示当前类的父类
            super.say();
        }
        ;
    }
    const dog = new Dog('旺财');
    dog.say();
})();
