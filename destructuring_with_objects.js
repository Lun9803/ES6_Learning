// 对象的解构赋值

// 1. 通过对象属性名字匹配值
var {a, b} = {a:'1', b:'2'};
console.log('\n1: ');
console.log(a, b);
// 和顺序无关
var {b, a} = {a:'3', b:'4'};
console.log(a, b);

// 2. 变量名与属性名不一致的情况，依旧要明确属性名才能找到相应的值
var person = {name: 'mike', age:'5'};
// 后者被赋值，前者相当于key
var {name: n, age: a} = person;
console.log('\n2.');
//console.log('name:', name, 'age：', age); // name & age not defined error
console.log('n:', n, 'a:', a);

// 3. 嵌套结构
var person = {
    name:{
        first:'mike',
        last:'zhang'
    },
    age:18
}

var {name: {first: f, last: l}, age: a} = person;
console.log('\n3.');
console.log(f, l, a);
//只获取person内的name对象
var {name:n} = person;
console.log(n);

// 4. 如果没有匹配的key，则值为undefined
var {a, b: bar} = {c:'1',d:'2'};
console.log('\n4.');
console.log(a, bar);

// 5. 大括号在行首时，会被理解成代码块，因此要用括号包含
var a;
// {a} = {a:5}; //错误
({a} = {a:'37'});
console.log('\n5.');
console.log(a);

// 6. 字符串也可以解构赋值，因为字符串会被转换成类似数组的对象
var [a] = 'hello';
console.log('\n6.');
console.log(a);

// 7. 因为各种变量都有自身属性，如toString, prop，所以也可以当作key
// 一下例子中存储到变量s的值是名为toString的function
var {toString: s} = 500;
console.log('\n7.');
console.log(s);

// 8. 函数参数的解构赋值-数组
function sample([a, [b, c]]){
    return a + b + c;
}

console.log('\n8.');
console.log(sample([1, [2, 3]]));
// 下例不匹配，显示undefined
console.log(sample[1, 3, 3]);

// 可以给参数设置默认值
function sample_2([a=3, [b=3, c=3]]){
    return a + b + c;
}
// 不完全解构时默认值才生效，否则报错
// 如：传入参数是[1, 3]则报错
console.log(sample_2([1, [3]]));

// 9. 函数参数解构赋值-对象
// 重点：以下两种方法结果不一样

// 第一个函数是为x和y指定默认值，如果结构失败就赋默认值
function showVar({x = 0, y = 0} = {}){
    console.log('showVar:', [x, y]);
}
// 这里是为参数{x, y}指定默认值
function showVar_2({x, y} = {x:0, y:0}){
    console.log('showVar_2:', [x, y]);
}
// 无参数的情况都会返回默认指定的
showVar();
showVar_2();
// 传入空对象的时候，第一个函数解构失败，x和y被指定默认值
// 第二个函数接受到了对象类型的参数，所以参数的默认值不会生效，接下来会解构失败，所以x和y是undefined
showVar({});
showVar_2({});
// 和上面类似，第一个函数内y的值解构失败，所以被赋予默认值
// 而第二个函数依旧不会触发参数默认值，x可以取到值而y是undefined
showVar({x:1});
showVar_2({x:1});

// 解构赋值的用途
// 1. 交换变量值， [x, y] = [y, x]
// 2. 函数返回对象，通过解构赋值直接获取多个值
// 3. 提取json
// 4. 参数定义
// 5. 函数参数默认值
// 6. 遍历map结构