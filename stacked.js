/****************************
 * STACKED
 *
 * a stack based programming language
 * similr to Forth
 *
 ****************************/
var test=new Stacked();

test.exec(":: factorial dup 1 = if else dup 1 - factorial * endif ;;");
test.exec("10 factorial");

function Stacked(){
  var definitions={};

  var stack=[];
  this.exec=function(inCode){



var code = [];
code = inCode.split(" ");



var tempStack=[];



var EVAL=true;


code.reverse();

while(code.length>0){
	var com = code.pop();

	if(EVAL||com==";;"){
    if(com == "="){
			var arg2=stack.pop();
			var arg1=stack.pop();
      if(arg1 == arg2){
        stack.push("true");
      }else{
        stack.push("false");
      }

		}else
    if(com == "!="){
			var arg2=stack.pop();
			var arg1=stack.pop();
      if(arg1 != arg2){
        stack.push("true");
      }else{
        stack.push("false");
      }

		}else
    if(com == ">"){
			var arg2=stack.pop();
			var arg1=stack.pop();
      if(parseFloat(arg1) > parseFloat(arg2)){
        stack.push("true");
      }else{
        stack.push("false");
      }

		}else
    if(com == "<"){
			var arg2=stack.pop();
			var arg1=stack.pop();
      if(parseFloat(arg1) < parseFloat(arg2)){
        stack.push("true");
      }else{
        stack.push("false");
      }

		}else
    if(com == ">="){
			var arg2=stack.pop();
			var arg1=stack.pop();
      if(parseFloat(arg1) >= parseFloat(arg2)){
        stack.push("true");
      }else{
        stack.push("false");
      }

		}else
    if(com == "<="){
			var arg2=stack.pop();
			var arg1=stack.pop();
      if(parseFloat(arg1) <= parseFloat(arg2)){
        stack.push("true");
      }else{
        stack.push("false");
      }

		}else
		if(com == "+"){
			var arg2 = stack.pop();
			var arg1 = stack.pop();
			stack.push(parseFloat(arg2)+parseFloat(arg1));

		}else
		if(com == "-"){
			var arg2 = stack.pop();
			var arg1 = stack.pop();
			stack.push(parseFloat(arg1) - parseFloat(arg2));

		}else
		if(com == "*"){
			var arg2=stack.pop();
			var arg1=stack	.pop();
			stack.push(parseFloat(arg1)*parseFloat(arg2));

		}else
		if(com == "/"){
			var arg2=stack.pop();
			var arg1=stack	.pop();
			stack.push(parseFloat(arg1)/parseFloat(arg2));
		}else
		if(com == "swap"){
			var arg2 = stack.pop();
			var arg1 = stack.pop();
			stack.push(arg2);
			stack.push(arg1);
		}else
		if(com == "dup"){
			var arg1 = stack.pop();
			stack.push(arg1);
			stack.push(arg1);
		}else
		if(com == "rot"){
			var arg1 = stack.pop();
			stack.unshift(arg1);
		}else
    if(com == "pop"){
			stack.pop();
		}else
    if(com == "if"){
      var arg1 = stack.pop();
      if(arg1 == "true"){
        var i = code.length;
        while(code[i-1]!="else"){
          i--;
        }
        i--;
        while(code[i-1]!="endif"){
          code.splice(i,1);
          i--;
        }
        code.splice(i,1);
        i--;
        code.splice(i,1);

      }else
      if (arg1 == "false"){
        var i = code.length;
        while(code[i-1]!="else"){
          code.pop();
          i--;
        }
        code.pop();
        i--;

        while(code[i-1]!="endif"){
          i--;
        }
        code.splice(i-1,1);
      }
    }else
		if(com == "::"){
			stack.push("::");
			EVAL=false;
		}else
		if(com == ";;"){
			while(tempStack[tempStack.length-1]!="::"){
				tempStack.push(stack.pop());
			}
			tempStack.pop();
			definitions[tempStack.pop()]=tempStack;
			tempStack=[];
			EVAL=true;
		}else{

			if(definitions[com]!=null){
				for(var i=0;i<definitions[com].length;i++){
					code.push(definitions[com][i]);
				}
			}else{
				stack.push(com);
			}
		}




	}else{
			stack.push(com);

	}



}

//prettyPrint(stack);

for(var i=stack.length-1;i>=0;i--){
	console.log(stack[i]);
}

function prettyPrint(stack){
  for(var i=0;i<stack.length;i++){
    console.log(" =====================");
    var out="|"
    out+=stack[i];
    out+="|";
    console.log(out);
    console.log(" =====================");
  }
}

}
}
