//1
function CeckNumber(number){
    if(number%2==0){
        console.log("بخش پذیر");
        
    }else {
        console.log("بخش پذیر نیست");
    }
}
CeckNumber(100)
CeckNumber(3)

//2
function CeckName(name){
    if(name<10){
        console.log("کودک")
    }else if(name>10 && name<20){
        console.log("نوجوان")
    }else if(name>20){
        console.log("جوان");
    }
}
CeckName(40);

//3
function Divide(a,b){
    const s=a/b
    return s;
}
const t =Divide(6,3);
console.log(t+2);

//4
function CeckName(name){
    if(name<10){
        return "کودک"
    }else if(name>10 && name<20){
        return "نوجوان"
    }else if(name>20){
        return "جوان"
    }
}
const O =CeckName(40);
console.log(O);