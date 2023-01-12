import {Request, Response} from 'express'
import { Services } from '../entities/Services';

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await Services.find();
    return res.json({listServices: services});
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const services = await Services.findOneBy({ id: parseInt(id) });

    if (!services) return res.status(404).json({ message: "Services not found" });

    return res.json(services);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createServices = async ( req: Request, res: Response) => {
    try {
        const { nombre, edad,description,precio,img,habilitado } = req.body; 
        const services = new Services(); //! Estoy creando un nuevo usuario
        services.nombre = nombre;
        services.precio = precio;
        await services.save(); //! Guardo el usuario

        const allServices = await Services.find();
        return res.json({listServices: allServices});
        // return res.json(services); //! Retorno el usuario
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }
    }
};

export const updateServices = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const services = await Services.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
    if (!services) return res.status(404).json({ message: "Not Services found" });

    await Services.update({ id: parseInt(id) }, req.body);

    const allServices = await Services.find();
    return res.json({listServices: allServices});


  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteServices = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Services.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Services not found" });

      const allServices = await Services.find();
      return res.json({listServices: allServices});

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};