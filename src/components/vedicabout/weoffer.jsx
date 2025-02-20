const WhatWeOffer = () => {
    return (
        <div className="w-full p-5 flex justify-center items-center bg-[#F7D9C4]">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-[#411900] text-3xl md:text-4xl font-extrabold">What We Offer</h1>
                    <br />
                    <ul className="space-y-3">
                        <li className="text-neutral-700"><span className="text-black font-bold">Spiritual Growth</span> - Deepen your connection with the divine.</li>
                        <li className="text-neutral-700"><span className="text-black font-bold">Mental Clarity & Focus</span> - Enhance meditation and concentration.</li>
                        <li className="text-neutral-700"><span className="text-black font-bold">Healing & Protection</span> - Purify the mind and body from negativity.</li>
                        <li className="text-neutral-700"><span className="text-black font-bold">Manifestation & Success</span> - Attract positive energy and abundance.</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img className="max-w-60 md:max-w-72 h-auto" src="/images/vh1.png" alt="Vedic Image" />
                </div>
            </div>
        </div>
    );
}

export default WhatWeOffer;
