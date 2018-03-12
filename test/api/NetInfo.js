import { expect } from 'chai';

import NetInfo from '../../src/api/NetInfo';


describe('NetInfo', () => {
  it('getConnectionInfo', () => {
    const expectedResult = { type: 'wifi', effectiveType: 'unknown' };

    NetInfo.getConnectionInfo().then(info => expect(info).to.deep.equal(expectedResult));
  });
});
