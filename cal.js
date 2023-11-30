const output = document.querySelector(".output")
const result = document.querySelector(".result")
const keys = document.querySelectorAll('button')

keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate()
{
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "0";
        return;
    }

    if(buttonText==='DEL'){
        output.textContent = output.textContent.substring(0,output.textContent.length-1);
        result.innerText="";
        return;
    }
    if(buttonText ==='='){
	let temp=output.innerText;
        result.innerText = eval(output.innerText);
        output.textContent=temp;
    }
    else{
        output.textContent+=buttonText;
        result.innerText="";
        return;
    }
}


