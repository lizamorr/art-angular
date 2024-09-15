import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatMenuModule,
  MatMenuTrigger,
} from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  RouterLink,
  RouterLinkWithHref,
  RouterModule,
} from '@angular/router';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MenuComponent,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        RouterLink,
        RouterModule.forRoot([]),
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the menu', () => {
    expect(component).toBeTruthy();
  });

  it('should render the menu button with a "more_vert" icon', () => {
    const buttonElement = fixture.debugElement.query(
      By.css('[data-testid="menu-button"]')
    );
    const iconElement = buttonElement.query(By.css('mat-icon')).nativeElement;
    expect(iconElement.textContent).toContain('more_vert');
  });

  it('should trigger the menu on button click', () => {
    const menuTrigger = fixture.debugElement
      .query(By.directive(MatMenuTrigger))
      .injector.get(MatMenuTrigger);
    expect(menuTrigger.menuOpen).toBeFalse();

    const buttonElement = fixture.debugElement.query(
      By.css('[data-testid="menu-button"]')
    ).nativeElement;
    buttonElement.click();
    fixture.detectChanges();

    expect(menuTrigger.menuOpen).toBeTrue();
  });

  it('should display the correct menu items', () => {
    const buttonElement = fixture.debugElement.query(
      By.css('[data-testid="menu-button"]')
    ).nativeElement;

    buttonElement.click();
    fixture.detectChanges();

    const menuItems = fixture.debugElement.queryAll(
      By.css('button[mat-menu-item]')
    );
    expect(menuItems.length).toBe(4);

    const homeItem = fixture.debugElement.query(
      By.css('[data-testid="menu-item-home"]')
    ).nativeElement;
    const galleryItem = fixture.debugElement.query(
      By.css('[data-testid="menu-item-gallery"]')
    ).nativeElement;
    const contactItem = fixture.debugElement.query(
      By.css('[data-testid="menu-item-contact"]')
    ).nativeElement;
    const aboutItem = fixture.debugElement.query(
      By.css('[data-testid="menu-item-about"]')
    ).nativeElement;

    expect(homeItem.textContent.trim()).toBe('Home');
    expect(galleryItem.textContent.trim()).toBe('Gallery');
    expect(contactItem.textContent.trim()).toBe('Contact');
    expect(aboutItem.textContent.trim()).toBe('About');
  });

  xit('should navigate to the correct route on menu item click', async () => {
    const buttonElement = fixture.debugElement.query(
      By.css('[data-testid="menu-button"]')
    ).nativeElement;
    buttonElement.click();
    fixture.detectChanges();

    await fixture.whenStable(); // Ensure the menu is opened and rendered

    const homeLink = fixture.debugElement
      .query(By.css('[data-testid="menu-item-home"]'))
      .injector.get(RouterLinkWithHref);
    const galleryLink = fixture.debugElement
      .query(By.css('[data-testid="menu-item-gallery"]'))
      .injector.get(RouterLinkWithHref);
    const contactLink = fixture.debugElement
      .query(By.css('[data-testid="menu-item-contact"]'))
      .injector.get(RouterLinkWithHref);
    const aboutLink = fixture.debugElement
      .query(By.css('[data-testid="menu-item-about"]'))
      .injector.get(RouterLinkWithHref);

    expect(homeLink.href).toEqual('/');
    expect(galleryLink.href).toEqual('/gallery');
    expect(contactLink.href).toEqual('/contact');
    expect(aboutLink.href).toEqual('/about');
  });
});
