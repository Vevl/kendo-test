import { Component } from '@angular/core';

@Component({
  selector: 'test-kendo-remote',
  template: `
    <div class="k-block">
      <div class="heading subheading">
        <h2>Remote component</h2>
      </div>
      <kendo-dropdownbutton [data]="data"> Remote dropdown </kendo-dropdownbutton>
    </div>
  `,
})
export class RemoteEntryComponent {
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
