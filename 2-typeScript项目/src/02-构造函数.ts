class Dog {
  // name:string = "旺财";
  // age:number = 3;


  name: string;
  age: number;
  // 构造器会在对象创建时调用 相当于 new Dog();
  constructor(name: string, age: number) {
    // 在构造器中 this 指向调用的这个类的实例
    // 可以通过 this.xx 向实例添加属性
    this.name = name;
    this.age = age;

  };
  bark(): void {
    console.log("汪汪汪");
  };
}
const dog = new Dog('小黑', 18);
console.log(dog);