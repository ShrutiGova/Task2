console.log("hello");
let json =`{
              "data": [
       {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        }
    ]
}`
 var obj = JSON.parse(json);
 console.log(obj); 
 document.getElementById("name1").innerHTML = "Name : "+  obj.data[0].productList[0].name;
 document.getElementById("price1").innerHTML = "Price : "+  obj.data[0].productList[0].price;

 document.getElementById("name2").innerHTML = "Name : "+  obj.data[0].productList[1].name;
 document.getElementById("price2").innerHTML = "Price : "+  obj.data[0].productList[1].price;

 document.getElementById("name3").innerHTML = "Name : "+  obj.data[1].productList[0].name;
 document.getElementById("price3").innerHTML = "Price : "+  obj.data[1].productList[0].price;

 document.getElementById("name4").innerHTML = "Name : "+  obj.data[1].productList[1].name;
 document.getElementById("price4").innerHTML = "Price : "+  obj.data[1].productList[1].price;

 let addBtn = document.getElementsByClassName("btn");
   
          
 function saveCart(){
     localStorage.setItem(obj,JSON.stringify(obj));
     
 }
  
