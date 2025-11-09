import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_392g4y8',
      'template_6cmo6hj',
      this.formData,
      'hWouxVhpuZooCffJh'
    ).then(() => {
      alert('Email trimis cu succes!');
    }).catch(() => {
      alert('Eroare la trimitere!');
    });
  }
}
