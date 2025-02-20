import JoinJourny from "../../components/vedicabout/join-journy"
import VedicAbout from "../../components/vedicabout/vedic-about"
import VedicSecond from "../../components/vedicabout/vedic-second"
import VedicVision from "../../components/vedicabout/vedic-vision"
import WhatWeOffer from "../../components/vedicabout/weoffer"

const AboutUs = () => {
    return (
        <>
            <VedicAbout />
            <div>
                <VedicSecond />
            </div>
            <div>
                <VedicVision/>
            </div>
            <div>
                <WhatWeOffer/>
            </div>
            <div>
                <JoinJourny/>
            </div>
        </>
    )
}

export default AboutUs