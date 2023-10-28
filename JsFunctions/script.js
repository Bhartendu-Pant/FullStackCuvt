const data = require("./food.json");
/***UNCOMMENT THE DESIRED FUNCTION TO SEE CONSOLE OUTPUT***/


// - [TASK 1]  list all the food items
//   *****First Approach*****


data.forEach((element) => {
    console.log("id: " + element.id);
    console.log("foodname: " + element.foodname);
    console.log("calorie: " + element.calorie);
    console.log("category: " + element.category);
    console.log("protiens: " + element.protiens);
    console.log("cab: " + element.cab);

    console.log("_____________");

});


// - [TASK 2]  list all the food items with category vegetables
//*****Second Approach*****


// const catVeg=data.filter((element)=>element.category==="Vegetable");
// console.table(catVeg);

// - [TASK 3]  list all the food items with category fruit
// const catfruit=data.filter((element)=>element.category==="Fruit");
// console.table(catfruit);


// - [TASK 4]  list all the food items with category protein

// data.filter((element)=>{
//     if(element.category === "Protein"){

// console.log("id: "+element.id);
//       console.log("foodname: "+element.foodname);
//       console.log("calorie: "+element.calorie);
//       console.log("category: "+element.category);
//       console.log("protiens: "+element.protiens);
//       console.log("cab: "+element.cab);

//       console.log("_____________");

//     }
// });


// - [TASK 5]  list all the food items with category nuts

// data.filter((element)=>{
//     if(element.category === "Nuts"){

// console.log("id: "+element.id);
//       console.log("foodname: "+element.foodname);
//       console.log("calorie: "+element.calorie);
//       console.log("category: "+element.category);
//       console.log("protiens: "+element.protiens);
//       console.log("cab: "+element.cab);

//       console.log("_____________");

//     }
// });

// - [TASK 6]  list all the food items with category grains

// data.filter((element)=>{
//     if(element.category === "Grain"){

// console.log("id: "+element.id);
//       console.log("foodname: "+element.foodname);
//       console.log("calorie: "+element.calorie);
//       console.log("category: "+element.category);
//       console.log("protiens: "+element.protiens);
//       console.log("cab: "+element.cab);

//       console.log("_____________");

//     }
// });

// - [TASK 7]  list all the food items with category dairy

// data.filter((element)=>{
//     if(element.category === "Dairy"){

// console.log("id: "+element.id);
//       console.log("foodname: "+element.foodname);
//       console.log("calorie: "+element.calorie);
//       console.log("category: "+element.category);
//       console.log("protiens: "+element.protiens);
//       console.log("cab: "+element.cab);

//       console.log("_____________");

//     }
// });

// - [TASK 8]  list all the food items with calorie above 100

// data.filter((element)=>{
//     if(element.calorie > 100){
//       console.log("id: "+element.id);
//       console.log("foodname: "+element.foodname);
//       console.log("calorie: "+element.calorie);
//       console.log("category: "+element.category);
//       console.log("protiens: "+element.protiens);
//       console.log("cab: "+element.cab);

//       console.log("_____________");
//     }
// });


// - [TASK 9]  list all the food items with calorie below 100


// const below100=data.filter((element)=>element.calorie < 100);
// console.table(below100);


// - [TASK 10]  list all the food items with highest protien content to lowest


// const decOrder=data.sort(function(a,b){
//     if(a.protiens < b.protiens)
//     return 1;
//     else
//     return -1;
// });
// console.table(decOrder);


// - [TASK 11]  list all the food items with lowest cab content to highest


// const incOrder=data.sort(function(a,b){
//     if(a.cab > b.cab)
//     return 1;
//     else
//     return -1;
// });
// console.table(incOrder);









