const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let sum = 0;
  let count= 0;


  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'string') { 
        sum += list[i].length; 
        count++; 
      }
    }
    
    let avg = sum / count;
    
    return avg; 
  }
  
  console.log(averageWord(mixedElements));