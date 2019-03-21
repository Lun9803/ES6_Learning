/**
 * @param {string} digits
 * @return {string[]}
 */

// 给定一串数字，输出一个字符串列表，包括所有可能的字符组合（9键打字）

var letterCombinations = function(digits) {
    let output = [];
    let i = 0;
    while(i<digits.length){
        let newArr = [];
        let input = digits.charAt(i);
        let toBeAdded = [];
        switch (input){
            case '2':
                toBeAdded = ['a', 'b', 'c'];
                break;
            case '3':
                toBeAdded = ['d', 'e', 'f'];
                break;
            case '4':
                toBeAdded = ['g', 'h', 'i'];
                break;
            case '5':
                toBeAdded = ['j', 'k', 'l'];
                break;
            case '6':
                toBeAdded = ['m', 'n', 'o'];
                break;
            case '7':
                toBeAdded = ['p', 'q', 'r', 's'];
                break;
            case '8':
                toBeAdded = ['t', 'u', 'v'];
                break;
            case '9':
                toBeAdded = ['w', 'x', 'y', 'z'];
                break;
        }
        if(i==0){
            output=toBeAdded;
            i++;
            continue;
        }
                        
        for(let j=0; j<output.length; j++){
            for(let z=0; z<toBeAdded.length; z++){
                newArr.push(output[j]+toBeAdded[z]);
            }
        }
        output=newArr;
        i++;
    }
    return output;
};

console.log(letterCombinations('458'));