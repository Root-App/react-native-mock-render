import { expect } from 'chai';
import Share from '../../src/Libraries/Share/Share.js';
import Platform from '../../src/plugins/Platform';

describe('Share', () => {
  describe('share', () => {
    it('throws when content is not an object', () => {
      const error = /Content to share must be a valid object/;
      const share = () => { Share.share(); };

      expect(share).to.throw(error);
    });

    it('throws when a url or message is not provided', () => {
      const error = /At least one of URL and message is required/;
      const content = {};
      const share = () => { Share.share(content); };

      expect(share).to.throw(error);
    });

    it('throws when options is not an object or null', () => {
      const error = /Options must be a valid object/;
      const content = { message: 'test message' };
      const options = 42;
      const share = () => { Share.share(content, options); };

      expect(share).to.throw(error);
    });

    it('throws when title is not a string on android', () => {
      const error = /Invalid title: title should be a string./;
      const content = { message: 'test message', title: 13 };
      const options = {};
      Platform.__setOS('android');
      const share = () => { Share.share(content, options); };

      expect(share).to.throw(error);
    });

    it('throws when platform is unsupported', () => {
      const content = { message: 'test message' };
      const options = {};
      Platform.__setOS('unsupported');

      return Share.share(content, options).catch(function (error) {
        expect(error.message).to.be.equal('Unsupported platform');
      });
    });

    it('returns a dismissed action on android', () => {
      const content = { message: 'test message' };
      const options = {};
      Platform.__setOS('android');
      const dismissedAction = { action: 'dismissedAction' };

      return Share.share(content, options).then(function (result) {
        expect(result).to.deep.equal(dismissedAction);
      });
    });

    it('returns a dismissed action on ios', () => {
      const content = { message: 'test message' };
      const options = {};
      Platform.__setOS('ios');
      const dismissedAction = { action: 'dismissedAction' };

      return Share.share(content, options).then(function (result) {
        expect(result).to.deep.equal(dismissedAction);
      });
    });
  });

  describe('sharedAction', () => {
    it('returns sharedAction', () => {
      expect(Share.sharedAction).to.be.eql('sharedAction');
    });
  });

  describe('dismissedAction', () => {
    it('returns dismissedAction', () => {
      expect(Share.dismissedAction).to.be.eql('dismissedAction');
    });
  });
});
