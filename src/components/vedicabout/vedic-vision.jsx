import { Card } from "../ui/card";

const VedicVision = () => {
    return (
        <div className="w-full p-5 flex justify-center items-center bg-[#F5F1ED]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
                <Card className="rounded-3xl h-full p-6 bg-[#F7D9C4] flex flex-col">
                    <h1 className="text-[#411900] text-2xl font-semibold">Our Vision & Mission</h1>
                    <p className="text-[#411900] text-base mt-4 flex-1">
                        Our mission is to preserve and spread the ancient wisdom of the Vedas, making it accessible to everyone.
                        We aim to bridge the gap between traditional Vedic teachings and modern life, guiding individuals toward 
                        a balanced and meaningful existence.
                    </p>
                    <p className="text-[#411900] text-base mt-2">
                        By integrating ancient knowledge with today's world, we empower people to discover their spiritual path 
                        and unlock their full potential.
                    </p>
                </Card>

                <Card className="rounded-3xl h-full p-6 bg-[#ECE2E1] flex flex-col">
                    <h1 className="text-[#411900] text-2xl font-semibold">Who We Are</h1>
                    <p className="text-[#411900] text-base mt-4 flex-1">
                        We are a collective of spiritual seekers, scholars, and educators dedicated to sharing the teachings 
                        of the Vedas. Our team includes experienced practitioners in meditation, yoga, and Sanskrit scriptures.
                    </p>
                    <p className="text-[#411900] text-base mt-2">
                        Our goal is to create a supportive community where individuals can learn, practice, and grow together 
                        in their spiritual journey.
                    </p>
                </Card>

                <Card className="rounded-3xl h-full p-6 bg-[#F7D9C4] flex flex-col">
                    <h1 className="text-[#411900] text-2xl font-semibold">Why Vedic Knowledge Matters</h1>
                    <p className="text-[#411900] text-base mt-4 flex-1">
                        The Vedas hold profound insights into the nature of life, consciousness, and the universe. They offer 
                        timeless wisdom on ethics, self-discipline, and the path to self-realization.
                    </p>
                    <p className="text-[#411900] text-base mt-2">
                        Understanding Vedic principles can lead to inner peace, a healthier lifestyle, and deeper spiritual 
                        fulfillment. It helps us navigate life's challenges with wisdom and clarity.
                    </p>
                </Card>

            </div>
        </div>
    );
};

export default VedicVision;
