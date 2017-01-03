import { HttpIntPage } from './app.po';

describe('http-int App', function() {
  let page: HttpIntPage;

  beforeEach(() => {
    page = new HttpIntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
