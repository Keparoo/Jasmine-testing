describe('Servers test', () => {
	beforeEach(() => {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', () => {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should update table when server is submitted', () => {
		submitServerInfo();

		let tableList = document.querySelectorAll('#serverTable tbody tr td');

		expect(tableList[0].innerText).toEqual('Alice');
		expect(tableList[1].innerText).toEqual('$0.00');
		expect(tableList.length).toEqual(2);
	});

	it('should not update table if name field is empty', () => {
		serverNameInput.value = '';
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(0);
	});

	afterEach(() => {
		serverTbody.innerHTML = '';
		allServers = {};
		serverId = 0;
	});
});
