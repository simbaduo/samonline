import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const TuneUpPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Prevent'}
        secondOneUrl={'/ServicesPages/TuneUpPage'}
      />
      <h1 className="servicesTitle">Tune Up / Preventative Maintenance</h1>
      <p className="servicesBodyText">
        Can you imagine life without your vehicle? Nothing brings your daily
        routine to a halt like an inoperable vehicle. Unfortunately, buses don’t
        operate on your schedule and calling an UBER can get expensive. We know
        that you have places to go and people to see which is why we at
        Swander’s Automotive will do everything possible to keep you cruising
        down the road. There’s an old adage that goes, “an ounce of prevention
        is worth a pound of cure”. It simply means that it’s usually easier (and
        cheaper) to prevent a problem versus fixing a problem after it happens.
        We feel that this applies 100% when it comes to taking care of your
        vehicle. There are many consequences that can result from neglecting the
        regular maintenance on your vehicles: costly break-downs, tow charges,
        additional damage to your vehicle, the inconvenience of going without
        your vehicle at an unexpected time, ruining your engine or transmission
        - just to name a few. At Swander’s Automotive, the safety of you and
        your passengers as well as your vehicle’s dependability are our main
        concerns. . Some service items that should be on a regular schedule are
        oil changes, transmission fluid exchanges, tune ups, fuel injection
        cleanings, and cooling system flushes, filter changes, and others. Most
        people will agree that preventive maintenance is probably one of the
        biggest ways you can save money - not actively, but in the long term.
        Spending a little money now on the basics will save you from more costly
        repairs later on. Vehicles today are built to run for 150,000 miles or
        more. Regular maintenance service is the best thing you can do to make
        sure your car lasts that long. Call us here at Swander’s Automotive and
        we will help set up your plan today.
      </p>{' '}
    </Page>
  )
}
export default TuneUpPage
