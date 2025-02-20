import AudioCards from "../../components/mantras/audia-card"
import MantraCards from "../../components/mantras/mantra-cards"
import MantraHero from "../../components/mantras/mantras-hero"


const MantraPedia = () => {
    return (
        <>
            <div>
                <MantraHero />
            </div>
            <div className="w-full min-h-52 p-3 py-8 bg-[#f1efea]">
                <h1 className="text-xl font-bold text-red-600 text-center">Mantras - The Sacred Vibrations of the Universe</h1>
                <div className="w-[80%] mx-auto text-center">
                    <span className="text-[#411900] text-center">Of course, the word Rama appears in Vedas but that refers to the Supreme being or a Divine manifestation of God. Rama means all pervading. Vedas don’t refer to Maryada Purushotam Shri Ram Chandra ji, the king of Ayodhya. Shri Ram Chandra ji studied Vedas in their gurukul life. The period of Shri Ram Chandra ji, undoubtedly was Treta yuga, the second age, whereas Vedas were given to the rishis just after the human creation i.e. the beginning of Satayuga, the first age.
                    </span>
                </div>
            </div>
            <div>
                <MantraCards />
            </div>
            <div>
                <AudioCards />
            </div>
        </>
    )
}

export default MantraPedia