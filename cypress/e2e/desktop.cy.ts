import { artApp } from '../support/selectors.po';

describe('Desktop flow', () => {
  it('should navigate each page in the app', () => {
    cy.viewport('macbook-16');
    cy.visit('/');

    // home page
    artApp.header.logo().should('be.visible');
    artApp.homePage.labrinth().should('exist');
    artApp.homePage.title().should('be.visible');
    // nav to gallery
    artApp.header.menu.openBtn().click();
    artApp.header.menu.link('gallery').click();
    artApp.galleryPage.toggle('drawing').should('have.text', ' Drawings ');
    artApp.galleryPage.toggle('painting').should('have.text', ' Paintings ');
    artApp.galleryPage.toggle('digital').should('have.text', ' Digital ');
    artApp.galleryPage.toggle('other').should('have.text', ' Other ');
    artApp.galleryPage.galleryImage(0).should('be.visible');
    artApp.galleryPage
      .galleryImageDesc(0)
      .should('have.text', ' Digital drawing, 8x10", April 2024 ');
    // nav to contact
    artApp.header.menu.openBtn().click();
    artApp.header.menu.link('contact').click();
    artApp.contactPage.name().should('be.visible');
    artApp.contactPage.email().should('be.visible');
    artApp.contactPage.message().should('be.visible');
    artApp.contactPage.submit().should('be.visible');
    // nav to about
    artApp.header.menu.openBtn().click();
    artApp.header.menu.link('about').click();
    artApp.aboutPage.picture().should('be.visible');
    artApp.aboutPage.aboutText().should('be.visible');
    artApp.aboutPage.github().should('be.visible');
    artApp.aboutPage
      .github()
      .should('have.attr', 'href', 'https://github.com/lizamorr/art-angular');
    artApp.aboutPage.insta().should('be.visible');
    artApp.aboutPage
      .insta()
      .should('have.attr', 'href', 'https://instagram.com/lizamorrisonart/');
  });

  describe('Gallery', () => {
    it('should display the image carousel', () => {
      cy.viewport('macbook-16');
      cy.visit('/gallery');

      artApp.galleryPage.imageCarousel(4).scrollIntoView();
      artApp.galleryPage
        .imageCarouselDesc(4)
        .should('have.text', ' Digital drawing, 10x4", Feb 2022 ');
      artApp.galleryPage.imageCarouselNext(4).should('be.visible');
      artApp.galleryPage.imageCarouselPrev(4).should('be.visible');
      artApp.galleryPage.imageCarouselDots(4).should('be.visible');
      artApp.galleryPage
        .imageCarouselDots(4)
        .find('span')
        .should('have.length', 3);
      artApp.galleryPage
        .imageCarouselDots(4)
        .find('span')
        .first()
        .should('have.class', 'bg-gray-800');
      artApp.galleryPage
        .imageCarouselDots(4)
        .find('span')
        .eq(1)
        .should('have.class', 'bg-gray-300');
      artApp.galleryPage
        .imageCarouselDots(4)
        .find('span')
        .last()
        .should('have.class', 'bg-gray-300');
      artApp.galleryPage.imageCarouselNext(4).click();
      artApp.galleryPage
        .imageCarouselDots(4)
        .find('span')
        .eq(1)
        .should('have.class', 'bg-gray-800');
      artApp.galleryPage
        .imageCarouselDots(4)
        .find('span')
        .first()
        .should('have.class', 'bg-gray-300');
      artApp.galleryPage
        .imageCarouselDots(4)
        .find('span')
        .last()
        .should('have.class', 'bg-gray-300');
    });

    it('should filter the images by type', () => {
      cy.viewport('macbook-16');
      cy.visit('/gallery');

      artApp.galleryPage
        .galleryImageDesc(0)
        .scrollIntoView()
        .should('have.text', ' Digital drawing, 8x10", April 2024 ');
      artApp.galleryPage.toggle('painting').click();
      artApp.galleryPage.galleryImageDesc(0).should('not.exist');
      artApp.galleryPage
        .imageCarouselDesc(0)
        .scrollIntoView()
        .should('have.text', ' Oil, 48x36", May 2021 ');
    });
  });

  describe('Contact form', () => {
    it('should send an email when the form is filled out', () => {
      cy.viewport('macbook-16');
      cy.intercept(
        'POST',
        'https://api.emailjs.com/api/v1.0/email/send-form'
      ).as('sendEmail');
      cy.visit('/contact');

      artApp.contactPage.submit().should('be.disabled');

      artApp.contactPage.name().type('Liza');
      artApp.contactPage.email().type('lizammorrison@gmail.com');
      artApp.contactPage.message().type('Your website rocks!');
      artApp.contactPage.submit().click();

      cy.wait('@sendEmail');
    });
  });
});
