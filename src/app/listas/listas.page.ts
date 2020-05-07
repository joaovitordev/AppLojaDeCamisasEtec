import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  OpenPage(pagina : string){
    this.navCtrl.navigateForward(`/${pagina}`);
  }

}
