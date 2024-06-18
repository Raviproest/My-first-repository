// let trimaxPrice=60;
// let eraserPrice=10;
// console.log("Your Total Price is :" , trimaxPrice + eraserPrice,"Rupees");
// let myAge=19;
// console.log(myAge==19)
// let o=0;
// console.log(o==1-1)
// if (myAge>=18)
// {console.log("Yes, you can drive")
// }
// //Traffic light System
// let color='green';
// if (color==='red'){
//     console.log("STOP! , light color is red")
// }
// if (color==='yellow'){
//     console.log("SLOW DOWN! , light color is yellow")
// }
// if (color==='green'){
//     console.log('CONTINUE YOUR JOURNEY! ,light color is green')
// }

// //shop system
// let size = "";
// let s=50;
// let m=100;
// let l=200;
// let el=250;
// if (size == 's'){
//     console.log(`Your Price is ${s} rupees`)
// }
// else if (size == 'm'){
//     console.log(`Your Price is ${m} rupees`)
// }
// else if (size == 'l'){
//     console.log(`Your Price is ${l} rupees`)
// }
// else if (size == 'el'){
//     console.log(`Your Price is ${el} rupees`)
// }
// let marks=100;
// if (marks >= 40){
//     console.log("You are Passed")
//     if (marks == 100){
//         console.log("Your Grade is : A+","You are all rounder")
        
//     }
//     else if (marks>=93){
//           console.log("Your Grade is : O ")       
//     }
//     else if (marks >= 80){
//         console.log("Your Grade is : A")
//     }
//     else if (marks >= 60){
//         console.log("Your Grade is B")
//     }
    
//     else{
//         console.log("Your Grade is : C")
//     }
// }
// else{
//     console.log("You are Fail , Your Grade is F")
    
// }


// let a= 10;
// let b = 20;
// let c=25;
// console.log (a<b && b>c)


// let color="green"

// switch (color){
//     case "yellow":
//         console.log("Slow Down! the color is yellow")
//         break;
//     case "red":
//         console.log('Stop! the color is red')
//         break;
//     case "green":
//         console.log('Go! color is green')
//         break;
//     default:
//         console.log('The light is broken!')
//}




//           this program do not work because switch case is not made for conditional statements
// let a=10;
// let b=10;
 
// switch (a){
//     case a>b :
//         console.log("a is greater than b")
//         break
//     case b>a :
//         console.log ("b is greater than a")
//         break
//     case a===b :
//         console.log("a is equal to b")
//         break
//     default:
//         console.log("the type of a and b is different")
// }   

    // it is a practice question

// let day=2;
//   switch (day){
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Please Enter a number between 0 to 8,then only you will get your required value.");


 // }

//   alert("You are Hacked")// it is a alert
//   console.error("You are Chutiya") //it is used for executing an error to the user 



                // THIS IS YOUR CALCULATOR
  
// let firstNum= Number(prompt("Enter Your First Number :"));
// let operator= prompt("Enter your Operator");
// let secondNum= Number(prompt("Enter Your Second Number :"));

// console.log(`Your firstNum was ${firstNum}`)
// console.log(`Your operator was ${operator}`)
// console.log(`Your secondNum was ${secondNum}`)



   
// if (operator=='+'){
//     console.log(`Your result is ${firstNum + secondNum}`);
// }
// else if (operator=='-'){
//     console.log(`Your result is ${firstNum - secondNum}`)
// }
// else if (operator=='*'){
//     console.log (`Your result is ${firstNum * secondNum}`)
// }
// else if (operator=='/'){
//     console.log(`Your result is ${firstNum / secondNum}`)
// }
// else if (operator=='%'){
//     console.log (`Your result is ${firstNum % secondNum}`)
// }
// else if(operator=='**'){
//     console.log (`Your result is ${firstNum ** secondNum}`)
// }
// else{
//     console.error("In operator please give your operator for example: '+','-','*','/','%' and '**' \
//     and please give one at a time ")
// }

// let nam="          Ravi Kumar           ";
// // console.log(nam.length)
// let newnam=nam.trim().toLowerCase().toUpperCase();

// console.log(newnam);
// console.log(newnam.indexOf("KUMAR"));
// let str= "My Name is Ravi";
// console.log(str.length)
// console.log(str.slice(-16,-6),"Braj");
// console.log(str.slice(0,15))
// New="I love Coding and Playing Games";
// let knew = New.replace("Playing Games","Gaming");
// console.log(knew)


 
// let mahamantra="Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Ram Hare Ram Ram Ram Hare Hare ";
// console.log(mahamantra.repeat(1));


// let cars=['BMW','Supra','Bukati','Maruti','Grand Vitara'];
// console.log(cars.splice(1,0,"Bullet","Tesla")); 
// x    
    //                          This is forward loop
// let o=1;
// let rounds = [`This is my ${o} Round of Japa`,++o,`This is my ${o} Round of Japa`,++o,`This is my ${o} Round of Japa`,++o,`This is my ${o} Round of Japa`,++o,`This is my ${o} Round of Japa`,++o,`This is my ${o} Round of Japa`,++o,  ];

// console.log(rounds[0])

// for (let i=1;i<=108;i++){
//     console.log(i,"Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Hare Hare Ram Hare Ram Ram Ram Hare Hare ")
// }
                   // This is backward loop
// let p=100;
//   for(p;p>=1;p=p-2){
//     console.log(p);
//   }
//   console.log(p)


// for (let y=1; y<=15; y=y+2){
//     console.log(y)

// }
// console.log("Backward loop")

   //Table loop
// let user = prompt("Enter Your Table Number");
// user  =  parseInt(user);

// for (let j=user; j<=user*10; j=j+user ){
//          console.log(j);
//         }


