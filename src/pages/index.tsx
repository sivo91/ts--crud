/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';


const Home = () => {

  const[cars, setCars] = React.useState<string[]>([])
  const[load, setLoad] = React.useState<boolean>(false)
  //console.log(cars)


  const getCars = async () => {
    try {
      setLoad(true)
      const res = await axios.get('/api/showAllCars')
      console.log(res.data)
      setCars(res.data.cars)
      setLoad(false)
    } catch (error: any) {
      console.log(error.message)
      setLoad(false)
    }
  }


  /* check any changes */
  React.useEffect(() => {
   getCars()
  }, [])



  /* delete item */
  const deleteItem = async (id:string) => {
    console.log(id)
    
    try {
      const res = await axios.post('/api/deleteItem', {id})
      toast.success(res.data.message)
      getCars()

    } catch (error: any) {
      console.log(error)
    }
  }



  return (
    <>
      <Head>
        <title>TypeScript CRUD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

      <Link href={'/createNew'} 
            className='btn btn-primary rounded-1 vstack mx-auto' 
            style={{width: '200px'}}>
       Create New Item
     </Link>

      {
        load && <p className='text-center mt-5'>Fetching Data...</p>
      }

      {
        cars.length < 1 && load === false &&
        <h3 className='text-center mt-5'>List is emptpy.</h3>
      } 

     <main>

      {
        cars.map((item: any) => (
          <>
            <div className="card" style={{width: '18rem'}} key={item._id}>
              <img src={item.img} className="card-img-top" alt="img"/>
              <div className="card-body">
                <hr />

                <h5 className="card-title">{item.name}</h5>

              <div>
                <span>Year:</span>
                <span>{item.year}</span>
              </div>

              <div>
                <span>Color: </span>
                <span>{item.color}</span>
              </div>

              <div>
                <span>Model:</span>
                <span>{item.model}</span>
              </div>
              <hr />

                <div className='d-flex justify-content-between mt-2'>
                  <Link href={`/${item._id}`}>
                   <button className='btn btn-primary rounded-1'>
                    Edit
                   </button>
                  </Link>
                  <a href="#" 
                     onClick={() => deleteItem(item._id)}
                     className="btn btn-danger rounded-1">
                    Delete
                  </a>
                </div>
              </div>
          </div>
          </>
        ))
      }

      
     </main>




     <style>{`
     
      main {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding: 40px;
        gap:15px;
      }  

     `}</style>
    </>
  )
}


export default Home