import { Component } from '@angular/core';

@Component({
  selector: 'test-kendo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [
    {
      text: 'My Profile',
    },
    {
      text: 'Friend Requests',
    },
    {
      text: 'Account Settings',
    },
    {
      text: 'Support',
    },
    {
      text: 'Log Out',
    },
  ];
}
