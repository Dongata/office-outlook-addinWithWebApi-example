import { Input, Component } from '@angular/core';
import { AppServices, GlobalConstants } from './app.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() tests : any[];
  constructor(private appservice : AppServices, globalConstants: GlobalConstants){
    appservice.httpGet(globalConstants.apiUrl.getTest.alltest).subscribe(a=> this.tests = a);
  }
  title = 'app';
}
