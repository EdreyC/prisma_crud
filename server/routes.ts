import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();

const prisma = new PrismaClient();

router.post("/users",async (req,res)=>{
    
    const {name, email} = req.body

    const user = await prisma.user.create({
        data:{
            name,
            email,
        }
    })  
    return res.json(user)
})
router.get("/users", async (req,res)=>{

    const users = await prisma.user.findMany()
    return res.json(users)

})
router.delete("/users/:id", async (req,res)=>{
    const {id} = req.params
    const users = await prisma.user.delete({
        where:{
            id: String(id)  
        },
    })
    return res.json(users)
})
router.put("/users/:id",async (req,res) => {

    const {id} = req.params
    const {name,email} = req.body

    const users = await prisma.user.update({

        where:{
            id:String(id),
        },
        data:{
            name:name,
            email:email
        }
    })
    return res.json(users)
    
})



export { router }
