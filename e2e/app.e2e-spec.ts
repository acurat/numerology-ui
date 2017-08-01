import { NumerologyUiPage } from './app.po';

describe('numerology-ui App', () => {
  let page: NumerologyUiPage;

  beforeEach(() => {
    page = new NumerologyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