// if (false){
//     console.log("The if statement is true");
// }
// else {
//     console.log("The if statement is false")
// }


    //Average
    // console.log(alert("Please give your numbers for finding their Average,and you can only give 5 numbers"))
    // let a= prompt("Enter your first number :");
    // let b= prompt("Enter your second number :");
    // let c= prompt("Enter your third number :");
   
    // let d= prompt("Enter your fourth number :");
   
    // let e= prompt("Enter your fifth number :");
   

    // console.log(`Your Average for ${a}, ${b}, ${c}, ${d}, ${e}  is :${(a+b+c+d+e)/5}`);



// let i= 1;

// while (i<=10){
//     console.log(i);
//     i++;
// }


               //Guess Movie
// let favoriteMovie = "Endgame" ;
// let favo = "Avengers Endgame"
// let user = prompt("Guess our Favorite Movie")

// while ((user!=favoriteMovie)&&(user !=favo) ) {
//     if (user=="Quit"){
//         break;
//     }
//     console.log("Not correct");
//     user = prompt("Please try again!");
       
   
// }
// if ((user == favoriteMovie) || (user == favo)){
//     console.log("You are correct!");
// }
// else {
//     console.log("You Quit");
// }



       //This is my Ultimate Average Code


// let user =prompt("How many numbers you want to enter for getting their average?");
// let up=1;
// let nums=[];
// avrg=0;

// for (let i=user;i>=1;i--){
//     mum= prompt(`Enter Your ${up} number`);
//     mum=parseInt(mum);
//     nums.unshift(mum);
//     up++;
// }
// for (let i=0;i<nums.length;i++){
//     avrg+=nums[i];
// }
// if ((user == "Quit") || (user == "quit")){
//     console.log("You Quit");
// }
// else{
//     console.log("Your Average is :",avrg/user);
// }



// let fruits = ["Lichi","Apple","Mango","Pineapple","Guava","Grapes","Banana"];
// let i = 1;
// for (fruit of fruits){
//     console.log(i,fruit);
//     i++;
// }





// let myName = "Ravi Kumar";
// let i = 1;
// for (characters of myName){
//     console.log(i,characters);
// }

                      

                             //TODO App
// let tasks = [];



// while (true){
//     let user = prompt("What you want to do from the given options .");
//     if ((user == "List") ||(user == "list")){
//         let i= 1 ;
//         for (task of tasks){
            
//             console.log(i,task);
//             i++;
//         }
//     }
//     else if ((user == "Add")||(user == "add")){
//         let req = prompt("Add here.");
//         req[0].toUpperCase();
//         tasks.push(req);
//     }
//     else if ((user == "Quit")||(user == "quit")){
//         break;
//     }
//     else if ((user == "Delete") || (user == "delete")){
//         let delReq = prompt("Enter the Task to delete it.");
//         tasks.splice(tasks.indexOf(delReq),1);
//     }
//    else {console.log("choose only the given options");

//}

// if ((user == "Add")||(user == "add")){
//     let add = prompt("Add your Task here.");
//     tasks.unshift(add);

// }
// else if ((user == "List")||(user == "list")){
//     console.log(tasks);
// }
// elzzz

            //This is my Ultimate Table loop
// let user = prompt("Till Which number You want to get the tables");
// user = parseInt(user);
// for (let i = user , j= 1; j<=i ; j++){
//     console.log(`This is Table ${j}`);

//     for (let k=j , u = 1 , l = j; k<=l*10; k=k+j,u++){
//         console.log(`${j} X ${u} = ${k}`);
//         }
// }
       



          //It is a number Guessing game.
// let num = prompt("Enter a number till where you want a number to be generated: ");
// num = parseInt(num);
// let ranNum = Math.floor(Math.random()*num+1);
// let user = undefined;
// if (ranNum%2 == 0){
//     console.log("Hint! It is an Even Number.");
// }
// else{
//     console.log("Hint! It is an Odd Number.");
// }
// if (ranNum<100){
//     console.log("The number is smaller than 100");
//     if (ranNum>75){
//         console.log("It is greater Than 75");
//     }
//     else if ((ranNum<75)&&(ranNum>50)){
//         console.log("It is less than 75 and more than 50");
//     }
//     else if ((ranNum<50)&&(ranNum>25)){
//         console.log("It is less than 50 and more than 25");
//     }
//     else if (ranNum>25){
//         console.log("The number is smaller than 25");
//     }
//     else {
//         console.log("The number is maybe 25 , 50 , 75 or 100");
//     }
// }

// while(user != ranNum){
//     user = prompt("Guess the generated Number,Enter Quit to quit the game.");
//     if ((user == "Quit")||(user == "quit")){
//         break;
//     }

// }
// if (user == ranNum){
//     console.log("Congratulations! You Guessed correct.");
//     console.log(`The Generated Number was: ${ranNum}`);
// }
// else{
//     console.log("You Quit!");
// }







                      //It is a number Guessing game.
    let num = prompt("Enter a number till where you want a number to be generated: ");
    num = parseInt(num);
    let ranNum = Math.floor(Math.random()*num+1);
    let user = undefined;
    if (ranNum%2 == 0){
        console.log("Hint! It is an Even Number.");
    }
    else{
        console.log("Hint! It is an Odd Number.")
    }
    while(user != ranNum){
        user = prompt("Guess the generated Number,Enter Quit to quit the game.");
        if ((user == "Quit")||(user == "quit")){
            break;
        }
    
    }
    if (user == ranNum){
        console.log("Congratulations! You Guessed correct.");
        console.log(`The Generated Number was: ${ranNum}`);
    }
    else{
        console.log("You Quit!");
    }








        








 
