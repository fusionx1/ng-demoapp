import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  date = new Date(); // date properity

  username: string; // username properity

  toggle = false; // toggle property

  users = [{
    userId: 1,
    userName: 'UserA',
    date: this.date
  },
  {
    userId: 2,
    userName: 'UserB',
    date: this.date
  },
  {
    userId: 3,
    userName: 'UserC',
    date: this.date
  }];

  myStyle = {'text-align': 'center', 'color' : 'green'};

  constructor() {


  }

  ngOnInit() {
    console.log(this.users);
  }

  addUser(): void {
    this.date = new Date();
    this.users.push({
      userId: this.generateUserId(),
      userName: this.username,
      date: this.date
    });

  }

  removeUser(userId: number) {
    this.users = this.users.filter(obj => obj.userId !== userId);
  }

  generateUserId(): number {

    let userId: number =  Number(this.users[ this.users.length - 1].userId) + 1;

    return userId;

  }

  clickMe() {
    this.toggle = !this.toggle;
  }
}
