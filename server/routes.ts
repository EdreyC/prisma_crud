import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();

const prisma = new PrismaClient();

router.post("/posts",async (req,res)=>{
    
    const {content, likes} = req.body

    const post = await prisma.post.create({
        data:{
            content,
            likes
        }
    })  
    return res.json(post)
})
router.get("/posts", async (req,res)=>{

    const users = await prisma.post.findMany()
    return res.json(users)

})
router.delete("/posts/:id", async (req,res)=>{
    const {id} = req.params
    const users = await prisma.post.delete({
        where:{
            id: String(id)  
        },
    })
    return res.json(users)
})
router.put("/posts/:id",async (req,res) => {

    const {id} = req.params
    const {content,likes} = req.body

    const users = await prisma.post.update({

        where:{
            id:String(id),
        },
        data:{
            content:content,
            likes:likes

        }
    })
    return res.json(users)
    
})



export { router }
