import { Component, computed, contentChild, input } from "@angular/core";
import { FormField, REQUIRED } from "@angular/forms/signals";
import { LABEL } from "../../schema/label.metadata-key";

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field-wrapper.html',
  styleUrl: './field-wrapper.scss',
})
export class FieldWrapper<T> {
  // readonly label = input('');
  readonly fieldDirective = contentChild.required(FormField<T>);
  readonly fieldState = computed(() => this.fieldDirective().state());

  readonly label = computed(() => this.fieldState().metadata(LABEL)?.() || '');

  readonly errors = computed(() => this.fieldState().errors());
  readonly showErrors = computed(() => this.fieldState().touched() 
    && this.errors().length > 0);
  readonly required = computed(() => this.fieldState().metadata(REQUIRED)?.() || false );

}
