import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  myStyle = {'text-align': 'center', 'color' : 'orange'}; // public property

  private date = new Date(); // date properity


  private users = [{
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

  constructor() {

  }
  private generateUserId(): number {

    let userId: number =  Number(this.users[ this.users.length - 1].userId) + 1;

    return userId;

  }

  addUser(username: string): void {

    this.date = new Date();

    this.users.push({
      userId: this.generateUserId(),
      userName:  username,
      date: this.date
    });

  }

  getUsers(): any[] {
    return this.users;
  }

  removeUsers(userId: number): void {
    this.users = this.users.filter(obj => obj.userId !== userId);

  }


}
