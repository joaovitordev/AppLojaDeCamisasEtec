import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl : NavController) {}

  OpenPage(pagina : string){
    this.navCtrl.navigateForward(`/${pagina}`);
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  sliderCamisas = {
    zoom: false,
    slidesPerView: 2.5,
  };

  ListaCamisas = [
    {
      imagem: '../../assets/barcelona-retro.jpg',
      descricao: 'Camisa retrô Barcelona',
      valor: 'R$ 97.95'
    },
    {
      imagem: '../../assets/santos-2.jpg',
      descricao: 'Camisa Santos',
      valor: 'R$ 103.96'
    },
    {
      imagem: '../../assets/juventus.jpg',
      descricao: 'Camisa Juventus',
      valor: 'R$ 150.00'
    },
    {
      imagem: '../../assets/inter-milao-3.jpg',
      descricao: 'Camisa Internacionale',
      valor: 'R$ 85.98'
    },
    {
      imagem: '../../assets/russia.jpg',
      descricao: 'Camisa retrô Barcelona',
      valor: 'R$ 110.69'
    }
  ]

}
