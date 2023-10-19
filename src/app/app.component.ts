import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'translateTask';
  data: any;
  constructor(private http: HttpClient ,private translateservice: TranslateService) {
    
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
        setTimeout(() => {
      this.data = data;
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, error => console.error(error));
  }
  translate(event: any) {
    this.translateservice.use(event.target.value);
  }
}
