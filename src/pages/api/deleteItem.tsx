
import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "@/utils/db"
import Car from "@/models/Car"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

connectDB()


if(req.method !== 'POST') {
 return res.status(400).json({ message: 'Use POST method' })
}

if (!req.body) {
  return res.status(400).json({ error: "Data is missing" })
}

const id = req.body.id
console.log(id)

await Car.findByIdAndDelete(id)

 
 res.status(200).json({ 
   success: true,
   message: 'Item Deleted !'
  })
 
}

export default handler








