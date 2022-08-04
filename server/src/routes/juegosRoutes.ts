import express, { Router } from 'express';
import juegosController from '../controllers/juegosController';



class JuegosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', juegosController.list);
        this.router.get('/:id', juegosController.getOne);
        this.router.post('/', juegosController.create);
        this.router.put('/:id', juegosController.update);
        this.router.delete('/:id', juegosController.delete);
    }

}

export default new JuegosRoutes().router;

