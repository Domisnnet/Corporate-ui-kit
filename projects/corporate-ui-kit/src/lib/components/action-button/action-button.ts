import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cuk-action-button',
  template: `
    <button
      class="cuk-btn"
      [class]="type"
      [disabled]="disabled"
      (click)="onClick()">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./action-button.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary'; 
  @Input() disabled = false; 

  @Output() click = new EventEmitter<void>(); 

  onClick() {
    this.click.emit(); 
  }
}