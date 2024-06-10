const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sum= 0;

    for (let i = 0; i < numberList.length; i++) {
        sum = sum + numberList[i];
      }
      
      let average = sum / numberList.length;
      
      return average;
    }
    

    console.log(average(numbers));