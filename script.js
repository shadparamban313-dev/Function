// var number=prompt("enter")
 
//   function check(num){
//     if(num>0){
//         console.log("positive number");
        
//     }else if(num<0){
//         console.log("negetive number");
        
//     }else{
//         console.log("zero");
        
//     }
// }
// check(number)


// var discount=0
// var final=0
 
//   function check(num){
//     if(num<1000){
//         console.log("No Discount");
        
        
//     }else if(num>=1000&&num<=4999){
//         console.log("10% Discount");
//          discount=num*(10/100)
//          final=num-discount
         
         
        
//     }else if(num>=5000&&num<=9999){
//         console.log("20% Discount");
//          discount=num*(20/100)
//          final=num-discount
         
//     }else if(num>=10000){
//         console.log("30% Discount");
//         discount=num*(30/100)
//         final=num-discount
        
        
//     }
//     console.log("Original Price: "+num );
//     console.log("Discount: "+ discount);
//          console.log("final: "+ final);
    

    
// }
// check(6000)



// var current=10000
 
// function atm(num) {
//     if(num>1000){
//         console.log("Balance:"+num);
        
//     }else{
//         console.log("minimum balance required");
        
//     }
    
// }
// atm(10000)


// var depo=5000
// function deposit(numm){
//     console.log("Deposited Amount:" + numm); 
//     console.log("Current Balance: "+(current=current+numm));
    
// }
// deposit(5000)

// var wit=[3000,11500]
// function withdraw(wi){
//     if(wit>1000){
//     console.log("Withdraw Amount:" + wi); 
//     console.log("Current Balance: "+(current=current-wi[0]));
//     }if()
    
// }
// withdraw(wit)



// let balance = 10000;
// const MIN_BALANCE = 1000;

// // 1. Check Balance
// function checkBalance() {
//     console.log("Current Balance: ₹" + balance);
// }

// // 2. Deposit Money
// function depositMoney(amount) {
//     if (amount <= 0) {
//         console.log("Invalid amount! Deposit must be greater than zero.");
//     } else {
//         balance += amount;
//         console.log("₹" + amount + " deposited successfully.");
//         checkBalance();
//     }
// }

// // 3. Withdraw Money
// function withdrawMoney(amount) {
//     if (amount <= 0) {
//         console.log("Invalid amount! Withdrawal must be greater than zero.");
//     } else if (amount > balance) {
//         console.log("Insufficient balance!");
//     } else if (balance - amount < MIN_BALANCE) {
//         console.log("Transaction rejected! Minimum balance of ₹1000 must be maintained.");
//     } else {
//         balance -= amount;
//         console.log("₹" + amount + " withdrawn successfully.");
//         checkBalance();
//     }
// }

// // 4. Perform Transaction
// function performTransaction(type, amount) {
//     switch (type.toLowerCase()) {
//         case "deposit":
//             depositMoney(amount);
//             break;

//         case "withdraw":
//             withdrawMoney(amount);
//             break;

//         case "check":
//             checkBalance();
//             break;

//         default:
//             console.log("Invalid transaction type!");
//     }
// }

// // Example Transactions
// console.log("Initial Balance: ₹" + balance);

// performTransaction("deposit", 5000);
// performTransaction("withdraw", 3000);
// performTransaction("withdraw", 11500);
// performTransaction("check");




document.getElementById("form").addEventListener("submit",function(event){
   event.preventDefault()

   let name=document.getElementById("name").value
   let age=document.getElementById("age").value
   let email=document.getElementById("email").value
   let department=document.getElementById("depart").value

   document.getElementById("display").innerHTML =("Student Name: "+name)
   document.getElementById("displayn").innerHTML =("Student Age: "+age)
   document.getElementById("displaym").innerHTML =("Email: "+email)
   document.getElementById("displayc").innerHTML =("Department: "+department)

    function details(name,age,email,depart){
    if(name == ""){
           document.getElementById("display").innerHTML =("Student Name: error")
    }else
        {document.getElementById("display").innerHTML =("Student Name: "+name)
        document.getElementById("displayb").innerHTML =("Success")}

    if(age == ""){
        document.getElementById("displayn").innerHTML =("Student Age: error")
    }else{document.getElementById("displayn").innerHTML =("Student Age: "+age)
        document.getElementById("displayf").innerHTML =("Success")}

    
    if(email == ""){
        document.getElementById("displaym").innerHTML =("Email: error")
    }else{document.getElementById("displaym").innerHTML =("Email: "+email)
        document.getElementById("displayj").innerHTML =("Success")}

    if(department == ""){
        document.getElementById("displayc").innerHTML =("Department: error")
    }else{document.getElementById("displayc").innerHTML =("Department: "+department)
        document.getElementById("displayl").innerHTML =("Success")}

    }
    

details(name,age,email,depart)

   })
