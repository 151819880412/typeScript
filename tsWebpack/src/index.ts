import { nihao } from './m1';
function sum (a:number,b:number):number{
  return a+ b
}
console.log(sum(1,2))
console.log(nihao)

let obj1 = {name:'a',age:22}
obj1.age = 18
console.log(obj1)

// let promise = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res('成功了')
//   },1000)
// })
// console.log(promise)