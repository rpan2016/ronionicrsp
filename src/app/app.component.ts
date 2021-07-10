import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  /* dynamically load style
  private loadStyle() {
    const styleURL = 'http://www.xyz.com/MyApp/styleConfig.json';
    if (!_.isEmpty(styleURL)) {
      this.http.get(styleURL).subscribe((jObj: any) => {
        Object.keys(jObj.cssVars).forEach(k => {
          document.body.style.setProperty(k, jObj.cssVars[k]);
        });
      });
    }
  }*/
}
