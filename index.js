const _ = require('lodash')


const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
  ];
  const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
  ];


  //Task 1 
 console.log(_.findIndex(data1, { "age" : 23 })); 

 //Task 2 
  const concatedData = _.concat(data1, data2)
 console.log(concatedData)

//Task 3 
const a = {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
  }

  const b = _.omit(a, 'age')
  console.log(b);

  //Task 4 
const modifyObj = {}
for (let value of Object.entries(a)) {
    if(value[0] != 'age') {
        modifyObj[value[0]] = value[1]
    }
}

console.log(modifyObj);