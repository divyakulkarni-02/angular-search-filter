import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Food Search';
  searchText;
  foods = [
    { id: 1, food: 'Manchurian', serving: '2', type: 'Veg' },
    { id: 2, food: 'Noodles', serving: '3', type: 'Veg' },
    { id: 3, food: 'Paneer-chilly', serving: '4', type: 'Veg' },
    { id: 4, food: 'Paneer-crispy', serving: '3', type: 'Veg' },
    { id: 5, food: 'Potato fry', serving: '2', type: 'Veg' },
    { id: 6, food: 'Veg-bowl', serving: '1', type: 'Veg' },
    { id: 7, food: 'Samosa', serving: '1', type: 'Veg' },
    { id: 8, food: 'Chiken-curry', serving: '2', type: 'Non-Veg' },
    { id: 9, food: 'Tandoori chiken', serving: '2', type: 'Non-Veg' },
    { id: 10, food: 'Curry rice', serving: '2', type: 'Veg' }
  ];
}
