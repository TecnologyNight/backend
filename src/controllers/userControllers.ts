import {Request, Response} from 'express'
import { User } from '../entities/User';


export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log(req.body,'zinedine get');
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createUser = async ( req: Request, res: Response) => {
    try {
        const { firstname, lastname } = req.body; 
        const user = new User(); //! Estoy creando un nuevo usuario
        user.firstname = firstname;
        user.lastname = lastname;
        await user.save(); //! Guardo el usuario
        return res.json(user); //! Retorno el usuario
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }
    }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
    if (!user) return res.status(404).json({ message: "Not user found" });

    //!Asi tambien puedo editar una propiedad
    // user.firstname ='Nuevo nombe'
    // user.lastname = 'nuevo apellido'
    // user.save() //* Se guarda la modificacion. Es necesario este metodo

    //! Otra forma de editar algunas propiedades
    // await User.update({id: parseInt(id)},{
    //     firstname: req.body.firstname
    // })
    // * Observacion: req.body Tambien sirve para actualizar parcial. osea si es un solo dato que deseas actualizar !!!!!!!!!!!!!!!!!!!
    await User.update({ id: parseInt(id) }, req.body); //!Edita todos los campos del body si estan con el nismo nombre
    

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};