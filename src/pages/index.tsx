/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'

const Home = () => {

  const[cars, setCars] = React.useState<string[]>([])
  console.log(cars)

  const getCars = async () => {
    try {
      const res = await axios.get('/api/showAllCars')
     // console.log(res.data)
      setCars(res.data.cars)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  React.useEffect(() => {
   getCars()
  }, [])

  return (
    <>
      <Head>
        <title>TypeScript CRUD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

      <Link href={'/createNew'} 
            className='btn btn-dark rounded-1 vstack mx-auto' 
            style={{width: '200px'}}>
       Create New Item
     </Link>

     <main>
       
      {
        cars.map(item => (
          <>
            <div className="card" style={{width: '18rem'}} key={item._id}>
              <img src={item.img} className="card-img-top" alt="img"/>
              <div className="card-body">
                <hr />

                <h5 className="card-title">Ford</h5>

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
                  <a href="#" className="btn btn-primary rounded-1">Edit</a>
                  <a href="#" className="btn btn-danger rounded-1">Delete</a>
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