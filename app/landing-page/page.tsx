import LandingPageComponent from '@/component/landing-page/LandingPage'
import { IntersectionProvider } from '@/context/intersectionContext'

const LandingPage = async () => {

    return (
        <IntersectionProvider>
            <LandingPageComponent />
        </IntersectionProvider>
    )
}

export default LandingPage
