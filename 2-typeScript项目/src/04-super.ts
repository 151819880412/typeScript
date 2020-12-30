(() => {

  // super 也叫超类/父类
  class Animal {
    name:string;
    constructor(name:string){
      this.name = name
    };
    say(){
      console.log('叫~')
    }
  }
  class Dog extends Animal{
    say(){
      // 在类的方法中 super 就表示当前类的父类
      super.say()
    };
    age:number;
    constructor(name:string,age:number){
      // 在子类中写了构造函数就会覆盖父类的 constructor (因为同名) 所以必须调用父类的构造函数
      super(name)
      this.age = age
    }
  }
  const dog = new Dog('旺财',3)
  dog.say()

})();