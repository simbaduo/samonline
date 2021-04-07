import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import OilChangePage from '../pages/ServicesPages/OilChangePage'
import ACPage from '../pages/ServicesPages/ACPage'
import BrakesPage from '../pages/ServicesPages/BrakesPage'
import HosesPage from '../pages/ServicesPages/HosesPage'
import DiagnosticsPage from '../pages/ServicesPages/DiagnosticsPage'
import AccessoriesPage from '../pages/ServicesPages/AccessoriesPage'
import SteeringPage from '../pages/ServicesPages/SteeringPage'
import TiresPage from '../pages/ServicesPages/TiresPage'
import AlignmentPage from '../pages/ServicesPages/AlignmentPage'
import BatteryPage from '../pages/ServicesPages/BatteryPage'
import InspectionsPage from '../pages/ServicesPages/InspectionsPage'
import MiscPage from '../pages/ServicesPages/MiscPage'
import ResumePage from '../pages/ResumePage'
import TuneUpPage from '../pages/ServicesPages/TuneUpPage'
import CarSalesPage from '../pages/CarSalesPage'
import SpecialsPage from '../pages/SpecialsPage'
import AppointmentPage from '../pages/AppointmentPage'
import AboutUsPage from '../pages/AboutUsPage'
import reviews from '../pages/ReviewsPage'
import ExperiencePage from '../pages/ExperiencePage'
import DirectionsPage from '../pages/DirectionsPage'
import VeteransPage from '../pages/VeteransPage'
import SeniorsPage from '../pages/SeniorsPage'
import ContactUsPage from '../pages/ContactUsPage'
import NotFoundPage from '../pages/NotFoundPage'
import AdminPage from '../pages/AdminPage'
import SubmitReviewPage from '../pages/SubmitReviewPage'

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
          path="/ServicesPages/BatteryPage"
          component={BatteryPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/BrakesPage"
          component={BrakesPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/HosesPage"
          component={HosesPage}
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
          path="/ServicesPages/MiscPage"
          component={MiscPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/SteeringPage"
          component={SteeringPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/TuneUpPage"
          component={TuneUpPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/TiresPage"
          component={TiresPage}
        ></Route>
        <Route
          exact
          path="/ServicesPages/InspectionsPage"
          component={InspectionsPage}
        ></Route>
        <Route exact path="/AdminPage" component={AdminPage}></Route>
        <Route exact path="/ServicesPages/ACPage" component={ACPage}></Route>
        <Route exact path="/CarSalesPage" component={CarSalesPage}></Route>
        <Route exact path="/SpecialsPage" component={SpecialsPage}></Route>
        <Route
          exact
          path="/AppointmentPage"
          component={AppointmentPage}
        ></Route>
        <Route exact path="/AboutUsPage" component={AboutUsPage}></Route>
        <Route exact path="/reviews" component={reviews}></Route>
        <Route exact path="/ExperiencePage" component={ExperiencePage}></Route>
        <Route exact path="/DirectionsPage" component={DirectionsPage}></Route>
        <Route exact path="/ResumePage" component={ResumePage}></Route>
        <Route exact path="/ContactUsPage" component={ContactUsPage}></Route>
        <Route
          exact
          path="/SubmitReviewPage"
          component={SubmitReviewPage}
        ></Route>
        <Route exact path="/VeteransPage" component={VeteransPage}></Route>
        <Route exact path="/SeniorsPage" component={SeniorsPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      
      </Switch>
    </BrowserRouter>
  )
}

export default Router
