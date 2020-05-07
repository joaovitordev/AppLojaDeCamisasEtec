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

  sliderCamisas = {
    zoom: false,
    slidesPerView: 2.5,
  };

  OpenPage(pagina : string){
    this.navCtrl.navigateForward(`/${pagina}`);
  }

  brasileirao = [
    {
      imagem: '../../assets/santos.jpg',
      descricao: 'Camisa Santos I',
      valor: 'R$ 97.95'
    },
    {
      imagem: '../../assets/gremio.jpg',
      descricao: 'Camisa Grêmio',
      valor: 'R$ 103.96'
    },
    {
      imagem: '../../assets/flamengo.jpg',
      descricao: 'Camisa Flamengo',
      valor: 'R$ 150.00'
    },
    {
      imagem: '../../assets/sao-paulo.jpg',
      descricao: 'Camisa São Paulo',
      valor: 'R$ 85.98'
    },
    {
      imagem: '../../assets/santos-2.jpg',
      descricao: 'Camisa Santos II',
      valor: 'R$ 110.69'
    }
  ]

  champions = [
    {
      imagem: '../../assets/chelsea.jpg',
      descricao: 'Camisa Chelsea',
      valor: 'R$ 97.95'
    },
    {
      imagem: '../../assets/psg.jpg',
      descricao: 'Camisa Paris Saint Germain',
      valor: 'R$ 103.96'
    },
    {
      imagem: '../../assets/real-madrid.jpg',
      descricao: 'Camisa Real Madrid',
      valor: 'R$ 150.00'
    },
    {
      imagem: '../../assets/juventus.jpg',
      descricao: 'Camisa Juventus',
      valor: 'R$ 85.98'
    },
    {
      imagem: '../../assets/inter-milao-3.jpg',
      descricao: 'Camisa internacionale',
      valor: 'R$ 110.69'
    }
  ]

  
  selecoes = [
    {
      imagem: '../../assets/brasil-2.jpg',
      descricao: 'Camisa Seleção Brasil',
      valor: 'R$ 97.95'
    },
    {
      imagem: '../../assets/espanha.jpg',
      descricao: 'Camisa Espanha',
      valor: 'R$ 103.96'
    },
    {
      imagem: '../../assets/argentina.jpg',
      descricao: 'Camisa Argentina',
      valor: 'R$ 150.00'
    },
    {
      imagem: '../../assets/costa-do-marfim.jpg',
      descricao: 'Camisa Costa do Marfim',
      valor: 'R$ 85.98'
    },
    {
      imagem: '../../assets/jamaica.jpg',
      descricao: 'Camisa Jamaica',
      valor: 'R$ 110.69'
    }
  ]
}
