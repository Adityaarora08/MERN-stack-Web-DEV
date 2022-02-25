var display=document.getElementById("outputtext");
var btns=document.getElementsByClassName("key");
var op1 =0;
var operator=null;
var op2=null;
var x=0;
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',function(){
        var value= this.getAttribute('data-value');
        if(value=="ac")
        {
            display.innerText ="";
            op1 =0;
            operator=null;
            op2=null;
        }
        else if(value=="+/-")
        {
            var a = display.innerText;
            display.innerText ="-"+a;
            op1=parseFloat(display.innerText);
            x++;
        }
        else if(value=="%")
        {
            operator ="%";
            op1=parseFloat(display.innerText);
            display.innerText ="";
            x++;
        }
        else if(value=="*")
        {
            operator ="*";
            op1=parseFloat(display.innerText);
            display.innerText ="";
            x++;
        }
        else if(value=="-")
        {
            operator ="-";
            op1=parseFloat(display.innerText);
            display.innerText ="";
            x++;
        }
        else if(value=="+")
        {
            operator ="+";
            op1=parseFloat(display.innerText);
            display.innerText ="";
        }
        else if(value=="/")
        {
            operator ="/";
            op1=parseFloat(display.innerText);
            display.innerText ="";
        }
        else if(value==".")
        {
            display.innerText+=".";
        }
        else if(value=="=")
        {
            op2=parseFloat(display.innerText);
            display.innerText = eval(op1+" "+operator+" "+op2);
        }
        else{
            if(op1!=0 && operator!=null)
            {
                display.innerText +=value;
            }
            else if(op1==0 && operator==null)
            {
                display.innerText +=value;
            }
            else if(op1!=0 && operator==null)
            {
                display.innerText ="No operator";
            }
        }
    });
}
