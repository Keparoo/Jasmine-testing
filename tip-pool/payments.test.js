describe('Payments test (with setup and tear-down)', function() {
	beforeEach(function() {
		billAmtInput.value = 50;
		tipAmtInput.value = 5;
	});

	it('should submit payment info', function() {
		submitPaymentInfo();

		expect(allPayments['payment1'].billAmt).toEqual('50');
		expect(allPayments['payment1'].tipAmt).toEqual('5');
		expect(allPayments['payment1'].tipPercent).toEqual(10);
		expect(Object.keys(allPayments).length).toEqual(1);
	});

	it('should create current payment', function() {
		curPayment = createCurPayment();

		expect(curPayment.billAmt).toEqual('50');
		expect(curPayment.tipAmt).toEqual('5');
		expect(curPayment.tipPercent).toEqual(10);
	});

	it('should return undefined for empty bill amount', function() {
		billAmtInput.value = 0;
		curPayment = createCurPayment();

		expect(curPayment).toEqual(undefined);
	});

	it('should return undefined for negative bill amount', function() {
		billAmtInput.value = -1;
		curPayment = createCurPayment();

		expect(curPayment).toEqual(undefined);
	});
	it('should create a payment with a zero tip', function() {
		tipAmtInput.value = 0;
		curPayment = createCurPayment();

		expect(curPayment.billAmt).toEqual('50');
		expect(curPayment.tipAmt).toEqual('0');
		expect(curPayment.tipPercent).toEqual(0);
	});

	it('should append a row to the Payment Table', function() {
		curPayment = createCurPayment();
		appendPaymentTable(curPayment);

		let paymentList = document.querySelectorAll('#paymentTable tbody tr td');

		expect(paymentList.length).toEqual(3);
		expect(paymentList[0].innerText).toEqual('$50');
		expect(paymentList[1].innerText).toEqual('$5');
		expect(paymentList[2].innerText).toEqual('10%');
	});

	it('should update the Summary Table', function() {
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
		updateSummary();

		expect(summaryTds[0].innerHTML).toEqual('$145');
		expect(summaryTds[1].innerHTML).toEqual('$20');
		expect(summaryTds[2].innerHTML).toEqual('16%');
	});

	it('should update the Summary Table correrctly with empty payments table', function() {
		allPayments = {};
		updateSummary();

		expect(summaryTds[0].innerHTML).toEqual('$0');
		expect(summaryTds[1].innerHTML).toEqual('$0');
		expect(summaryTds[2].innerHTML).toEqual('0%');
	});

	afterEach(function() {
		allPayments = {};
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTable.innerHTML = '';
	});
});
