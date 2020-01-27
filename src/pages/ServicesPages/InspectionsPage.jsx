import React from 'react'
import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const InspectionsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Inspections'}
        secondOneUrl={'/ServicesPages/InspectionsPage'}
      />
      <h1 className="servicesTitle">Digital Vehicle Inspection</h1>
      <p className="servicesBodyText">
        With every repair, Swander’s Automotive offers all of our customers a 27
        pt. digital courtesy inspection sent directly to any smart phone or
        email address. An ASE certified technician will visually inspect your
        tires, belts, lights, wipers, hoses, brakes, suspension, and more. Your
        battery will be tested, fluid levels topped, and tire pressures
        adjusted. Our digital inspections are thorough and include technician
        notes, pictures, and sometimes videos. The digital inspection will
        evaluate items with a 3-color rating system: 1.RED: In need of immediate
        attention--possible safety issue. 2.YELLOW: Maintenance items due by
        vehicle’s mileage--suggest repair, replacement, or service but not an
        emergency. 3.GREEN: Great! No need of attention at this current time!
        These ratings assure that you are aware of which repairs need immediate
        attention, which repairs may need attention in the near future, and
        areas that are in great shape. At Swander’s Automotive we will never
        attempt to sell you unnecessary repairs or services. Our goal is to
        treat your vehicle as one of our own. We will only suggest items that we
        would (and do) perform on our own vehicles. At Swander’s Automotive we
        are committed to safety and longevity of your vehicle. It is our goal
        that after each visit you have a complete understanding of the overall
        condition of your vehicle. We feel that prevention is the best medicine
        and thorough inspections are the best way to save you time, money, and
        future headaches.
      </p>{' '}
    </Page>
  )
}

export default InspectionsPage
