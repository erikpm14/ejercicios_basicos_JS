const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    let uniqueList = []; 

  for (let i = 0; i < list.length; i++) {
    let item = list[i]; 
    if (uniqueList.indexOf(item) === -1) {
      uniqueList.push(item); 
    }
  }
  
  return uniqueList; 
}

console.log(removeDuplicates(duplicates));