import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header';
import { RouterModule } from '@angular/router';
import { Loader } from '../../shared/loader/loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, Loader],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

// ...existing code...
export class HomeComponent implements OnInit {
  showLoader = true;
  fadeLoader = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const loaderShown = localStorage.getItem('homeLoaderShown');
    if (loaderShown) {
      this.showLoader = false;
      this.fadeLoader = false;
      this.cdr.detectChanges();
      return;
    }

    setTimeout(() => {
      this.fadeLoader = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.showLoader = false;
        localStorage.setItem('homeLoaderShown', 'true');
        this.cdr.detectChanges();
      }, 500); // Duración del fade-out en ms
    }, 2000);
  }
}
// ...existing code...
