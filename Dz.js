var arr = [];

one();
function one (){
  var a = prompt("Кол-во элементов?");
  for( i = 0; i < a; i++){
  var c = prompt('Введите элемент');
  arr.push(c);
}
return;
}

maxValue(arr);
function maxValue(arr){
	var max = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(max < arr[i]) max = arr[i];
	}
	alert(" max "+max);
	return;
}



minValue(arr);
function minValue(arr){
	var min = arr[0];
	for(var i = 0; i > arr.length; i++){
		if(min > arr[i]) min = arr[i];
	}
	alert(" min "+min);
	return;
}

sumValue(arr);
function sumValue(arr){
	var sum = 0;
	for( var i = 0; i < arr.length; i++){
		sum = sum + parseInt(arr[i]);	
	}
	alert(' sum '+sum);
	return;
}
