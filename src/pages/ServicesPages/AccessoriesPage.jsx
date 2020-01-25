import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const AccessoriesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Accessories'}
        secondOneUrl={'/ServicesPages/AccessoriesPage'}
      />
      <h1 className="servicesTitle">Lift Kits / Accessories</h1>
      <p className="servicesBodyText">
        Swander’s Automotive is a Rough Country Dealer/Distributor. We recognize
        the quality that has made Rough Country the leading supplier of off road
        parts and accessories. We offer a complete line of lift kits, lighting,
        winches, wheels, tires, steps, bumpers, bed covers, floor liners,
        grills, bull bars, and more for most makes and models. Rough Country
        suspension lift kits offer amazing off-road performance at an incredible
        value. Whether you’re looking to run larger tires, give your vehicle a
        more aggressive look, or achieve better performance on the trails, we
        have the right lift kit for you which is backed by our Lifetime Parts
        Replacement Guarantee. Our team of ASE certified professionals will
        gladly go over options and help you find the perfect upgrades for your
        truck, jeep, or SUV.
      </p>{' '}
    </Page>
  )
}

export default AccessoriesPage
