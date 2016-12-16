import main from '../index';

describe('Main module', () => {
  it('has a message', () => {
    expect(main.message).toMatch(/da+yum/);
  });

  it('has another message', () => {
    expect(main.otherMessage).toMatch(/da+yum/);
  });

  it('has another another message', () => {
    expect(main.anotherMessage).toMatch(/da+yum/);
  });

  it('has a message from an aliased module', () => {
    expect(main.aliasedMessage).toMatch(/da+yum/);
  });
});
