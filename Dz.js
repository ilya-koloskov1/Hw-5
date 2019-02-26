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

var max = getMaxValue(arr);
function getMaxValue(arr){
	var max = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(max < arr[i]) max = arr[i];
	}
	return max;
}
alert(arr+" max "+max);

var min = getMinValue(arr);
function getMinValue(arr){
	var min = arr[0];
	for(var i = 0; i > arr.length; i++){
		if(min > arr[i]) min = arr[i];
	}
	return min;
}
alert(arr+" min "+min);

var sum = sum(arr);
function sum (arr){
	var sum = 0;
	for( i = 0; i < arr.length; i++){
		sum = sum + parseInt(arr[i]);

	}
	alert(sum);
	return;
}