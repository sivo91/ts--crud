/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify';

const CreateNew = () => {

 const [name, setName] = React.useState<string>('')
 const [year, setYear] = React.useState<string>('')
 const [color, setColor] = React.useState<string>('')
 const [img, setImg] = React.useState<string>('')
 const [model, setModel] = React.useState<string>('')

 const data = {name, year, color, img, model}
 console.log(data)

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  //console.log(data)

  const config = {
       headers: {
          "Content-Type": "application/json",
        }
    }

 try {
  
  const res = await axios.post('/api/createNew', data, config)
  console.log(res.data)
  toast.success(res.data.message)

  setName('')
  setColor('')
  setYear('')
  setImg('')
  setModel('')
  

 } catch (error: any) {
   console.log(error.message)
 }

 }


  return (
   <>
      
      <form className='my-3' onSubmit={handleSubmit}>

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
               value={model}
               placeholder='Model'
               className='my-2 p-1'
               onChange={ e => setModel(e.target.value)} />  

        <input type="text"
               value={img}
               className='p-1 mb-4'
               placeholder='Select image below'
                />   

       
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

       <button className='btn btn-primary rounded-1 mt-3'
               type='submit'>
        Create New  
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
        width: 300px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
     
     `}</style>
   </>
  )
}

export default CreateNew