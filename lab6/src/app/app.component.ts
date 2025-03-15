import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Web';
}
