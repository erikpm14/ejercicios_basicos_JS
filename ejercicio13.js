const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, nameToFind) {
    for (let i = 0; i < nameList.length; i++) {
      if (nameList[i] === nameToFind) {
        return { found: true, position: i };
      }
    }
    return { found: false, position: -1 };
  }
  
  console.log(nameFinder(names, 'Marc'));
  console.log(nameFinder(names, 'Bruce'));
  console.log(nameFinder(names, 'Erik')); 