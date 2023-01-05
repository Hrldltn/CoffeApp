import {PrismaClient} from '@prisma/client'

export default async function handler(req,res){
    const prisma = new PrismaClient()
    
    const ordenesCompletas = await prisma.orden.findMany({
        where:{
            estado:true
        }
    })
    res.status(200).json(ordenesCompletas);
}