import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import { NavLink } from 'react-router-dom'

const ServicesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'Services'} nextOneUrl={'/ServicesPage'} />
      <div className="servicesContainer">
        <ul className="servicesList">
          <li className="servicesListItem">
            <a href="/ServicesPages/ACPage">Air Conditioning</a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/AlignmentPage">Alignments</a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/BatteryPage">
              Batteries / Alternators / Starters
            </a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/BrakesPage">Brakes</a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/DiagnosticsPage">
              Diagnostics / Check Engine Light
            </a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/InspectionsPage">
              Digital Courtesy Inspections
            </a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/HosesPage">
              Hoses / Radiators / Water Pumps (Cooling System)
            </a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/AccessoriesPage">Lift Kits / Accessories</a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/MiscPage">Misc. / Additional Services</a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/OilChangePage">Oil & Filter Change</a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/SteeringPage">Suspension / Steering</a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/TuneUpPage">
              Tune Up / Preventative Maintenance
            </a>
          </li>
          <li className="servicesListItem">
            <a href="/ServicesPages/TiresPage">Tires</a>
          </li>
        </ul>
      </div>
    </Page>
  )
}

export default ServicesPage
