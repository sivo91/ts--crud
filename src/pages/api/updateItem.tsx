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
const name = req.body.name
const model = req.body.model
const color = req.body.color
const img = req.body.img
const year = req.body.year

console.log(id, name, model, color, img, year)

const item = await Car.findById(id)
console.log(item)

item.name = name
item.model = model
item.color = color
item.img = img
item.year = year

await item.save()


 res.status(200).json({ 
   success: true,
   message: 'Item updated!'
  })
 
}

export default handler