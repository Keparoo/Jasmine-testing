window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: document.getElementById('loan-amount').value,
		years: document.getElementById('loan-years').value,
		rate: document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const values = { amount: 100000, years: 20, rate: 3.5 };
	document.querySelector('#loan-amount').value = values.amount;
	document.querySelector('#loan-years').value = values.years;
	document.querySelector('#loan-rate').value = values.rate;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const values = getCurrentUIValues();
	updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const rate = values.rate / 100 / 12;
	const n = Math.floor(values.years * 12);
	//handle near zero, zero, or negative interest rates
	if (rate < 0.000001 / 12) {
		return (values.amount / n).toFixed(2);
	}

	return (rate * values.amount / (1 - Math.pow(1 + rate, -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	document.querySelector('#monthly-payment').innerText = '$' + monthly;
}
