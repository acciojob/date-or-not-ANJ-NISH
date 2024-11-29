var isDate = function (input) {

	if(input instanceof Date)
	{
		return true;
	}

	const parsedDate=Date.parse(input);

	return !NaN(parsedDate);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
