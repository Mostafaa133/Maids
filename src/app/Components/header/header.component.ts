import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      const userId = Number(target.value);
      if (!isNaN(userId) && userId > 0) {
        this.router.navigate(['/user', userId]);
      }
    }
  }
}
