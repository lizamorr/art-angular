export const artApp = {
  homePage: {
    logo: () => cy.getElement('logo'),
    labrinth: () => cy.getElement('labrinth'),
    title: () => cy.getElement('title'),
  },
  header: {
    logo: () => cy.getElement('logo'),
    menu: {
      openBtn: () => cy.getElement('menu-open'),
      link: (id: string) => cy.getElement(`menu-${id}`),
    },
  },
  galleryPage: {
    toggle: (filter: string) => cy.getElement(`gallery-${filter}`),
    upBtn: () => cy.getElement('up-btn'),
    galleryImage: (index: number) => cy.getElement(`gallery-img--${index}`),
    galleryImageDesc: (index: number) =>
      cy.getElement(`gallery-img-desc--${index}`),
    imageCarousel: (index: number) => cy.getElement(`img-carousel--${index}`),
    imageCarouselDesc: (index: number) =>
      cy.getElement(`img-carousel-desc--${index}`),
    imageCarouselNext: (index: number) =>
      cy.getElement(`img-carousel-next--${index}`),
    imageCarouselPrev: (index: number) =>
      cy.getElement(`img-carousel-prev--${index}`),
    imageCarouselDots: (index: number) =>
      cy.getElement(`img-carousel-dots--${index}`),
  },
  aboutPage: {
    picture: () => cy.getElement('about-picture'),
    aboutText: () => cy.getElement('about-text'),
    insta: () => cy.getElement('insta'),
    github: () => cy.getElement('github'),
  },
  contactPage: {
    name: () => cy.getElement('contact-name'),
    email: () => cy.getElement('contact-email'),
    message: () => cy.getElement('contact-message'),
    submit: () => cy.getElement('contact-submit-btn'),
  },
};
