/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios'



const EditItem = () => {

const router = useRouter()
const  {id} = router.query
const paramID = id

/*  OR
  const { query } = useRouter();
  const id = query.id
  console.log(id)
*/

 const [name, setName] = React.useState<string>('')
 const [year, setYear] = React.useState<string>('')
 const [color, setColor] = React.useState<string>('')
 const [img, setImg] = React.useState<string>('')
 const [model, setModel] = React.useState<string>('')
 
 console.log(paramID)


/* get single item */
React.useEffect(() => {

 const getItem = async () =>  {

  const config = {
       headers: {
          "Content-Type": "application/json",
        }
    }

  try {
     const res = await axios.post(`/api/getSingleItem`, {paramID}, config ) 
    // console.log(res.data.singleItem)
     const data = res.data.singleItem
     setName(data.name)
     setYear(data.year)
     setColor(data.color)
     setImg(data.img)
     setModel(data.model)
  } catch (error:any) {
     console.log(error)
  }

 }

 getItem()
},[paramID])

const data = {name, color, paramID, year, model, img}
/* update item */
const handleUpdate = async ( e: React.FormEvent ) => {

const config = {
       headers: {
          "Content-Type": "application/json",
        }
    }
    
  try {
    
    const res = await axios.post('/api/updateItem', data, config)
    console.log(res.data)

  } catch (error: any) {
    console.log(error)
  }  

}



  return (
    <>
     <h3 className='text-center mt-3'>Edit Item</h3>

     <form className='my-3' onSubmit={handleUpdate}>

        <input type="text"
               value={name}
               className='p-1'
               onChange={ e => setName(e.target.value)}
               placeholder='Name' />

        <input type='text'
               value={year}
               className='my-2 p-1'
               onChange={ e => setYear(e.target.value)}
               placeholder='Year' />       

        <input type="text"
               value={color}
               className='p-1'
               placeholder='Color'
               onChange={ e => setColor( e.target.value)} />

        <input type="text"
               value={img}
               className='p-1 mt-2'
               placeholder='/img1-6'
                />   

        <input type="text"
               value={model}
               placeholder='Model'
               className='my-2 p-1'
               onChange={ e => setModel(e.target.value)} /> 

          {/* select image */}
        <div>
         <img src="/ford.jpg" 
              onClick={() => setImg('/ford.jpg')}
              style={{width: '95px', cursor:'pointer'}} 
              alt="img" />  
         <img src="/volvo.jpg" 
              onClick={() => setImg('/volvo.jpg')}
              style={{width: '95px', cursor:'pointer'}} 
              alt="img" />  
         <img src="/tesla.jpg" 
              onClick={() => setImg('/tesla.jpg')}
              style={{width: '95px', cursor:'pointer'}} 
              alt="img" />  
         <img src="/tesla3.jpg" 
              onClick={() => setImg('/tesla3.jpg')}
              style={{width: '95px', cursor:'pointer'}} 
              alt="img" />  
        </div>                     

        <button className='btn btn-danger rounded-1 mt-3'
                type='submit'>
          Update
        </button>         
        
      </form>

       <div className='imgBox'>
       {img &&  <img src={img} style={{width: '100%'}}  alt="img" />}
      </div>



      <Link href={'/'} 
           className='btn btn-dark rounded-1 my-5 vstack mx-auto' 
           style={{width: '200px'}}>
       Go Back
     </Link>



      <style>{`

      .imgBox {
      position: relative;
      width: 350px;
      margin: 0 auto;
     }
      
      form {
        position: relative;
        width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
     
     `}</style>

    </>
  )
}

export default EditItem