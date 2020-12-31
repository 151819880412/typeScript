"use strict";
(() => {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        ;
        /**
         * getter 用来读取属性
         * setter 用来设置属性
         *        他们被称为属性的存取器
         *
         */
        // 因为私有属性外部访问不了，所以要定义一个方法，用于外部获取内部私有属性
        // getName() {
        //   return this._name;
        // }
        // // 定义方法，用来设置name属性
        // setName(value: string) {
        //   this._name = value;
        // }
        // // 定义方法，用来设置age属性
        // getAge() {
        //   return this._age;
        // }
        // // 定义方法，用来设置age属性
        // setAge(value: number) {
        //   if (value >= 0) {
        //     this._age = value;
        //   }
        // }
        // 在TS中设置 getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('小明', 18);
    console.log(per);
    /**
     * 现在属性是直接在对象中设置的，属性可以任意被修改
     *    属性可以被任意修改将会导致对象中的数据变得非常不安全
     */
    /*
    * 在JS中
    */
    // per.setName('小红');
    // per.setAge(-88);
    // console.log(per.getName());
    // console.log(per.getAge());
    /**
     * 在TS中
     */
    per.name = 'xiaoming';
    console.log(per.name); //执行的 get name()方法
    per.age = -30;
    console.log(per.age);
    /**
     * protected
     */
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(18);
    // b.num = 33  //属性“num”受保护，只能在类“A”及其子类中访问
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age, height) {
            this.name = name;
            this.age = age;
            this.height = height;
        }
    }
    const c = new C('小明', 18, 180);
    console.log(c);
})();
