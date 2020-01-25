import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const HosesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Hoses / Radiators / Starters'}
        secondOneUrl={'/ServicesPages/HosesPage'}
      />
      <h1 className="servicesTitle">Hoses / Radiators / Water Pumps</h1>
      <p className="servicesBodyText">
        Your vehicle’s cooling system is designed to cool and protect both your
        engine and transmission. On some vehicles it also plays a part in the
        proper functioning of the air conditioning, charging, and other systems.
        If your vehicle develops even a small leak it can quickly turn into a
        major and sometimes expensive problem. Your cooling system uses a
        specific antifreeze which will break down over time---this can cause
        your vehicle to run hotter than desired. Rust can also build up
        developing clogs or deteriorating the inside of components. It is vital
        that your cooling system be flush regularly while replacing the
        antifreeze in the system. Hoses should also be replace sometime during
        the life of your vehicle to prevent roadside breakdowns. Give us a call
        at Swander’s Automotive to have your cooling system inspected or
        serviced today.
      </p>{' '}
    </Page>
  )
}

export default HosesPage
