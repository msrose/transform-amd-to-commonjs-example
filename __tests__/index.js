import main from '../index';

describe('Main module', () => {
  it('has a message', () => {
    expect(main.message).toMatch(/da+yum/);
  });

  it('has another message', () => {
    expect(main.otherMessage).toMatch(/da+yum/);
  });
});
