import {Component, inject} from '@angular/core';
import {CarService} from './inject';

@Component({
  selector: 'app-root',
  templateUrl: `./app.html`,
})
export class App {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}
