import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Juegos} from 'src/app/models/MJuegos';
import {JuegosService} from 'src/app/services/SJuegos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  juegos: Juegos = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha_ing: new Date()
  }

  edit: boolean = false;
  constructor(private juegosService: JuegosService , private router: Router, private activatedRoute: ActivatedRoute) { }
  
  
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.juegosService.getJuego(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.juegos = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    delete this.juegos.fecha_ing;
    delete this.juegos.id;
    this.juegosService.saveJuegos(this.juegos)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/juegos']);
        },
        err => console.error(err)
      )
  }

  updateJuego() {
    delete this.juegos.fecha_ing;
    this.juegosService.updateJuego(this.juegos.id, this.juegos)
      .subscribe(
       res => { 
        console.log(res);
         this.router.navigate(['/juegos']);
        },
       err => console.error(err)
      )
  }

}
