"use strict";
// ts 会检查不同文件中的变量名重复
(() => {
    // 顶一个公用的类 Animal
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
        say() {
            console.log('动物再叫');
        }
    }
    // 定义一个狗的类
    class Dog {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
        say() {
            console.log("汪汪汪");
        }
    }
    let dog = new Dog('旺财', 4);
    console.log(dog);
    dog.say();
    // 定义一个猫的类 继承 Animal
    // Animal 被称为父类，cat被称为子类
    // 使用继承之后子类会拥有父类所有的方法和属性，子类也可以直接加属性或者方法，子类的方法或属性和父类相同时会覆盖父类
    class Cat extends Animal {
        run() {
            console.log(this.name);
        }
        ;
        say() {
            console.log('喵喵喵');
        }
    }
    let cat = new Cat('(>^ω^<)喵', 5);
    console.log(cat);
    cat.say();
    cat.run();
})();
