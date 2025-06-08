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
  dropdownAbierto = false; // <--- NUEVO

  constructor(private router: Router) { }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    if (!this.menuAbierto) {
      this.dropdownAbierto = false; // Cierra dropdown si se cierra el menú
    }
  }

  cerrarMenu() {
    this.menuAbierto = false;
    this.dropdownAbierto = false; // Cierra dropdown también
  }

  toggleDropdown() {
    this.dropdownAbierto = !this.dropdownAbierto;
  }

  redirectToPage(ruta: string) {
    this.cerrarMenu();
    this.router.navigateByUrl(ruta);
  }

}
