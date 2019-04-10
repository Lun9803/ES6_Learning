// 不使用乘除和mod 实现除法
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend==0 || divisor==0)return 0;

    let sign = 1;
    if(dividend<0){
        dividend*=-1;
        sign*=-1;
    }
    if(divisor<0){
        divisor*=-1;
        sign*=-1;
    }
    let count = 0;
    while(dividend>=divisor){
        dividend-=divisor;
        count++;
    }
    return count*sign;
};

console.log(divide(10,3));

console.log(divide(10,-3));
console.log(divide(-12,-3));
console.log(divide(-12,-3));