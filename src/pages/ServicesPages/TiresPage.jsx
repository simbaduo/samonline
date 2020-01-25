import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const TiresPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Tires'}
        secondOneUrl={'/ServicesPages/TiresPage'}
      />
      <h1 className="servicesTitle">Tires</h1>
      <p className="servicesBodyText">
        Tires are the single most important safety feature on your vehicle. They
        are the only thing that connects the car to the road. Life-saving
        technologies like anti-lock brakes and electronic stability control
        cannot do their job if your tires don’t have a good grip on the road.
        Nothing lasts forever and you will typically need to replace tires two
        or more times throughout the life of a typical vehicle. Despite advances
        in longer lasting tires, actual tread life will vary by vehicle type,
        tire type, driving styles, and even road or weather conditions. Proper
        maintenance and responsible driving can maximize the mileage that a set
        of tires will last. Here at Swander’s Automotive we offer several
        professional services to keep you safe, protect your investment, and
        help your tires last as long as possible. ALIGNMENTS are mainly
        performed to let the suspension and steering systems operate at their
        desired angles and reduce tire wear. BALANCING is performed to eliminate
        or prevent vibrations while driving. Sometimes you will feel a wobble
        through the steering wheel indicating tire balancing is needed. REPAIRS
        An incorrectly repaired tire could pose a safety hazard to you. At
        Swander’s Automotive our experts will determine whether your tire is
        able to be repaired or if it needs to be replaced. If the tire is
        repairable, our certified technicians will make sure it is repaired
        correctly and get you back on the road as quickly as possible. TIRE
        ROTATION is moving the wheels and tires of a vehicle from one position
        to another to ensure even tire wear which extends the useful life of a
        set of tires. All vehicles and tires are different but as a general rule
        tires should be rotated every 5,000 to 8,000 miles. TIRE PRESSURE
        SENSORS are electronic devices placed in each wheel by manufacturers to
        help you know and properly maintain even tire pressure. Knowing and
        maintaining the correct pressures will help your tires last longer,
        improve gas mileage, and prevent you from being stuck with a flat tire.
        These sensors do eventually go bad. They need to be programmed to your
        specific vehicle with the proper electronic tools. At Swander’s
        Automotive we understand the importance of your tires and proper care.
        If it is determined that you need tires, it is essential to identify the
        best tires for your vehicle and driving demands. We offer most major
        brands of tires. Trust the experts at Swander’s Automotive to help you
        with your tire needs.
      </p>{' '}
    </Page>
  )
}

export default TiresPage
