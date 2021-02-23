import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title1 = 'Home'
  title2 = 'Data Binding'
  title3 = 'Nested Components'
  title4 = 'Fetch'
}
