
// 也是面试的一道考闭包的题，因为太紧张+基础不扎实，写了好久才写出来
// 完成一个函数sum，实现sum(1,2,3,4)(5,6).value()=21
// 注意后面几个括号不确定，需要写一个都可行的函数

function sum(...numbers){
    let total = 0;

    for(let i=0; i<numbers.length; i++){
        total+=numbers[i];
    }

    function sumClosure(...nums){
        for(let i=0; i<nums.length; i++){
            total+=nums[i];
        }
        return sumClosure;
    }

    sumClosure.value = function(){
        return total;
    }

    return sumClosure;
}

console.log('sum(1,2,3,4)(5,7).value()');
console.log(sum(1,2,3,4)(5,7).value());
console.log('sum().value()');
console.log(sum().value());
console.log('sum(5,5,5,5)(-1,-2,-3,-4)(1,2,3,4).value()');
console.log(sum(5,5,5,5)(-1,-2,-3,-4)(1,2,3,4).value());