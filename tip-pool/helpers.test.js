describe('Helpers test', () => {
	beforeEach(() => {
		allPayments = {
			payment1: {
				billAmt: '50',
				tipAmt: '5',
				tipPercent: '10'
			},
			payment2: {
				billAmt: '75',
				tipAmt: '10',
				tipPercent: '13'
			},
			payment3: {
				billAmt: '20',
				tipAmt: '5',
				tipPercent: '25'
			}
		};
	});

	it('should sum the billAmt', () => {
		expect(sumPaymentTotal('billAmt')).toEqual(145);
	});

	it('should sum the tipAmt', () => {
		expect(sumPaymentTotal('tipAmt')).toEqual(20);
	});

	it('should sum the tipPercent', () => {
		expect(sumPaymentTotal('tipPercent')).toEqual(48);
	});

	it('should calcluate the tip percentage', () => {
		expect(calculateTipPercent(100, 10)).toEqual(10);
		expect(calculateTipPercent(50, 1)).toEqual(2);
	});

	it('should append a cell to the table', () => {
		let newTr = document.createElement('tr');

		appendTd(newTr, '$' + 50);
		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerText).toEqual('$50');
	});

	afterEach(() => {
		allPayments = {};
		newTr = '';
	});
});
