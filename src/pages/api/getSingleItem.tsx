
import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "@/utils/db"
import Car from "@/models/Car"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

connectDB()


if(req.method !== 'POST') {
 return res.status(400).json({ message: 'Use POST method' })
}

if (!req.body) {
  return res.status(400).json({ error: "ID is missing" })
}

const id = req.body.paramID
//console.log(id)

const singleItem = await Car.findById(id)

// console.log(singleItem) 
 
 res.status(200).json({ 
   success: true,
   singleItem
  })
 
}

export default handler


