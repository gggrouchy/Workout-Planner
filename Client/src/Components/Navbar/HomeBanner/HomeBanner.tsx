import React from 'react'
import './HomeBanner.css'


const HomeBanner = () => {

  const [data, setData] = React.useState<any>(null)

  const getData = async () => {
    let temp = [
      {
        "name": "Calories Intake",
        "value": 2000,
        "unit": 'Calories',
        "goal": 2500,
      },
      {
        "name": "Sleep",
        "value": 8,
        "unit": "hours",
        "goal": 8
      },
      {
        "name": "Workouts",
        "value": 3,
        "unit": "days",
        "goal": 4
      }
    ]
    setData(temp)
  }
  React.useEffect(() => {
    getData()
  }, [])
  return (
    <div className='meters'>
      {
        data?.length >0 && data.map((iten: any, index: number) =>{
          <div className='card' key={index}>
            
            </div>
        })
      }
    </div>
  )
}

export default HomeBanner
