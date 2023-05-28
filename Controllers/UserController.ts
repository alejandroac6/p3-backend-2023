import prisma from "../Middlewares/prisma-client.js";

const RegisterUser = async (req, res) => {
  const data = req.body;
  const createUser = await prisma.user.create({ data });
  res.status(200).json(createUser);
};

const PerfilUser = async (req, res) => {
  const { id } = req.params;
  const User = await prisma.user.findUnique({ where: { id: id } });
  const { name, email } = User;
  res.status(200).json({ name, email });
};

export { RegisterUser, PerfilUser };
