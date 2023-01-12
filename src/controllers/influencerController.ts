import {Request, Response} from 'express'
import { DataSource } from 'typeorm';
import { Influencer } from '../entities/Influencer';
import { Services } from '../entities/Services';
import { AppDataSource } from '../db';

export const getTodosInfluencer = async (req: Request, res: Response) => {
  try {
    console.log(req.body,'zinedine get');
    // const influencer = await AppDataSource
    // .getRepository(Influencer)
    // .createQueryBuilder("influencer")
    // .leftJoin("influencer.services","services")
    // .getMany;
    const influencer = await Influencer.find({
      relations:{
        services: true,
      }
    })
    return res.json({listInfluencer:influencer});
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const habilitadoInfluencer = async ( req: Request, res: Response )=>{
  try {
    const { id } = req.params;
    const influencer = await Influencer.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
    if (!influencer) return res.status(404).json({ message: "Not Influencer found" });

    await Influencer.update({ id: parseInt(id) }, {habilitado: true});
    return res.sendStatus(204);

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export const desabilitadoInfluencer = async ( req: Request, res: Response )=>{
  try {
    const { id } = req.params;
    const influencer = await Influencer.findOneBy({ id: parseInt(id) }); 
    if (!influencer) return res.status(404).json({ message: "Not Influencer found" });

    await Influencer.update({ id: parseInt(id) }, {habilitado: false});
    console.log("Funciono");
    return res.sendStatus(204);

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export const getInfluencer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const influencer = await Influencer.findOneBy({ id: parseInt(id) });

    if (!influencer) return res.status(404).json({ message: "Influencer not found" });

    return res.json(influencer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createInfluencer = async (req: Request, res: Response) => {

  try {
      const {nombre, edad, description, precio, img, estatura, services} = req.body;

      const listId: string[] = services;
      const listServices: Services[] = [];

      const influencer = new Influencer();
      influencer.nombre = nombre;
      influencer.edad = edad;
      influencer.estatura = estatura;
      influencer.precio = precio;
      influencer.description = description;
      influencer.img = img;

      for (const id of listId) {

          let values = await Services.findOneBy({id: parseInt(id)});

          if (!values)
              return res.status(404).json({message: "Services not found"});

          listServices.push(values);
      }

      influencer.services = listServices

      await influencer.save();
      return res.json({listInfluencer: await Influencer.find()});
  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({message: error.message});
      }
  }
};

export const updateInfluencer = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const influencer = await Influencer.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
    if (!influencer) return res.status(404).json({ message: "Not Influencer found" });

    await Influencer.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteInfluencer = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Influencer.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Influencer not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};