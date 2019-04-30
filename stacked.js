/****************************
 * STACKED
 *
 * a stack based programming language
 * similr to Forth
 *
 ****************************/


var inCode="0 1 2 swap";


var code=inCode.split(" ");


var definitions={};

var stack=[];

var tempStack=[];



var EVAL=true;


code.reverse();

while(code.length>0){
	var com = code.pop();

	if(EVAL||com==";;"){
		if(com == "+"){
			var arg2=stack.pop();
			var arg1=stack	.pop();
			stack.push(parseFloat(arg2)+parseFloat(arg1));
	
		}else 
		if(com == "-"){
			var arg2=stack.pop();
			var arg1=stack	.pop();
			stack.push(parseFloat(arg1)-parseFloat(arg2));
	
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
			var arg2=stack.pop();
			var arg1=stack	.pop();
			stack.push(arg2);
			stack.push(arg1);			
		}else
		if(com == "dup"){
			var arg1=stack	.pop();
			stack.push(arg1);
			stack.push(arg1);
		}else  
		if(com == "rot"){
			var arg1=stack	.pop();
			stack.unshift(arg1);
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
			console.log(definitions);
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

for(var i=0;i<stack.length;i++){
	console.log(stack[i]);

}




