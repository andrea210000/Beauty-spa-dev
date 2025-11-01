import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './views/shared/menu-component/menu-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('beauyt-spa');
}
