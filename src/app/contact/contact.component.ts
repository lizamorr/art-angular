import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Meta } from '@angular/platform-browser';

import emailjs from '@emailjs/browser';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('300ms ease-in')]),
    ]),
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public metaService = inject(Meta);

  public isSendingEmail = signal(false);
  public isEmailSent = signal(false);

  emailForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  public ngOnInit(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Send a message to Liza Morrison.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Liza, Morrison, Contact, Email',
    });
    this.metaService.updateTag({ property: 'og:title', content: 'About Liza' });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Send a message to Liza Morrison.',
    });
  }

  public async sendMessage() {
    this.isSendingEmail.set(true);
    const userId = environment.viteUserId;
    const emailFormElement = this.createHTMLFormElement();

    try {
      emailjs.init(userId);
      await emailjs.sendForm(
        'service_art',
        'template_art',
        emailFormElement,
        userId
      );
      this.resetForm();
    } catch (error) {
      alert('Sorry, please email me at lizammorrison@gmail.com instead.');
      this.isSendingEmail.set(false);
    }

    setTimeout(() => {
      this.isEmailSent.set(false);
      this.isSendingEmail.set(false);
    }, 1000);
  }

  public resetForm() {
    this.isSendingEmail.set(false);
    this.isEmailSent.set(true);
    this.emailForm.reset();
  }

  public createHTMLFormElement(): HTMLFormElement {
    const formElement = document.createElement('form') as HTMLFormElement;

    Object.keys(this.emailForm.controls).forEach((key) => {
      const inputElement = document.createElement('input');
      inputElement.name = key;
      inputElement.value = this.emailForm.get(key)?.value || '';
      formElement.appendChild(inputElement);
    });

    return formElement;
  }
}
