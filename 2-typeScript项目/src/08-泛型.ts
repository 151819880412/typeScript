(() => {

  // 定义函数或者类时，如果遇到类型不明确的就可以使用泛型
  function fn<T>(a: T): T {
    return a;
  }
  // 可以直接调用具有泛型的函数
  let result1 = fn(10);  //不指定泛型，TS可以自动对类型进行推断
  let result2 = fn<string>('10');  //指定泛型
  console.log(result1);
  console.log(result2);

  // 泛型可以同时指定多个
  function fn2<T, K>(a: T, b: K): T {
    return a;
  }
  fn2<number, string>(1, '1');

  interface Inter {
    length: number;
  }
  // T extends Inter 表示泛型T必须是 Inter 的实现类
  function fn3<T extends Inter>(a: T): number {
    return a.length;
  }
  fn3<string>('123');
  fn3({ length: 3 });

  class MyClass<T> {
    name:T;
    constructor(name:T){
      this.name = name
    }
  }
  const myc = new MyClass<string>('小明')

})()