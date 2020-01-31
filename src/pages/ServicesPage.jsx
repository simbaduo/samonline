import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import { NavLink } from 'react-router-dom'

const ServicesPage = () => {
  return (
    <Page withPadding={false}><div className="servicesBody">
                <BreadcrumbsComponent nextOne={'Services'} nextOneUrl={'/ServicesPage'} />

      <div className="servicesContainer">
        <div className="servicesBox">

          <div className="servicesListContainer">

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
            <li><a className="servicePageLinks" href="/ServicesPages/MiscPage">
              Automobile Detailing</a></li>
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
            <li><a className="servicePageLinks" href="/ServicesPages/HosesPage">Cooling System Flush</a></li>

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

            <li className="nonLinkedServiceItem"> <a
                className="servicePageLinks"
                href="/ServicesPages/DiagnosticsPage"
              >Electrical</a></li>
            <li className="nonLinkedServiceItem"><a className="servicePageLinks" href="/ServicesPages/MiscPage">Fluid Exchanges</a></li>
            <li className="nonLinkedServiceItem"><a
                className="servicePageLinks"
                href="/ServicesPages/SteeringPage"
              >Front End Repair</a></li>
            <li className="nonLinkedServiceItem">              <a className="servicePageLinks" href="/ServicesPages/TuneUpPage">
Fuel Injection Service</a></li>
            <li className="nonLinkedServiceItem"><a className="servicePageLinks" href="/ServicesPages/MiscPage">Headlight Restoration</a></li>
            <li className="nonLinkedServiceItem"><a className="servicePageLinks" href="/ServicesPages/HosesPage">
              Heating &amp; Cooling Services</a>
            </li>

            <li>
              <a className="servicePageLinks" href="/ServicesPages/HosesPage">
                Hoses / Radiators / Water Pumps
              </a>
            </li>
            <li>
              <a
                className="servicePageLinks"
                href="/ServicesPages/AccessoriesPage"
              >
                Lift Kits / Accessories
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
            <li>
              <a className="servicePageLinks" href="/ServicesPages/MiscPage">
                Misc. / Additional Services
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
      </div>
    </Page>
  )
}

export default ServicesPage
