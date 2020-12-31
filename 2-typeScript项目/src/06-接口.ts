(() => {

  // 描述一个对象的类型 重复声明会报错
  type myType = {
    name: string;
    age: number;
  };
  const obj: myType = {
    name: 'xiaoming',
    age: 18
  };

  /**
   * 接口就是用来定义一个类结构
   * 可以重复声明，属性累加
   */
  interface myInterface {
    name: string;
    age: number;
  }
  interface myInterface {
    gender: string;
  }
  const obj2: myInterface = {
    name: '小明',
    age: 18,
    gender: '男'
  };

  /**
   * 接口可以再定义类的时候去限制类的结构
   *    接口中所有的属性都不能有实际值
   *    接口只定义对象的结构，而不考虑实际值(类似抽象类,但是在抽象类中可以使用抽象方法也可以使用普通方法，接口中只能使用抽象方法)
   *    接口中所有的方法都是抽象方法
   */
  interface myInter {
    name: string,
    say(): void;
  }
  // 定义类时，可以使类去实现一个接口
  class MyClass implements myInter {
    name: string;
    say() {
      console.log('类实现接口');
    };
    constructor(name: string) {
      this.name = name;
    }
  }

})()