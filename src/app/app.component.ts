import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoutaMateriels';
  constructor(){}
  ngOnInit(){

  }
  url:string="../assets/img/400141_1.jpg"
  changeImage(event:any){
    this.url=event.target.src;
  }
  url1:string="../assets/img/815211_1.jpg"
  url2:string="../assets/img/400141_1.jpg"
  url3:string="../assets/img/573101_1.jpg"
}
