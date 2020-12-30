// 使用 class 关键字来定义一个类
/**
 *  对象中主要包含了两个部分：
 *    1.属性
 *    2.方法
 * 
 */
class Person {
  /**
   * 直接定义的属性是实例属性，需要通过对象的实例去访问
   *      const per = new Person();
   *      console.log(per)
   * 使用 static 开头的属性是静态属性(类属性/方法)，可以直接通过类去访问
   *      static age: number = 18;
   *      static sayHello(){alert(1)};
   *      console.log(Person.age)
   *      Person.sayHello
   * 使用 readonly 开头的属性表示一个只读的属性，无法修改
   * 
   */

  // 定义实例属性
  name: string = 'xiaoming';

  // 类属性/静态属性
  static age: number = 18;

  // 使用 readonly 开头的属性表示一个只读的属性，无法修改
  readonly ID: number = 123;

  // 类的静态属性，只能读
  static readonly ID: number = 123;

  // 定义方法
  sayHello() {
    console.log('实例+hello');
  }
  static sayHello() {
    console.log('类+hello');
  }

}
const per = new Person();
console.log(per);
per.name = 'xiaowang';
console.log(per.name);

// 类属性/静态属性
console.log(Person.age);;

// 使用 readonly 开头的属性表示一个只读的属性，无法修改
// per.ID = 222