import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent  {



  reloadPage(event: Event): void {
    event.preventDefault();
    location.reload();
  }
}
