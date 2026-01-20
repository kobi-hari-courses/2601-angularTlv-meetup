import { Component, signal } from '@angular/core';
import { DinnerReview } from './models/dinner-review.model';
import { CommonModule } from '@angular/common';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormField],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly model = signal<DinnerReview>({
    username: '', 
    description: '', 
    rating: 0
  });

  readonly frm = form(this.model, path => {
    required(path.username, { message: 'Username is required' });
    required(path.description, { message: 'Description is required' });
  });


}
