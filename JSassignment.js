alert(Date());

function change1(){
	document.getElementById('a1').src ='2.jpg';
}

function change2(){
	document.getElementById('p1').innerHTML ='2';	
}

function change3(){
	alert('This is an alert box')
}

function change4(){
	var select = document.getElementById('p3');
	select.style.backgroundColor = 'blue';
	select.style.fontFamily = 'Arial';
	select.style.textAlign = 'center';
}

function ftocstep1(f){
		return (f - 32) * 5/9;
}
function ftoc(){
	var select = document.getElementById('ftoc');
	select.innerHTML = ftocstep1(20);
}
function sum(){
	var a = parseFloat(prompt('first number:'));
	var b = parseFloat(prompt('second number:'));
	document.getElementById('sum').innerHTML = a+b;
}

function greeting(){
	var f = prompt('First Name: ');
	var l = prompt('Last Name: ');
	document.getElementById('greeting').innerHTML = 'Nice to meet you ' + f + l;
}