import UserDemo from "../models/UserDemo.js";

export const userController = async (req:any, res:any) => {
  try {
    const { username, sdt, email } = req.body;

    UserDemo.create({
      username,
      sdt,
      email,
    });

    return res.status(200).json({message: "tao user thanh cong"})
  } catch (error) {
    console.error("errors: ", error)
  }
};
