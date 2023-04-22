let decrementButton=document.getElementById("btn1")
let IncrementButton=document.getElementById("btn2")
let resetButton=document.getElementById("btn3")
let value=document.getElementById("input")

decrementButton=() =>{
    let num=Number(value.innerText)
    if(num>0){
        value.innerText=num-1
    }
    else{
        value.innerText=0
    }

};
IncrementButton=() =>{
    let num=Number(value.innerText)
    value.innerText=num+1

};
resetButton=()=>{
    //let num=Number(value.innerText)
    value.innerText=0
};
