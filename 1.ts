let a: number = 10;

function sum(a: number, b: number): number {
  return a + b;
};
let result = sum(123, 123);

// 字面量(限制值或者值类型)
let b: 10 | 11 | string;
b = 10;
b = 11;
b = '111';

// any 相当于关闭的ts类型检测
let c: any;
c = '222';

// unknown 表示未知类型的值，相当于any，但是any类型给其他对应类型可以赋值，但是unknown不行(类型不一样)
let d: unknown;
d = '222';

b = c;
if (typeof d === "string") {
  b = d;
};

// 类型断言 (告诉编译器d就是string)
b = d as string;
b = <string>d;
let aa;

// void 设置函数返回值
function fn(): void {
  console.log(obj);
}
fn();

// never 永远不会返回结果(用于报错)
function fn2(): never {
  throw new Error("报错了");
}
// fn2();

// 指定对象属性，加上问号表示可选 [propName: string]: any 表示任意类型的属性
var obj: { name: string, age?: number; };
console.log(obj);
obj = { name: 'xiaoming', age: 19 };
let obj2: { name: string, [propName: string]: any; };
obj2 = { name: 'xiaoming', gender: 'nan' };

// 设置函数结构 (形参:类型,形参:类型...)=>返回值
let fn3: (a: number, b: number) => number;
fn3 = function (n1: number, n2: number): number {
  return n1 + n2;
};

// 数组
let arr1: string[];
let arr2: Array<number>;

// 元组:固定长度的数组 tuple
let arr3: [string, string];

// 枚举 enum
enum Type {
  a = 0,
  b = 1
}
let enum1: { name: string, type: Type; };
enum1 = {
  name: 'xiaoming',
  type: Type.a
};

// & 同时满足
let obj3 :{name:string}&{age:number}
obj3 = {name:'xiaoming',age:18}

// 类型的别名
let myType : 1|2|3|4|5|string
let k : 1|2|3|4|5
let l : 1|2|3|4|5
let m = myType