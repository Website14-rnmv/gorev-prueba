import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // para que funcionen los routerLink
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  menuAbierto = false;
  constructor(private router: Router) { }


  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }


  redirectToPage(ruta: string) {
    this.cerrarMenu();
    this.router.navigateByUrl(ruta);
  }

}
