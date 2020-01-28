import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import { NavLink } from 'react-router-dom'

const ServicesPage = () => {
  return (
    <Page withPadding={false}>
      <BreadcrumbsComponent nextOne={'Services'} nextOneUrl={'/ServicesPage'} />
      <div className="servicesContainer">
        <div className="servicesBox">
        <ul className="servicesList">
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/ACPage">
              Air Conditioning
            </a>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/AlignmentPage">
              Alignments
            </a>
            <li className="nonLinkedServiceItem">Automobile Detailing</li>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/BatteryPage">
              Batteries / Alternators / Starters
            </a>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/BrakesPage">
              Brakes
            </a>
          </li>
          <li className="nonLinkedServiceItem">Cooling System Flush</li>

          <li className="servicesListItem">
            <a
              className="servicePageLinks"
              href="/ServicesPages/DiagnosticsPage"
            >
              Diagnostics / Check Engine Light
            </a>
          </li>
          <li className="servicesListItem">
            <a
              className="servicePageLinks"
              href="/ServicesPages/InspectionsPage"
            >
              Digital Courtesy Inspections
            </a>
          </li>

          <li className="nonLinkedServiceItem">Electrical</li>
          <li className="nonLinkedServiceItem">Fluid Exchanges</li>
          <li className="nonLinkedServiceItem">Front End Repair</li>
          <li className="nonLinkedServiceItem">Fuel Injection Service</li>
          <li className="nonLinkedServiceItem">Headlight Restoration</li>
          <li className="nonLinkedServiceItem">Heating &amp; Cooling Services</li>

          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/HosesPage">
              Hoses / Radiators / Water Pumps (Cooling System)
            </a>
          </li>
          <li className="nonLinkedServiceItem">Lighting</li>

          <li className="servicesListItem">
            <a
              className="servicePageLinks"
              href="/ServicesPages/AccessoriesPage"
            >
              Lift Kits / Accessories
            </a>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/MiscPage">
              Misc. / Additional Services
            </a>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/OilChangePage">
              Oil &amp; Filter Change
            </a>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/SteeringPage">
              Suspension / Steering
            </a>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/TuneUpPage">
              Tune Up / Preventative Maintenance
            </a>
          </li>
          <li className="servicesListItem">
            <a className="servicePageLinks" href="/ServicesPages/TiresPage">
              Tires
            </a>
          </li>
          <li className="servicesListItem">
            <a
              className="servicePageLinks"
              href="/ServicesPages/AccessoriesPage"
            >
              Vehicle Customization
            </a>
          </li>
        </ul>
        </div>
      </div>
    </Page>
  )
}

export default ServicesPage
