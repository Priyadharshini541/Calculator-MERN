var operator="";
var FirstNumber="";
var SecondNumber="";

function append(number)
{
if(operator===""){
    FirstNumber+=number;
    document.getElementById('result').value=FirstNumber;

}
else{
    SecondNumber+=number;
    document.getElementById('result').value=FirstNumber+"" +operator+""+SecondNumber;
}
}
function showresult(){
    let res=0;
    switch(operator){
        case '+':
            res=parseInt(FirstNumber)+parseInt(SecondNumber);
            break;
            case '-':
            res=parseInt(FirstNumber)-parseInt(SecondNumber);
            break;
            case '*':
            res=parseInt(FirstNumber)*parseInt(SecondNumber);
            break;
            case '/':
            res=parseInt(FirstNumber)/parseInt(SecondNumber);
            break;
    }
    document.getElementById('result').value=res;
}
function setoperator(op){
    
    operator=op;
    document.getElementById('result').value=FirstNumber+""+operator;
}
function reset(){
    FirstNumber="";
    SecondNumber="";
    operator="";
    document.getElementById('result').value="";
  
}


const body=document.querySelector('body');
const button=document.querySelector('button1');

const color=['red','blue','black','hotpink','yellow','violet','green'];

body.style.backgroundColor='orange';

button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
})