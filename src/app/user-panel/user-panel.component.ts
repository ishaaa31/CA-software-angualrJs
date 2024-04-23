import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  fy: string | undefined;
  client: string | undefined;
  loginName: string | undefined;
  selectedFy: any;

  clickButton: any;
  constructor(private router: Router){}
  onFYChange() {

    console.log('FY changed:', this.fy);
  }

  onClientSelection() {
    // Set global variable CID and generate reports
    console.log('Client selected:', this.client);
  }

  ngOnInit() {
    this.loginName = 'User'; 
    }

    submit() {
      this.router.navigate([`/client-panel`]);
  }
  }

    