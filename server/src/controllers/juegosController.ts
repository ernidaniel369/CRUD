import { Request, Response } from 'express';


import pool from '../database';

class JuegosController {

    public async list(req: Request, res: Response): Promise<void> {
        const juegos = await pool.query('SELECT * FROM juegos');
        res.json(juegos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const juegos = await pool.query('SELECT * FROM juegos WHERE id = ?', [id]);
        console.log(juegos.length);
        if (juegos.length > 0) {
            return res.json(juegos[0]);
        }
        res.status(404).json({ text: "El juego no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO juegos set ?', [req.body]);
        res.json({ message: 'Juego guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldJuego = req.body;
        await pool.query('UPDATE juegos set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El juego fue actulizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM juegos WHERE id = ?', [id]);
        res.json({ message: "Juego eliminado" });
    }

   
}

const juegosController = new JuegosController;
export default juegosController;