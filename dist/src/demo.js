let big = 100n;
import { hi } from './hello/hello';
console.log(hi);
// "removeComments"
// strictBindCallApply
var foo = {
    name: "mingming",
    logName: function () {
        console.log(this.name);
    }
};
var bar = {
    name: "xiaowang"
};
foo.logName.call(bar, 1); //xiaowang
// strictFunctionTypes
function getCurrentYear(callback) {
    callback(Math.random() > 0.5 ? '2020' : 2020);
}
getCurrentYear((date) => {
    console.log(date.charAt(0));
});
// strictPropertyInitialization
class StrictClass {
    // error,Property 'baz' has no initializer and is not definitely assigned in the constructor
    constructor() {
        this.bar = 'hello';
        this.foo = 42;
    }
}
alert(aasdasdas);
// noFallthroughCasesInSwitch
var d = new Date().getDay();
var x;
switch (d) {
    case 0:
        x = "今天是星期日";
        break;
    case 1:
        x = "今天是星期一";
        break;
    case 2:
        x = "今天是星期二";
        break;
    case 3:
        x = "今天是星期三";
        break;
    case 4:
        x = "今天是星期四";
        break;
    case 5:
        x = "今天是星期五";
        break;
    case 6:
        x = "今天是星期六";
        break;
}
