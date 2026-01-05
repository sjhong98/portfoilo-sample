'use client'

import Header from '@/component/landing-page/1.Header'
import Footer from '@/component/landing-page/13.Footer'
import LandingLayout from '@/component/landing-page/LandingLayout'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

import { useInView } from 'react-intersection-observer'
import { redirect, useSearchParams } from 'next/navigation'

const Hero = dynamic(() => import('@/component/landing-page/2.Hero'), { ssr: true })
const AIAutomation = dynamic(() => import('@/component/landing-page/3.AIAutomation'), { ssr: true })
const AI247Operation = dynamic(() => import('@/component/landing-page/4.AI247Operation'), { ssr: true })
const BusinessIntelligence = dynamic(() => import('@/component/landing-page/5.BusinessIntelligence'), { ssr: true })
const ClientFocusedDevelopment = dynamic(() => import('@/component/landing-page/6.ClientFocusedDevelopment'), {
  ssr: true
})
const Team = dynamic(() => import('@/component/landing-page/7.Team'), { ssr: true })
const Exclusive = dynamic(() => import('@/component/landing-page/8.Exclusive'), { ssr: true })
const SharedPlatform = dynamic(() => import('@/component/landing-page/9.SharedPlatform'), { ssr: true })
const DataMigration = dynamic(() => import('@/component/landing-page/10.DataMigration'), { ssr: true })
const TryForFree = dynamic(() => import('@/component/landing-page/11.TryForFree'), { ssr: true })
const CustomerService247 = dynamic(() => import('@/component/landing-page/12.CustomerService247'), { ssr: true })

export default function LandingPageComponent() {
  const [initialRendered, setInitialRendered] = useState(false)
  const searchParams = useSearchParams()

  // Handle loading state

  // For Page specific settings
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // <KakaoContactButtonController visible={false}>
      <LandingLayout>
        <Header initialRendered={initialRendered} />
        <main>
          <Hero initialRendered={initialRendered} setInitialRendered={setInitialRendered} />
          <AIAutomation />
          <AI247Operation />
          <BusinessIntelligence />
          <ClientFocusedDevelopment />
          <Team />
          <Exclusive />
          <SharedPlatform />
          <DataMigration />
          <TryForFree />
          <CustomerService247 />
        </main>
        <Footer />
      </LandingLayout>
    // </KakaoContactButtonController>
  )
}
