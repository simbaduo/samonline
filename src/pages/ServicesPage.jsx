import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import { NavLink } from 'react-router-dom'

const ServicesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'Services'} nextOneUrl={'/ServicesPage'} />
      <div className="servicesContainer">
        <div className="servicesBox">
          <ul className="servicesList">
            <li>
              <a className="servicePageLinks" href="/ServicesPages/ACPage">
                Air Conditioning
              </a>
            </li>
            <li>
              <a
                className="servicePageLinks"
                href="/ServicesPages/AlignmentPage"
              >
                Alignments
              </a>
            </li>
            <li>Automobile Detailing</li>
            <li>
              <a className="servicePageLinks" href="/ServicesPages/BatteryPage">
                Batteries / Alternators / Starters
              </a>
            </li>
            <li>
              <a className="servicePageLinks" href="/ServicesPages/BrakesPage">
                Brakes
              </a>
            </li>
            <li>Cooling System Flush</li>

            <li>
              <a
                className="servicePageLinks"
                href="/ServicesPages/DiagnosticsPage"
              >
                Diagnostics / Check Engine Light
              </a>
            </li>
            <li>
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
            <li className="nonLinkedServiceItem">
              Heating &amp; Cooling Services
            </li>

            <li>
              <a className="servicePageLinks" href="/ServicesPages/HosesPage">
                Hoses / Radiators / Water Pumps (Cooling System)
              </a>
            </li>
            <li className="nonLinkedServiceItem">Lighting</li>

            <li>
              <a
                className="servicePageLinks"
                href="/ServicesPages/AccessoriesPage"
              >
                Lift Kits / Accessories
              </a>
            </li>
            <li>
              <a className="servicePageLinks" href="/ServicesPages/MiscPage">
                Misc. / Additional Services
              </a>
            </li>
            <li>
              <a
                className="servicePageLinks"
                href="/ServicesPages/OilChangePage"
              >
                Oil &amp; Filter Change
              </a>
            </li>
            <li>
              <a
                className="servicePageLinks"
                href="/ServicesPages/SteeringPage"
              >
                Suspension / Steering
              </a>
            </li>
            <li>
              <a className="servicePageLinks" href="/ServicesPages/TuneUpPage">
                Tune Up / Preventative Maintenance
              </a>
            </li>
            <li>
              <a className="servicePageLinks" href="/ServicesPages/TiresPage">
                Tires
              </a>
            </li>
            <li>
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
