//

//Example number 1
//Test input size to see how much slower it will go.
//How performant a function will be.
//Big O Notation: "O(1)" contant runtime
function log(array){
    console.log(array[0]);
    console.log(array[1])
}
log([1,2,3,4]);
log([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
log([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);

//Example number 2
//Linear runtime
//Big O Notation "O(n)"

function logAll(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}

logAll([1,2,3,4]);
logAll([1,2,3,4,5,7]);
logAll([1,2,3,4,5,6,7,8,9,10]);


//Example number 3
//Exponential runtime
//O(n2)

function addAndLog(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            console.log(array[i] + array[j])
        }
    }
}
addAndLog(['A','B','C']);
addAndLog(['A','B','C','D']);
addAndLog(['A','B','C','D','E']);

//Logarithmic runtime
//Big O Notation: O(log n)



// O(1)

function logAll(numbers){
    console.log(numbers[0]);
    console.log(numbers[1])
}

logAll([1,2,3,4,5,6]);
logAll([1,2,3,4,5,6,7,8]);



//O(n)

function logAllLinear(numbers){
    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i])
    }
}
logAllLinear([1,2,3,4,5]);
logAllLinear([1,2,3,4,5]);
logAllLinear([1,2,3,4,5]);



//0(n2)
function logAllExponential(numbers){
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<numbers.length;j++){
            console.log(numbers[i] + numbers[j])
        }
    }
}

logAllExponential(['A','B','C']);
logAllExponential(['A','B','C','D','E']);
logAllExponential(['A','B','C','D','E','D','F']);



//binary sEarch
//Optimal

//O(log n)
function binarySearch(array,key){
    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;
    while(low<=high){
        mid = Math.floor((low + high) /2,10);
        element = array[mid];
        if(element<key){
            low = mid + 1
        } else if(element>key){
            high = mid - 1
        } else {
            return mid;
        }
    }
    return -1
}

binarySearch(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],'X');

