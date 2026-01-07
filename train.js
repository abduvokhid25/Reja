
//task E

function getReverse (hello) {
    return hello.split('').reverse().join('');
    
}
console.log(getReverse("hello"));
/*Task D

function checkParamentr(mitgroup, gmtiprou) {

    for (let i = 0; i < mitgroup.length; i++) {
        let letter = mitgroup[i];
        let find = false;

        for (let j = 0; j < gmtiprou.length; j++) {
            if (letter === gmtiprou[j]) {
                find = true;
                break;
            }
        }

        if (find === false) {
            return false;
        }
    }

    return true;
}

console.log(checkParamentr("mitgroup", "gmtiprou")); */

/*class Shop {
    constructor (cola, non, lagmon) {
        this.cola = cola;
        this.non = non;
        this.lagmon = lagmon;
    }

    qoldiq(vaqt) { 
        console.log(`Hozir ${vaqt}da  dokonimizda ${this.cola} ta cola, ${this.non} ta non va
             ${this.lagmon} ta lagmon bor`);
    }
   
    sotish(sotilganNon) { 
        this.non  -= sotilganNon
    }
    qabul(qabulCola) {
       this.cola += qabulCola
    }
}

 const myShop = new Shop(2, 4, 5);
         myShop.qoldiq("20:40");

     myShop.sotish(3);  
     myShop.qabul(4);
     myShop.qoldiq("20:50"); */


/*// task-2

const choosingNumber = (word) => {
   let count = 0;
   for( const ele of word) {
    if(ele >=0 && ele<= 9) {
        count++
    }
    
   }
   console.log(count); 
}
choosingNumber("d2a54y79wet0sfgb9");*/
/*//Task-1

    let count = 0;
    const letter = "e";
    const word = "engineer";

for( const ele of word) {
    if (ele === letter){
        count++
    } 
}
console.log(count); */
/*console.log("Jack Ma maslahatlari");
const list = [
    "Yaxshi talaba boling", //0-20
    "To'g'ri boshliq tanlang va koproq xato qiling", //20-30
    "O'zingiz uchun ishlashni boshlang", //30-40
    "Siz kuchli bolgan narsalarni qiling", //40-50
    "Yoshlarga investitsiya qiling",//50-60
    "Boldi endi dam oling"//60+
];
//CALLBACK function
function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
     else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else  {
        setInterval(function () {
            callback(null, list[5]); 
        }, 1000);
   }
}

console.log("passed here 0");
maslahatBering(70, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log(data);
    }
});
console.log("passed here 1");*/

/*//asyncronus function
async function maslahatBering(a) {
    if (typeof a !== "number") throw new Error("insert a number");
     else if (a <= 20) return list[0];
    else if (a > 20 & a <= 30) return list[1];
    else if (a > 30 & a <= 40) return list[2];
    else if (a > 40 & a <= 50) return list[3];
    else if (a > 50 & a <= 60) return list[4];
    else  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
    }
} */
 
    //call via catch/then
/*console.log("passed here 0");
maslahatBering(36)
.then( data => {
    console.log("javob:", data);
})
.catch(err => {
  console.log("ERROR:", err);  
});
console.log("passed here 1");*/

//call via async/wait
/*async function run() {
   let javob = await maslahatBering(25);
   console.log(javob);
   javob = await maslahatBering(71);
   console.log(javob); 
   javob = await maslahatBering(45);
   console.log(javob);
}
run();*/

