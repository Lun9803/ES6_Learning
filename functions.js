// 整理一下ES6的函数新增特性

// 1. 可以像其他语言一样在函数参数括号内设置默认值
// 使用默认值的时候函数不能有重复的相同参数
function func(x=0, y=1){
    // 设定了默认值以后x和y是默认声明的，无法用let或const再声明
    console.log(x);
    console.log(y);
}
func();

// 需要设定默认值的参数一般在参数列尾部，不然就相当于这个参数是不可省略的

// 函数的length返回的是从第一个参数开始到碰到第一个由默认值的参数前的长度
console.log ("function(x=5, y, z){}.length");
console.log(function(x=5, y, z){}.length);
console.log ("function(x, y=5, z){}.length");
console.log(function(x, y=5, z){}.length);
console.log ("function(x, y, z=5){}.length");
console.log(function(x, y, z=5){}.length);

// 2. 指定某参数不可省略
function errorHandler(){
    throw new Error("missing compulsory parameter!");
}

function errorSample(x=errorHandler()){
    console.log(x);
};
console.log("error throw sample")
errorSample(1);
// errorSample(); // throw error

// 3. 指定某参数可以省略就是把默认值设定为undefined

// 4. rest参数, 只能放在参数最后一位，是一个数组
function restSample(x, y, ...array){
    console.log("x is " + x);
    console.log("y is " + y);
    let str = "";
    array.forEach(item => str+=item+" ");
    console.log("the array is " + str);
}

console.log("rest 函数例子");
restSample(1,2,3,4,5,6);
restSample(1,2,3);
restSample(1,2);

// 5. 箭头函数
// 箭头函数的this总是指向函数定义生效时所在的对象
