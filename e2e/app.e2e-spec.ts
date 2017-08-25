import { TheatreGroupPage } from './app.po';

describe('theatre-group App', () => {
  let page: TheatreGroupPage;

  beforeEach(() => {
    page = new TheatreGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
