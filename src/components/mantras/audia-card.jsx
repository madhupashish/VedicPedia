'use client';
import { useState, useRef } from "react";
import { Card } from "../ui/card";

const vedaData = {
    Rigveda: [
        { title: "Rigveda Mantra 1", bgColor: "#ff9a3d", audioSrc: "/audio/rigvedaudio/RV 01.001.01.mp3" },
        { title: "Rigveda Mantra 2", bgColor: "#fff", audioSrc: "/audio/rigvedaudio/RV 01.001.02.mp3" },
        { title: "Rigveda Mantra 3", bgColor: "#FFDDC1", audioSrc: "/audio/rigvedaudio/RV 01.001.03.mp3" },
        { title: "Rigveda Mantra 4", bgColor: "#FFABAB", audioSrc: "/audio/rigvedaudio/RV 01.001.04.mp3" },
        { title: "Rigveda Mantra 5", bgColor: "#FFC3A0", audioSrc: "/audio/rigvedaudio/RV 01.001.05.mp3" },
        { title: "Rigveda Mantra 6", bgColor: "#D5AAFF", audioSrc: "/audio/rigvedaudio/RV 01.001.06.mp3" },
        { title: "Rigveda Mantra 7", bgColor: "#85E3FF", audioSrc: "/audio/rigvedaudio/RV 01.001.07.mp3" },
        { title: "Rigveda Mantra 8", bgColor: "#B9FBC0", audioSrc: "/audio/rigvedaudio/RV 01.001.08.mp3" },
        { title: "Rigveda Mantra 9", bgColor: "#fff", audioSrc: "/audio/rigvedaudio/RV 01.001.09.mp3" },
        { title: "Rigveda Mantra 10", bgColor: "#FFCBC1", audioSrc: "/audio/rigvedaudio/RV 01.002.01.mp3" },
        { title: "Rigveda Mantra 11", bgColor: "#FF9CEE", audioSrc: "/audio/rigvedaudio/RV 01.002.02.mp3" },
        { title: "Rigveda Mantra 12", bgColor: "#FCF6BD", audioSrc: "/audio/rigvedaudio/RV 01.002.03.mp3" },
        { title: "Rigveda Mantra 13", bgColor: "#fff", audioSrc: "/audio/rigvedaudio/RV 01.002.04.mp3" },
        { title: "Rigveda Mantra 14", bgColor: "#F7D9C4", audioSrc: "/audio/rigvedaudio/RV 01.002.05.mp3" },
        { title: "Rigveda Mantra 15", bgColor: "#F2C6DE", audioSrc: "/audio/rigvedaudio/RV 01.002.06.mp3" },
        { title: "Rigveda Mantra 16", bgColor: "#fff", audioSrc: "/audio/rigvedaudio/RV 01.002.07.mp3" },
        { title: "Rigveda Mantra 17", bgColor: "#C4A7E7", audioSrc: "/audio/rigvedaudio/RV 01.002.08.mp3" },
        { title: "Rigveda Mantra 18", bgColor: "#B5EAEA", audioSrc: "/audio/rigvedaudio/RV 01.002.09.mp3" },
        { title: "Rigveda Mantra 19", bgColor: "#A2D2FF", audioSrc: "/audio/rigvedaudio/RV 01.003.01.mp3" },
        { title: "Rigveda Mantra 20", bgColor: "#fff", audioSrc: "/audio/rigvedaudio/RV 01.003.02.mp3" },
        { title: "Rigveda Mantra 21", bgColor: "#FFDAC1", audioSrc: "/audio/rigvedaudio/RV 01.003.03.mp3" },
        { title: "Rigveda Mantra 22", bgColor: "#B8F2E6", audioSrc: "/audio/rigvedaudio/RV 01.003.04.mp3" },
        { title: "Rigveda Mantra 23", bgColor: "#FFD8BE", audioSrc: "/audio/rigvedaudio/RV 01.003.06.mp3" },
        { title: "Rigveda Mantra 24", bgColor: "#fff", audioSrc: "/audio/rigvedaudio/RV 01.003.07.mp3" },
        { title: "Rigveda Mantra 25", bgColor: "#FFA69E", audioSrc: "/audio/rigvedaudio/RV 01.003.08.mp3" },
    ],
    Atharvaveda: [
        { title: "Atharvaveda Mantra 1", bgColor: "#F2D2BD", audioSrc: "/audio/atharvedaudio/AV 01.001.01.mp3" },
        { title: "Atharvaveda Mantra 2", bgColor: "#A0E7E5", audioSrc: "/audio/atharvedaudio/AV 01.001.02.mp3" },
        { title: "Atharvaveda Mantra 3", bgColor: "#fff", audioSrc: "/audio/atharvedaudio/AV 01.001.03.mp3" },
        { title: "Atharvaveda Mantra 4", bgColor: "#F7D9C4", audioSrc: "/audio/atharvedaudio/AV 01.001.04.mp3" },
        { title: "Atharvaveda Mantra 5", bgColor: "#E4C1F9", audioSrc: "/audio/atharvedaudio/AV 01.002.01.mp3" },
        { title: "Atharvaveda Mantra 6", bgColor: "#fff", audioSrc: "/audio/atharvedaudio/AV 01.002.02.mp3" },
        { title: "Atharvaveda Mantra 7", bgColor: "#C3B1E1", audioSrc: "/audio/atharvedaudio/AV 01.002.03.mp3" },
        { title: "Atharvaveda Mantra 8", bgColor: "#ACDDDE", audioSrc: "/audio/atharvedaudio/AV 01.002.04.mp3" },
        { title: "Atharvaveda Mantra 9", bgColor: "#fff", audioSrc: "/audio/atharvedaudio/AV 01.003.01.mp3" },
        { title: "Atharvaveda Mantra 10", bgColor: "#A2D2FF", audioSrc: "/audio/atharvedaudio/AV 01.003.02.mp3" },
        { title: "Atharvaveda Mantra 11", bgColor: "#B9FBC0", audioSrc: "/audio/atharvedaudio/AV 01.003.03.mp3" },
        { title: "Atharvaveda Mantra 12", bgColor: "#A0E7E5", audioSrc: "/audio/atharvedaudio/AV 01.003.04.mp3" },
        { title: "Atharvaveda Mantra 13", bgColor: "#D5AAFF", audioSrc: "/audio/atharvedaudio/AV 01.003.05.mp3" },
        { title: "Atharvaveda Mantra 14", bgColor: "#A9DEF9", audioSrc: "/audio/atharvedaudio/AV 01.003.06.mp3" },
        { title: "Atharvaveda Mantra 15", bgColor: "#fff", audioSrc: "/audio/atharvedaudio/AV 01.003.07.mp3" },
        { title: "Atharvaveda Mantra 16", bgColor: "#EAC7C7", audioSrc: "/audio/atharvedaudio/AV 01.003.08.mp3" },
        { title: "Atharvaveda Mantra 17", bgColor: "#B8A4C9", audioSrc: "/audio/atharvedaudio/AV 01.003.09.mp3" },
        { title: "Atharvaveda Mantra 18", bgColor: "#FFA69E", audioSrc: "/audio/atharvedaudio/AV 01.004.01.mp3" },
        { title: "Atharvaveda Mantra 19", bgColor: "#D6E2E9", audioSrc: "/audio/atharvedaudio/AV 01.004.02.mp3" },
        { title: "Atharvaveda Mantra 20", bgColor: "#A3C4F3", audioSrc: "/audio/atharvedaudio/AV 01.004.03.mp3" },
        { title: "Atharvaveda Mantra 21", bgColor: "#fff", audioSrc: "/audio/atharvedaudio/AV 01.004.04.mp3" },
        { title: "Atharvaveda Mantra 22", bgColor: "#B5B9D1", audioSrc: "/audio/atharvedaudio/AV 01.005.01.mp3" },
        { title: "Atharvaveda Mantra 23", bgColor: "#C3D8C5", audioSrc: "/audio/atharvedaudio/AV 01.005.02.mp3" },
        { title: "Atharvaveda Mantra 24", bgColor: "#A0E7E5", audioSrc: "/audio/atharvedaudio/AV 01.005.03.mp3" },
    ],
    Yajurveda: [
        { title: "Yajurveda Mantra 1", bgColor: "#F5DEB3", audioSrc: "/audio/yajurvedadio/YV 01.001.mp3" },
        { title: "Yajurveda Mantra 2", bgColor: "#D4A5A5", audioSrc: "/audio/yajurvedadio/YV 01.002.mp3" },
        { title: "Yajurveda Mantra 3", bgColor: "#B7B7A4", audioSrc: "/audio/yajurvedadio/YV 01.003.mp3" },
        { title: "Yajurveda Mantra 4", bgColor: "#fff", audioSrc: "/audio/yajurvedadio/YV 01.004.mp3" },
        { title: "Yajurveda Mantra 5", bgColor: "#CAD2C5", audioSrc: "/audio/yajurvedadio/YV 01.005.mp3" },
        { title: "Yajurveda Mantra 6", bgColor: "#D6E2E9", audioSrc: "/audio/yajurvedadio/YV 01.006.mp3" },
        { title: "Yajurveda Mantra 7", bgColor: "#D8A7B1", audioSrc: "/audio/yajurvedadio/YV 01.007.mp3" },
        { title: "Yajurveda Mantra 8", bgColor: "#FFA69E", audioSrc: "/audio/yajurvedadio/YV 01.008.mp3" },
        { title: "Yajurveda Mantra 9", bgColor: "#C3E5AE", audioSrc: "/audio/yajurvedadio/YV 01.009.mp3" },
        { title: "Yajurveda Mantra 10", bgColor: "#fff", audioSrc: "/audio/yajurvedadio/YV 01.010.mp3" },
        { title: "Yajurveda Mantra 11", bgColor: "#A9DEF9", audioSrc: "/audio/yajurvedadio/YV 01.011.mp3" },
        { title: "Yajurveda Mantra 12", bgColor: "#E5C2C0", audioSrc: "/audio/yajurvedadio/YV 01.012.mp3" },
        { title: "Yajurveda Mantra 13", bgColor: "#F5CDA7", audioSrc: "/audio/yajurvedadio/YV 01.013.mp3" },
        { title: "Yajurveda Mantra 14", bgColor: "#FF9B71", audioSrc: "/audio/yajurvedadio/YV 01.014.mp3" },
        { title: "Yajurveda Mantra 15", bgColor: "#B8F2E6", audioSrc: "/audio/yajurvedadio/YV 01.015.mp3" },
        { title: "Yajurveda Mantra 16", bgColor: "#E4C1F9", audioSrc: "/audio/yajurvedadio/YV 01.016.mp3" },
        { title: "Yajurveda Mantra 17", bgColor: "#fff", audioSrc: "/audio/yajurvedadio/YV 02.001.mp3" },
        { title: "Yajurveda Mantra 18", bgColor: "#FFE5D9", audioSrc: "/audio/yajurvedadio/YV 02.002.mp3" },
        { title: "Yajurveda Mantra 19", bgColor: "#A7BED3", audioSrc: "/audio/yajurvedadio/YV 02.003.mp3" },
        { title: "Yajurveda Mantra 20", bgColor: "#A0E7E5", audioSrc: "/audio/yajurvedadio/YV 02.004.mp3" },
        { title: "Yajurveda Mantra 21", bgColor: "#fff", audioSrc: "/audio/yajurvedadio/YV 02.005.mp3" },
        { title: "Yajurveda Mantra 22", bgColor: "#D4A5A5", audioSrc: "/audio/yajurvedadio/YV 02.006.mp3" },
        { title: "Yajurveda Mantra 23", bgColor: "#BEE1E6", audioSrc: "/audio/yajurvedadio/YV 02.007.mp3" },
        { title: "Yajurveda Mantra 24", bgColor: "#B1E5D3", audioSrc: "/audio/yajurvedadio/YV 02.008.mp3" },
        { title: "Yajurveda Mantra 25", bgColor: "#D8F3DC", audioSrc: "/audio/yajurvedadio/YV 02.009.mp3" },
        { title: "Yajurveda Mantra 26", bgColor: "#F5DEB3", audioSrc: "/audio/yajurvedadio/YV 02.010.mp3" },
        { title: "Yajurveda Mantra 27", bgColor: "#FF9CEE", audioSrc: "/audio/yajurvedadio/YV 02.011.mp3" },
        { title: "Yajurveda Mantra 28", bgColor: "#fff", audioSrc: "/audio/yajurvedadio/YV 02.012.mp3" },
        { title: "Yajurveda Mantra 29", bgColor: "#ACDDDE", audioSrc: "/audio/yajurvedadio/YV 02.013.mp3" },
        { title: "Yajurveda Mantra 30", bgColor: "#FFDAC1", audioSrc: "/audio/yajurvedadio/YV 02.015.mp3" },
        { title: "Yajurveda Mantra 31", bgColor: "#D4A5A5", audioSrc: "/audio/yajurvedadio/YV 02.016.mp3" },
        { title: "Yajurveda Mantra 32", bgColor: "#fff", audioSrc: "/audio/yajurvedadio/YV 02.017.mp3" },
        { title: "Yajurveda Mantra 33", bgColor: "#D8A7B1", audioSrc: "/audio/yajurvedadio/YV 02.018.mp3" },
        { title: "Yajurveda Mantra 34", bgColor: "#FFC8A25", audioSrc: "/audio/yajurvedadio/YV 02.019.mp3" },
    ],
    Samaveda: [
        { title: "Samaveda Mantra 1", bgColor: "#B5EAD7", audioSrc: "/audio/samvedaudio/SV(P) 01.01.01.mp3" },
        { title: "Samaveda Mantra 2", bgColor: "#C7CEEA", audioSrc: "/audio/samvedaudio/SV(P) 01.01.02.mp3" },
        { title: "Samaveda Mantra 3", bgColor: "#BEE1E6", audioSrc: "/audio/samvedaudio/SV(P) 01.01.03.mp3" },
        { title: "Samaveda Mantra 4", bgColor: "#FFCBF2", audioSrc: "/audio/samvedaudio/SV(P) 01.01.04.mp3" },
        { title: "Samaveda Mantra 5", bgColor: "#fff", audioSrc: "/audio/samvedaudio/SV(P) 01.01.05.mp3" },
        { title: "Samaveda Mantra 6", bgColor: "#A0E7E5", audioSrc: "/audio/samvedaudio/SV(P) 01.01.06.mp3" },
        { title: "Samaveda Mantra 7", bgColor: "#C3E5AE", audioSrc: "/audio/samvedaudio/SV(P) 01.01.07.mp3" },
        { title: "Samaveda Mantra 8", bgColor: "#B2C7DA", audioSrc: "/audio/samvedaudio/SV(P) 01.01.08.mp3" },
        { title: "Samaveda Mantra 9", bgColor: "#C7CEEA", audioSrc: "/audio/samvedaudio/SV(P) 01.01.09.mp3" },
        { title: "Samaveda Mantra 10", bgColor: "#C4DFDF", audioSrc: "/audio/samvedaudio/SV(P) 01.01.10.mp3" },
        { title: "Samaveda Mantra 11", bgColor: "#fff", audioSrc: "/audio/samvedaudio/SV(P) 01.02.01.mp3" },
        { title: "Samaveda Mantra 12", bgColor: "#FFC8A2", audioSrc: "/audio/samvedaudio/SV(P) 01.02.02.mp3" },
        { title: "Samaveda Mantra 13", bgColor: "#FF9CEE", audioSrc: "/audio/samvedaudio/SV(P) 01.02.03.mp3" },
        { title: "Samaveda Mantra 14", bgColor: "#ACDDDE", audioSrc: "/audio/samvedaudio/SV(P) 01.02.04.mp3" },
        { title: "Samaveda Mantra 15", bgColor: "#E4C1F9", audioSrc: "/audio/samvedaudio/SV(P) 01.02.05.mp3" },
        { title: "Samaveda Mantra 16", bgColor: "#C3E5AE", audioSrc: "/audio/samvedaudio/SV(P) 01.02.06.mp3" },
        { title: "Samaveda Mantra 17", bgColor: "#D8F3DC", audioSrc: "/audio/samvedaudio/SV(P) 01.02.07.mp3" },
        { title: "Samaveda Mantra 18", bgColor: "#B5EAEA", audioSrc: "/audio/samvedaudio/SV(P) 01.02.08.mp3" },
        { title: "Samaveda Mantra 19", bgColor: "#fff", audioSrc: "/audio/samvedaudio/SV(P) 01.02.09.mp3" },
        { title: "Samaveda Mantra 20", bgColor: "#A7BED3", audioSrc: "/audio/samvedaudio/SV(P) 01.02.10.mp3" },
    ]
};

