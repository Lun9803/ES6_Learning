// 面试的时候要求写快速排序
// 然后问有没有别的想法，当时想到二分排序，太紧张了没把握，现在写一下

function sort(arr){
    if(arr.length<=1){
        return arr;
    }
    
    let mid = Number.parseInt(arr.length/2);
    let left = sort(arr.slice(0, mid));
    let right = sort(arr.slice(mid, arr.length));

    let leftIndex = 0;
    let rightIndex = 0;
    let sortedArr = [];

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            sortedArr.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            sortedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    if(leftIndex==left.length){
        // concat函数不会改变原先的数组
        // 所以我一开始写sortedArr.concat(...); return sortedArr;
        // 结果会是错的
        return sortedArr.concat(right.slice(rightIndex,right.length));
    }
    else{
        return sortedArr.concat(left.slice(leftIndex,left.length));
    }
}

console.log(sort([5,2,5,1,6,9,10,25,1,23,29,-3]));