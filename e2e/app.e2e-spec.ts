import { Ng4BootstrapPage } from './app.po';

describe('ng4-bootstrap App', () => {
  let page: Ng4BootstrapPage;

  beforeEach(() => {
    page = new Ng4BootstrapPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
