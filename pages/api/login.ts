import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../database/connect/mongo";
import { UserModel } from "../../database/schemas";
import { Usuario } from "../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { usuario, contraseña } = req.body;
    console.log(req.body)
    // connect to the database
    await dbConnect();

    if (req.method === "POST") {
      // fetch the posts
      const user = await UserModel.findOne(
        { usuario, contraseña },
        { contraseña: 0 }
      );
      console.log("Usuario encontrado:", user ? "SI" : "NO");

      if (user !== null) {
        return res.status(200).json({
          message: "Bienvenido!",
          data: user as Usuario,
          success: true,
        });
      }

      // return the posts
      return res.status(404).json({
        message: "Verifique los datos ingresados",
        success: false,
      });
    }
    throw new Error("Invalid method");
  } catch (error) {
    // return the error
    console.error("Error en login:", error);
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Error desconocido",
      success: false,
    });
  }
}
