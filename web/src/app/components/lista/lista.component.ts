import { Component, HostBinding, OnInit } from '@angular/core';

import {Juegos} from 'src/app/models/MJuegos';
import {JuegosService} from 'src/app/services/SJuegos';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  juegos: any = [];
  @HostBinding('class') classes = 'row';
  

  constructor(private juegosService: JuegosService) { }

  ngOnInit(){
    this.getJuegos();
  }
  getJuegos() {
    this.juegosService.getJuegos()
      .subscribe(
        res => {
          this.juegos = res;
        },
        err => console.error(err)
      );
  }

  deleteJuegos(id: string) {
    this.juegosService.deleteJuegos(id)
      .subscribe(
        res => {
          console.log(res);
          this.getJuegos();
        },
        err => console.error(err)
      )
  }

}
