import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private searchSubject = new Subject<string>();

  constructor(private router: Router, private userService: UserService) {
    this.searchSubject.pipe(
      debounceTime(300),
      switchMap(searchTerm => {
        const userId = Number(searchTerm);
        return this.userService.getUserById(userId);
      })).subscribe(user => {
        if (user && user.data) {
          this.router.navigate(['/user', user.data.id]);
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchSubject.next(target.value);
    }
  }
}
