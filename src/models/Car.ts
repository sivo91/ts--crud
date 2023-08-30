
import { Schema, model, models } from "mongoose"

const CarSchema = new Schema({
   name: {
        type: String,
    },
    year: {
        type: String,
    },
    color: {
        type: String,
    },
    img: {
        type: String
    },
    model: {
        type: String
    }
  

})

const Car = models.Car || model("Car", CarSchema)

export default Car











