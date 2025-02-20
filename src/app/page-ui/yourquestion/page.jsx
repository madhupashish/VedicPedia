import Link from 'next/link';
import { Card } from '../../../components/ui/card';

const AskYourQuestion = () => {
    return (
        <div className="w-full p-6 py-10 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 bg-[#eee3c9]">
            <div className="w-full md:w-1/3 text-center md:text-left">
                <h1 className="text-2xl font-bold text-red-600">Ask Your Question</h1>
                <p className="mt-3 text-neutral-800">
                    Similarly, Vedas refer to ‘Krishna’ also, but that refers to the Omnipotent Lord, 
                    God, who induces all beings to work. Thus, Vedas don’t refer to Yogiraj Shri Krishna ji, 
                    the king of Dwarika.
                </p>
                <button className="bg-orange-500 text-lg font-bold text-white w-3/4 md:w-[60%] py-2 px-5 rounded-lg mt-4">
                    Ask Here
                </button>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex justify-center gap-3">
                    <Card className="bg-[#f8dfa3] min-w-[120px] md:min-w-[140px] w-fit h-36 p-5 flex items-center justify-center">
                        <h2 className="text-lg text-[#492401] font-semibold text-center">Vedas</h2>
                    </Card>
                    <Card className="bg-[#492401] min-w-[120px] md:min-w-[140px] w-fit h-36 p-5 flex items-center justify-center">
                        <h2 className="text-lg text-[#f8dfa3] font-semibold text-center">Upanishads</h2>
                    </Card>
                </div>
                <Link href="/vedas">
                    <button className="bg-orange-500 text-lg font-bold text-white w-full py-2 px-5 rounded-lg mt-3">
                        Explore Our Sacred Texts
                    </button>
                </Link>
            </div>

            <div>
                <Link href="/mantrapedia">
                    <Card className="bg-[#f8dfa3] p-5 min-w-[140px] w-fit h-fit cursor-pointer text-center">
                        <h1 className="text-lg font-bold text-red-600 mb-3">Mantras</h1>
                        <h2 className="mb-3 font-semibold text-[#7c4a1a]">Featuring Today</h2>
                        <h2 className="mb-3 font-semibold text-[#492401]">Mantra Featuring Today Name</h2>
                        <img 
                            src="https://img.icons8.com/?size=100&id=4nJj4Jt11SNK&format=png&color=492401"
                            className="w-10 h-10 mx-auto"
                            alt="Mantra Icon"
                        />
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default AskYourQuestion;
