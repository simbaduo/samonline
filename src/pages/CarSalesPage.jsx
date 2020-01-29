import React, { useState, useEffect } from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import Axios from 'axios'

const CarSalesPage = () => {
  const [vehicles, setVehicles] = useState([])

  const getVehicles = async () => {
    const resp = await Axios.get(
      'https://samonlineback.herokuapp.com/api/CarSales'
    )
    setVehicles(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getVehicles()
  }, [])

  return (
    <Page>
      {/* <div className="breadCrumbDiv">
        <BreadcrumbsComponent
          nextOne={'Car Sales'}
          nextOneUrl={'/CarSalesPage'}
        />
      </div> */}

      <div className="reviewTable">
        {vehicles.map(vehicles => {
          return (
            <div className="reviewBox">
              <ul className="reviewList">
                <div className="reviewInfo">
                  <li>{vehicles.year}</li>
                  <li>{vehicles.make}</li>
                  <li>{vehicles.model}</li>
                  <li>${vehicles.price}.00</li>
                  <li>{vehicles.color}</li>
                  <li>{vehicles.vin}</li>
                  <li>{vehicles.mileage}</li>
                  <li>{vehicles.description}</li>
                  <li>
                    <img
                      alt="5 Star Review Image"
                      height="25px"
                      width="120px"
                      src="./images/reviews.png"
                    />
                  </li>
                </div>
                <div className="reviewText">
                  <li>{vehicles.reviewText}</li>
                </div>
              </ul>
            </div>
          )
        })}
      </div>
    </Page>
  )
}

export default CarSalesPage

//   return (
//     <Page>
//       <BreadcrumbsComponent nextOne={'Reviews'} nextOneUrl={'/ReviewsPage'} />
//       <div className="reviewTable">
//         {reviews.map(reviews => {
//           return (
//             <div className="reviewBox">
//               <ul className="reviewList">
//                 <div className="reviewInfo">
//                   <li>{reviews.name}</li>
//                   <li className="greyText">{reviews.date}</li>
//                   <li>
//                     <img
//                       alt="5 Star Review Image"
//                       height="25px"
//                       width="120px"
//                       src="./images/reviews.png"
//                     />
//                   </li>
//                 </div>
//                 <div className="reviewText">
//                   <li>{reviews.reviewText}</li>
//                 </div>
//               </ul>
//             </div>
//           )
//         })}
//       </div>
//     </Page>
//   )
// }

// export default ReviewsPage
