import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorComponent } from './shared/error-component/error-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ErrorComponent
 ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('beauyt-spa');
}
