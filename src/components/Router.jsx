import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import CarSalesPage from '../pages/CarSalesPage'
import SpecialsPage from '../pages/SpecialsPage'
import AppointmentPage from '../pages/AppointmentPage'
import AboutUsPage from '../pages/AboutUsPage'
import ReviewsPage from '../pages/ReviewsPage'
import DirectionsPage from '../pages/DirectionsPage'
import ContactUsPage from '../pages/ContactUsPage'
import NotFoundPage from '../pages/NotFoundPage'

const Router = () => {
  return (
    <BrowserRouter>
      {/* <header>SAM</header> */}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/ServicesPage" component={ServicesPage}></Route>
        <Route exact path="/CarSalesPage" component={CarSalesPage}></Route>
        <Route exact path="/SpecialsPage" component={SpecialsPage}></Route>
        <Route
          exact
          path="/AppointmentPage"
          component={AppointmentPage}
        ></Route>
        <Route exact path="/AboutUsPage" component={AboutUsPage}></Route>
        <Route exact path="/ReviewsPage" component={ReviewsPage}></Route>
        <Route exact path="/DirectionsPage" component={DirectionsPage}></Route>
        <Route exact path="/ContactUsPage" component={ContactUsPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
