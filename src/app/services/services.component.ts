import { Component, OnInit } from '@angular/core';
import { DataLayerService } from './data-layer.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  date = new Date();
  username: string;
  toggle = false;
  users: any[];
  myStyle: any;
  constructor(private dataLayerService: DataLayerService) {
    this.myStyle = dataLayerService.myStyle;  
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.dataLayerService.getUsers();
  }

  addUser(): void {

    this.dataLayerService.addUser(this.username);

    this.loadUsers();

  }

  removeUser(userId: number): void {

    this.dataLayerService.removeUsers(userId);

    this.loadUsers();
  }
  clickMe(): void {
    this.toggle = !this.toggle;
  }
}
