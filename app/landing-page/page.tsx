import { Suspense } from 'react'
import { IntersectionProvider } from '@/context/intersectionContext'
import LandingPageComponent from '@/component/landing-page/LandingPage'

const LandingPage = async () => {

    return (
        <IntersectionProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <LandingPageComponent />
            </Suspense>
        </IntersectionProvider>
    )
}

export default LandingPage
