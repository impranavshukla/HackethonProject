//import { Routes } from '@angular/router';

//export const routes: Routes = [];
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Rooms } from './components/rooms/rooms';
import { Mybooking } from './components/mybooking/mybooking';
import { Myprofile } from './components/myprofile/myprofile';
import { Logout } from './components/logout/logout';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rooms', component: Rooms },
  { path: 'mybooking', component: Mybooking },
  { path: 'myprofile', component: Myprofile },
  { path: 'logout', component: Logout}
];