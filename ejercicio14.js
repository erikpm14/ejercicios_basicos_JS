const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    let counts = {};
    
    for (let word of list) {
      if (!counts[word]) {
        counts[word] = 1;
      } else {
        counts[word]++;
      }
    }
    
    return counts;
  }
  
  console.log(repeatCounter(words));