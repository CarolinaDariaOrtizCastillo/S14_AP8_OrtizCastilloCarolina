import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  logout() {
    this.router.navigate(['/login']);
  }
}