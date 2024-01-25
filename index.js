console.log('N1________________');

let array1 = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

function positiveSum(arr){
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        if(arr[i]>0){
            sum += arr[i]
        }
    }
    return sum;
}
console.log(positiveSum(array1));

console.log('N2________________');

let array2 =[10, 50, 6, 7, 8, 11, 6, 3, 9];

function sumOfNumbers(arr){
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
            sum += arr[i]
        }
        return sum;
    }

    console.log(sumOfNumbers(array2));

console.log('N3________________');

let users = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
    }


function logIn(user){
    if(user.isloggedin == true){
        console.log(user.firstname, user.lastname);
    }
    else{
        console.log(false);
    }
}

logIn(users)

console.log('N4________________');

let array3 = [50,60,3,65,90,6,2,8,9,25,35,7,14,23,75,86]

function findLargestNum(arr){
    let highestNumber = 0;
    for(let i = 0; i < arr.length; i++){
        if(highestNumber < arr[i]){
            highestNumber = arr[i]
        }
    }
    return highestNumber;
}

console.log(findLargestNum(array3));

console.log('N5________________');

let numb1 = 75;

function EvenOrOdd(num){
    if(num % 2 == 0){
        return 'this number is even';
    }
    return 'this number is odd';
}

console.log(EvenOrOdd(numb1));

console.log('N6________________');

let array = [1,2,3,4,5];

function reverse(arr){
    let temporary = 0;
    for(let i = 0; i<arr.length / 2; i++){
        temporary =arr[arr.length-i-1];
        arr[arr.length-i-1]=arr[i];
        arr[i]= temporary;
    }
    return arr;
}
console.log(reverse(array));


console.log('N7________________');

let user2 = {
    firstname: 'Guram',
    lastname: 'Dochnashvili',
    age: 26,
    isloggedin: true
  }

  let ageFilter = (user) => {
    if(user.age > 18){
        return 'მომხმარებელი სრულწლოვანია'
    }
    else{
        return 'მომხმარებელი არასრულწლოვანია'
    }
  }

  console.log(ageFilter(user2));

console.log('N8________________');

let number1 = 78;
let number2 = 69;


function compareNums(num1, num2){
    if(num1 > num2){
        console.log('num1 is the largest');
    }
    else if(num2 > num1){
        console.log('num2 is the largest');
    }
    else{
        console.log('error');
    }
}
compareNums(number1, number2)
