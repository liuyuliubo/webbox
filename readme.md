##函数
作用：1，方便代码重复使用，2，可以把每个功能独立出来，3，可以让代码更加简单 

1. 定义函数（声明式函数，函数表达式）

	1声明式函数
	
	functionfn1(){
		console.log("hello function")
		}

	2函数表达式
	
	letfn2=functionfn1(){
		console.log("function")
		}

	3 匿名函数（没有名字的函数，IIFE在创建的时候就立即执行）
	
	（functionfn1(){
		console.log("IIFE")
		}）（）；
2. 函数的调用（函数名+小括号）

		fn1();

		fn2();
3. 函数的参数（形参：形式参数，实参：实际参数）


		function foo(a,b){
			console.log(a,b);
			}
	
		foo(1,2);
	
		输出：1,2

		arguments(保存每一个参数)

			function foo(){
			console.log(arguments);
			console.log(arguments[0]);
			}
			foo("hello","html");
	
		输出：{'0':"hello"} html
4. rest （不定参数）
		
		function foo(...rest){
			console.log(rest);
			}

		foo("hello","html","css");

		输出：["hello","html","css"]

		function foo(a,b,...rest){
			console.log(a,b,rest);
			}

		foo("hello","html","css","hhh");

		输出： hello  html ["css","hhh"]
		
5. 函数返回值(当函数没有返回值的时候输出undefined默认情况函数是undefined)

		return作为函数的返回值，会终止函数执行（终止return的执行），只返回一个值，是后面的那个值，因为后面的值覆盖前面的

		function foo(){
		let a="hello";
		let b="js";
		return=[a,b];
		}
		let c=foo();
		console.log(c);
		输出：["hello","js"]
##递归函数
含义：函数的内容又在调用自己，一定要设有一个出口，不然及时一个死循环

		function foo(){
		console.log("hello")
		foo();
		}
		foo();

		function foo(i){
		console.log("i")
		if(i==0){
		retrun;
		}
		foo(i-1);
		}
		foo(4);
		输出：4,3,2,1,0
		
##回调函数

含义：将函数b作为参数传给a,然后在函数a内部，调用函数b,那么b就是回调函数

		function fn1(func){
		func();
		}
		function fn2(){
		console.log("fn2")
		}
		fn1(fn2);
		输出：fn2
##箭头函数

		let fn=()=>{}
1. 当只有一个形参的时候，小括可省

		let fn=a=>{}
2. 当函数体内只有一行return语句时，return和大括号都可省
 
		let fn=a=>a*a;
##默认参数
含义：当没有传入参数的时候就使用莫热值，如果传入参数就覆盖默认值

		function foo(a=0,b=1){
		console.log(a.b)
		}
		foo();
		输出：0,1
##函数提升（只针对声明式函数）
		foo();
		function foo(){
		console.log("hello")
		}
		输出：hello