import { Component, signal } from '@angular/core';
import { DinnerReview } from './models/dinner-review.model';
import { CommonModule } from '@angular/common';
import { form, FormField, max, maxLength, metadata, min, required } from '@angular/forms/signals';
import { StarRating } from './components/star-rating/star-rating';
import { FieldWrapper } from "./components/field-wrapper/field-wrapper";
import { LABEL } from './schema/label.metadata-key';
import { withLabel } from './schema/label-schema';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormField, StarRating, FieldWrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly model = signal<DinnerReview>({
    username: '', 
    title: '',
    description: '', 
    rating: 0
  });

  readonly frm = form(this.model, path => {
    required(path.username, { message: 'Username is required' });
    required(path.title, { message: 'Title is required' });
    required(path.description, { message: 'Description is required' });
    maxLength(path.username, 10, { message: 'Username cannot exceed 10 characters' });
    maxLength(path.title, 3, { message: 'Title cannot exceed 3 characters' });
    min(path.rating, 1, { message: 'Rating must be at least 1' });
    max(path.rating, 8, { message: 'Rating cannot be more than 5' });
    withLabel(path.username, 'User Name');
    withLabel(path.title, 'Review Title');
    withLabel(path.description, 'Review Description');
    withLabel(path.rating, 'Star Rating');
  });


}
