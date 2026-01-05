import { IntersectionProvider } from '@/context/intersectionContext'
import LandingPageComponent from '@/component/landing-page/LandingPage'

const LandingPage = async () => {

    return (
        <IntersectionProvider>
            <LandingPageComponent />
        </IntersectionProvider>
    )
}

export default LandingPage
