


// // var obj1 = {name:"person 1", age:5};
// // var obj2 = {age:5, name:"person 2"}; 

// // var isEqualsJson = (obj1,obj2)=>{
// //   // keys1 = Object.keys(obj1);
// //   // keys2 = Object.keys(obj2);
// // }

// //   console.log("json is equals: "+ isEqualsJson(obj1,obj2));

// // var obj1 = {name:"person 1", age:5};
// // var obj2 = {age:5,name:"person 1"};
// // // console.log(obj1, obj2);
// // var isequals = (obj1,obj2)=>{
// //   keys1 = Object.keys(obj1);
// //   keys2 = Object.keys(obj2);
// //    }


// // console.log(isequals(obj1,obj2));

// // // const { name, age} = {age : 5, name : "person 1"};
// // const{ name, age} = {name : "person 1", age : 5};

// // console.log(name, age);



// question 1.
// Lodash isEqual() method is the best way to compare two JSON object.

// This will not consider the order of the keys in object and check for the equality of object. Example

const object1 = {
  name: 'person 1',
  age: '5'
};
    
const object2 = {
  age: '5',
  name: 'person 1'
};
    
JSON.stringify(object1) === JSON.stringify(object2)
// false
    
_.isEqual(object1, object2)
// true


// question 2 & 3
// fetch('https://restcountries.eu/rest/v2/all')
//   .then(res => res.json())
//   .then(data => initialize(data))
//   .catch(err => console.log('Error:', err.message));    {need to cross check}

// // A little destructuring...
// function initialize({
//   name,
//   population,
//   subregion,
//   region
// }) {
//   console.log({
//     name,
//     population,
//     subregion
//     region})
//   }
  //Print the following details name, capital, flag using forEach function.

  var request=new XMLHttpRequest();
  request.open('GET','https://restcountries.com/v3.1/all','true');
  request.send();
  request.onload=function (){
      var countryData=JSON.parse(this.response);
      countryData.forEach((element)=>{
          console.log(element.name,element.capital,element.region,element.subregion,element.population);
      })}