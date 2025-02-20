import VedicCard from "../../components/vedic-card-section/vedic-card";
import VedicHero from "../../components/vedic-section/vedic-hero";
import VedicSectionAbout from "../../components/vedic-section/vedic-section-about";


export default function Vedas() {
    return (
        <>
            <div >
                <VedicHero />
            </div>
            <div>
                <VedicSectionAbout/>
            </div>
            <div>
                <VedicCard/>
            </div>
        </>
    )
}
