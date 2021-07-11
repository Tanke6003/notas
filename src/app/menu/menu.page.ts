import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public paginas =[
    {
      titulo:'Inicio',
      url:'/menu/inicio',
      icon:'alert'
    },
    {
      titulo:'notes',
      url:'/menu/notes',
      icon:'alert'
    },
    {
      titulo:'create-note',
      url:'/menu/create-note',
      icon:'alert'
    }
  ];
  selectedIndex: number;
  constructor(){
    
  }

  ngOnInit() {
  }
  changeSelectedIndex(index: number) {
      this.selectedIndex = index
    }
}
