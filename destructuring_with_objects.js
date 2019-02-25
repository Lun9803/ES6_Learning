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

// to be continued...