const AudioCards = () => {
    const [activeTab, setActiveTab] = useState("Rigveda");
    const [playingIndex, setPlayingIndex] = useState(null);
    const audioRefs = useRef([]);

    const togglePlayPause = (index) => {
        if (playingIndex === index) {
            audioRefs.current[index].pause();
            setPlayingIndex(null);
        } else {
            if (playingIndex !== null) {
                audioRefs.current[playingIndex].pause();
            }
            audioRefs.current[index].play();
            setPlayingIndex(index);
        }
    };

    return (
        <div className="w-full flex flex-col items-center p-5 mx-auto">
            <div className="flex flex-wrap mx-auto justify-center items-center gap-4 mb-5">
                {Object.keys(vedaData).map((veda) => (
                    <button
                        key={veda}
                        className={`px-4 py-2 rounded-lg font-bold ${activeTab === veda ? 'bg-[#f59b5f] text-black' : 'bg-[#713700cd] text-white'}`}
                        onClick={() => setActiveTab(veda)}
                    >
                        {veda}
                    </button>
                ))}
            </div>

            <div className="text-center flex flex-wrap gap-3 justify-center items-center">
                {vedaData[activeTab].map((item, index) => (
                    <Card
                        key={index}
                        className="w-52 min-h-56 h-fit rounded-3xl p-3"
                        style={{ backgroundColor: item.bgColor }}
                    >
                        <h1 className="text-lg text-[#713700cd] font-bold">{item.title}</h1>
                        <br />
                        <h1 className="mb-3 font-semibold">ऋतम्</h1>
                        <span className="text-[#713700cd]">ॐ भूर्भुवः स्वः
                            तत्सवितुर्वरेण्यं
                            भर्गो देवस्य धीमहि
                            धियो यो नः प्रचोदयात्॥</span>
                        <img
                            src={playingIndex === index
                                ? "https://img.icons8.com/?size=100&id=61012&format=png&color=492401"
                                : "https://img.icons8.com/?size=100&id=ZyOJrX7NHhIC&format=png&color=492401"}
                            className="w-10 h-10 cursor-pointer mt-3"
                            onClick={() => togglePlayPause(index)}
                            alt="Play/Pause Icon"
                        />
                        <audio ref={(el) => (audioRefs.current[index] = el)} src={item.audioSrc}></audio>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AudioCards;
