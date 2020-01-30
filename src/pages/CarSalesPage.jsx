import React, { useState, useEffect } from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import Axios from 'axios'
import CarPhotos from '../components/CarPhotos'

import camryprofile from '../images/camryprofile.JPG'
import rav4profile from '../images/rav4profile.JPG'
import lexusprofile from '../images/lexusprofile.JPG'

const CarSalesPage = () => {
  const [vehicles, setVehicles] = useState([])
  const images = [camryprofile, rav4profile, lexusprofile]

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
    <Page withPadding={false}>
      {/* <div className="breadCrumbDiv">
        <BreadcrumbsComponent
          nextOne={'Car Sales'}
          nextOneUrl={'/CarSalesPage'}
        />
      </div> */}
      <div className="manualPaddingDiv">
        <BreadcrumbsComponent nextOne={'Reviews'} nextOneUrl={'/ReviewsPage'} />
        <div className="reviewTable">
          {vehicles.map(vehicles => {
            return (
              <div className="reviewBox">
                <ul className="vehicleImgContainer">
                  <div className="reviewInfo">
                    <li>
                      <img
                      alt="5 Star Review Image"
                      height="250px"
                      width="120px"
                      src={vehicles.imageUrl}
                    />
                      {/* {images.map(image => {
                        return <img src={image} /> */}
                      {/* })} */}
                    </li>
                  </div>
                  <div className="vehicleInfo">
                    <ul className="vehicleList">
                      <li>
                        <strong>
                          {vehicles.year} {vehicles.make} {vehicles.model}
                        </strong>
                      </li>
                      <li>${vehicles.price}.00</li>
                      <li>{vehicles.color}</li>
                      <li>VIN: {vehicles.vin}</li>
                      <li>{vehicles.mileage}k miles</li>
                      <li>"{vehicles.description}"</li>
                    </ul>
                  </div>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="reviewSubmitButtonContainer">
        <div className="reviewSubmitButtonInnerDiv">
          <a href="/ContactUsPage" className="reviewSubmitButton" type="Submit">
            Contact Us
          </a>
        </div>
      </div>
    </Page>
  )
}

export default CarSalesPage

//   return (
//     <Page>
//       <BreadcrumbsComponent nextOne={'Reviews'} nextOneUrl={'/reviews'} />
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

// export default reviews
