import prisma from "../Middlewares/prisma-client.js";

const showTalks = async (req, res) => {
  const Talks = await prisma.talk.findMany({});
  res.status(200).json({ talks: Talks });
};

const createTalk = async (req, res) => {
  let{name,ownerId}=req.body
  ownerId=Number(ownerId)
  console.log(ownerId)
  const newTalk = await prisma.talk.create({ data: {name,ownerId} });
  res.status(200).json({ newTalk });
};

const showSingleTalk = async (req, res) => {
  const { id } = req.params;
  const Talk = await prisma.talk.findFirst({ where: { id: Number(id) } });
  res.status(200).json({ Talk });
};

const updateTalk = async (req, res) => {
  const { id } = req.params;
  const updatedTalk = await prisma.talk.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.status(200).json({ updatedTalk });
};

const deleteTalk= async (req,res)=>{
    const {id} = req.params;
    const deletedTalk= await prisma.talk.delete({
        where:{id:Number(id)}
    })
    res.status(200).json({deletedTalk})
}

export { showTalks, createTalk, showSingleTalk, updateTalk,deleteTalk };
