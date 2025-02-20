import { Card } from "../ui/card";

const MantraCards = () => {
    return (
        <div className="w-full flex justify-center items-center bg-[#EDE6D6] p-5 min-h-80">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-5xl">
                <Card className="h-full p-7 bg-[#f0e0bc] rounded-2xl flex flex-col">
                    <h1 className="text-xl text-[#713700cd] font-bold">The Significance of Mantras</h1>
                    <br />
                    <ul className="space-y-2 flex-1">
                        <li className="text-neutral-600"><span className="text-black font-bold">Spiritual Growth</span> - Deepen your connection with the divine.</li>
                        <li className="text-neutral-600"><span className="text-black font-bold">Mental Clarity & Focus</span> - Enhance meditation and concentration.</li>
                        <li className="text-neutral-600"><span className="text-black font-bold">Healing & Protection</span> - Purify the mind and body from negativity.</li>
                        <li className="text-neutral-600"><span className="text-black font-bold">Manifestation & Success</span> - Attract positive energy and abundance.</li>
                    </ul>
                </Card>
                <Card className="h-full p-7 bg-[#e88c376d] rounded-2xl flex flex-col">
                    <h1 className="text-xl text-[#713700cd] font-bold">How to Chant</h1>
                    <br />
                    <ul className="space-y-2 flex-1">
                        <li className="text-neutral-600"><span className="text-black font-bold">Find a Quiet Space</span> - Minimize distractions for deeper focus.</li>
                        <li className="text-neutral-600"><span className="text-black font-bold">Use Proper Pronunciation</span> - Chant with clarity and intent.</li>
                        <li className="text-neutral-600"><span className="text-black font-bold">Breathe Mindfully</span> - Sync your breath with the chant.</li>
                        <li className="text-neutral-600"><span className="text-black font-bold">Stay Consistent</span> - Regular practice amplifies the effects.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default MantraCards;
