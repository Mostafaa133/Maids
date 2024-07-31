import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  loading = true;
  page = 1;
  totalUsers = 0;
  usersPerPage = 6;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers(this.page);
  }

  getUsers(page: number): void {
    this.loading = true;
    this.userService.getUsers(page).subscribe(data => {
      this.users = data.data;
      this.totalUsers = data.total;
      this.loading = false;
    });
  }

  viewUser(id: number): void {
    this.router.navigate(['/user', id]);
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.getUsers(this.page);
  }
}
