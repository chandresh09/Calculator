let input = document.querySelector(".display");

let btnValue = document.querySelectorAll("button");

btnValue.forEach((val)=> {
    // console.log(val.innerText);
    val.addEventListener("click",()=> {
        input.value += val.innerText;
    })
})

let allClear = document.querySelector(".allClear");
allClear.addEventListener("click",()=> {
    input.value = '';
})

let clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    input.value = input.value.slice(0,-2);
})

let calculate = document.querySelector(".equal");
calculate.addEventListener("click",()=> {
    input.value = input.value.slice(0,-1);
    input.value = eval(input.value).toLocaleString("en-IN");
})