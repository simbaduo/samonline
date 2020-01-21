import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import OilChangePage from '../pages/ServicesPages/OilChangePage'
import ACPage from '../pages/ServicesPages/ACPage'
import BrakesPage from '../pages/ServicesPages/BrakesPage'
import BeltsHosesPage from '../pages/ServicesPages/BeltsHosesPage'
import DiagnosticsPage from '../pages/ServicesPages/DiagnosticsPage'
import AccessoriesPage from '../pages/ServicesPages/AccessoriesPage'
import SteeringPage from '../pages/ServicesPages/SteeringPage'
import TiresPage from '../pages/ServicesPages/TiresPage'
import AlignmentPage from '../pages/ServicesPages/AlignmentPage'
import ResumePage from '../pages/ResumePage'

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
        <Route
          exact
          path="/ServicesPages/OilChangePage"
          component={OilChangePage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/AlignmentPage"
          component={AlignmentPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/BrakesPage"
          component={BrakesPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/BeltsHosesPage"
          component={BeltsHosesPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/DiagnosticsPage"
          component={DiagnosticsPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/AccessoriesPage"
          component={AccessoriesPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/SteeringPage"
          component={SteeringPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/TiresPage"
          component={TiresPage}
        ></Route>
        <Route exact path="/ServicesPages/ACPage" component={ACPage}></Route>
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
        <Route exact path="/ResumePage" component={ResumePage}></Route>

        <Route exact path="/ContactUsPage" component={ContactUsPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
