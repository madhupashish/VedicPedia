
import { Card } from "../../../components/ui/card";
import AccordionDemo from "../faqs/page";

const FaqsArticles = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-7 p-4">
            <div className="w-full lg:w-2/5 min-h-screen bg-[#713700ea] p-5 rounded-lg">
                <h1 className="text-lg text-[#EDE6D6] font-semibold text-center p-5">Frequently Asked Questions</h1>
                <AccordionDemo />
            </div>

            <div className="w-full lg:w-3/5">
                <div className="bg-[#f8dfa3] p-3 flex flex-wrap gap-4 justify-center items-center">

                    <Card className="bg-[#d97706] min-w-[180px] w-full sm:w-[180px] h-72 p-5 rounded-lg">
                        <h2 className="text-lg text-white font-bold text-center">ऋग्वेद (Rigveda)</h2>
                        <br />
                        <p className="text-sm text-white text-center mt-2">
                            The oldest of the four Vedas, consisting of hymns dedicated to deities like Agni, Indra, and Soma.
                        </p>
                    </Card>

                    <Card className="bg-[#713700bc] min-w-[180px] w-full sm:w-[180px] h-72 p-5 rounded-lg">
                        <h2 className="text-lg text-[#EDE6D6] font-bold text-center">यजुर्वेद (Yajurveda)</h2>
                        <br />
                        <p className="text-sm text-[#EDE6D6] text-center mt-2">
                            Contains sacred mantras for rituals and sacrifices, guiding priests in their sacred duties.
                        </p>
                    </Card>

                    <Card className="bg-[#7c4a1a] min-w-[180px] w-full sm:w-[180px] h-72 p-5 rounded-lg">
                        <h2 className="text-lg text-white font-bold text-center">सामवेद (Samaveda)</h2>
                        <br />
                        <p className="text-sm text-white text-center mt-2">
                            Known as the "Veda of melodies," it forms the basis of Indian classical music.
                        </p>
                    </Card>

                    <Card className="bg-[#3f220b] min-w-[180px] w-full sm:w-[180px] h-72 p-5 rounded-lg">
                        <h2 className="text-lg text-[#EDE6D6] font-bold text-center">अथर्ववेद (Atharvaveda)</h2>
                        <br />
                        <p className="text-sm text-[#EDE6D6] text-center mt-2">
                            Focuses on everyday life, including medicine, society, and mystical rituals.
                        </p>
                    </Card>

                    <Card className="bg-[#e11d48] min-w-[180px] w-full sm:w-[180px] h-72 p-5 rounded-lg">
                        <h2 className="text-lg text-white font-bold text-center">गायत्री मंत्र (Gayatri Mantra)</h2>
                        <br />
                        <p className="text-sm text-white text-center mt-2">
                            “ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्।”
                        </p>
                    </Card>

                    <Card className="bg-[#16a34a] min-w-[180px] w-full sm:w-[180px] h-72 p-5 rounded-lg">
                        <h2 className="text-lg text-white font-bold text-center">महामृत्युंजय मंत्र</h2>
                        <br />
                        <p className="text-sm text-white text-center mt-2">
                            “ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥”
                        </p>
                    </Card>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
                    <button className="bg-[#492401cb] text-center text-lg font-bold text-white w-full sm:w-[40%] py-2 px-5 rounded-lg">Ask Here</button>
                    <button className="bg-[#492401] text-center text-lg font-bold text-white w-full sm:w-[40%] py-2 px-5 rounded-lg">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default FaqsArticles;
