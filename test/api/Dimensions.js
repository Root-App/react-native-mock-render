import Dimensions from '../../src/api/Dimensions';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('Dimensions', () => {
  it('Has default window dimensions', () => {
    const windowDimensions = Dimensions.get('window');
    expect(windowDimensions.width).to.be.above(0);
    expect(windowDimensions.height).to.be.above(0);
    expect(windowDimensions.scale).to.be.above(0);
    expect(windowDimensions.fontScale).to.be.above(0);
  });

  it('Has default screen dimensions', () => {
    const screenDimensions = Dimensions.get('screen');
    expect(screenDimensions.width).to.be.above(0);
    expect(screenDimensions.height).to.be.above(0);
    expect(screenDimensions.scale).to.be.above(0);
    expect(screenDimensions.fontScale).to.be.above(0);
  });

  describe('When dimensions are changed', () => {
    let newDimensions;
    let changeListener;

    beforeEach(() => {
      changeListener = sinon.spy();
      Dimensions.addEventListener('change', changeListener);
      newDimensions = Object.freeze({
        window: {width: 10, height: 20, scale: 1, fontScale: 3},
        screen: {width: 10, height: 18, scale: 1, fontScale: 3},
      });
      Dimensions.set(newDimensions);
    });

    afterEach(() => {
      Dimensions.removeEventListener('change', changeListener);
    });

    it('Overrides defaults', () => {
      expect(Dimensions.get('window')).to.equal(newDimensions.window);
      expect(Dimensions.get('screen')).to.equal(newDimensions.screen);
    });

    it('Invokes event listeners', () => {
      expect(changeListener).to.have.been.calledWith(newDimensions);
    });

    describe('When event listeners are removed', () => {
      beforeEach(() => {
        Dimensions.removeEventListener('change', changeListener);
        changeListener.resetHistory();
      });
      it('Does not invoke event listeners on change any more', () => {
        const otherDimensions = Object.freeze({
          window: {width: 100, height: 30, scale: 3, fontScale: 1},
          screen: {width: 100, height: 30, scale: 3, fontScale: 1},
        });
        Dimensions.set(otherDimensions);
        expect(changeListener).not.to.have.been.calledWith(otherDimensions);
      });
    });
  });
});
