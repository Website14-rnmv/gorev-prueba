import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader {
@Input() fadeLoader = false;
}
