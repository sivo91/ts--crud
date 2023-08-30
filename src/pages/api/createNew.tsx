
import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "@/utils/db"
import Car from "@/models/car"



const handler = async (req: NextApiRequest, res: NextApiResponse) => {

connectDB()

const name = req.body.name
const year = req.body.year
const color = req.body.color
const img = req.body.img
const model = req.body.model
//console.log(name, year, color, img, model)

if(req.method !== 'POST') {
 return res.status(400).json({ message: 'Use POST method' })
}

if (!req.body) {
  return res.status(400).json({ error: "Data is missing" })
}



const car = new Car({
  name, 
  year,
  color,
  img,
  model
})

const newItem = await car.save()

 
 res.status(200).json({ 
   success: true,
   message: 'Item Created !'
  })
 
}

export default handler