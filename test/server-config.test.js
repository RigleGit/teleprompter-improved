const assert = require('node:assert/strict');
const test = require('node:test');

test('builds display URL from configured LAN host', () => {
    process.env.PUBLIC_HOST = '192.168.1.139';
    process.env.PORT = '8080';

    const { buildPublicConfig } = require('../server');

    assert.equal(buildPublicConfig().displayUrl, 'http://192.168.1.139:8080/display.html');
});
