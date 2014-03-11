	 // App variables

	 // temp variable for equations
	 var tempValue = "";


	  // Bind events
	  $('.btn-num').on('click', function(evt) {
	  	var $el = $(evt.currentTarget);
	  	var num = $el.data('num');


	  	updateTempValue(num);

	  });

	  $('.btn-clear').on('click', function(evt) {
	  	console.log('Clear Clicked', evt);

	  	tempValue = "";
	  	setDisplay("0");
	  });

	  // Display functions
	  // Displays number in the calculator output
	  
	 function updateTempValue(val) {
	 	var stringValue = val.toString();

	 	console.log("tempValue", tempValue);
	 	console.log("stringValue", stringValue);

	 	if(tempValue === "0") {
	 		tempValue = stringValue;
	 	}
	 	else {
	 		tempValue += stringValue;
	 	}

	 	setDisplay(tempValue);
	 };

	  function setDisplay(val) {
	  	$('.calc-val').val(val);
	  }
	  // End display functions





	  // add function
	  function add(){
	  // to be called when equal sign or a new operator is pressed and + operator used previously
	  }
	  // subtract function
	  function subtract(){

	  }
	  // calculate function
	  function calculate(){

	  }