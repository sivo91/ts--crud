import { NextApiRequest, NextApiResponse } from "next"
import connectDB from "@/utils/db"
import Car from "@/models/car"




const handler = async (req: NextApiRequest, res: NextApiResponse) => {

connectDB()

const cars = await Car.find({})
 
 res.status(200).json({ 
   success: true,
   message: 'Cars fetched successfully !',
   cars
  })
 
}

export default handler