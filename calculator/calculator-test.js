it('should calculate the monthly rate correctly', function() {
	const values = {
		amount: 5000,
		years: 4,
		rate: 3
	};
	expect(calculateMonthlyPayment(values)).toEqual('110.67');
});

it('should return a result with 2 decimal places', function() {
	const values = {
		amount: 4995,
		years: 4,
		rate: 3.2
	};
	expect(calculateMonthlyPayment(values)).toEqual('111.00');
});

it('should return a correct result with 0 interest', function() {
	const values = {
		amount: 100000,
		years: 20,
		rate: 0
	};
	expect(calculateMonthlyPayment(values)).toEqual('416.67');
});
