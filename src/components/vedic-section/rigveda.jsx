"use client";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf"; 
import "pdfjs-dist/legacy/build/pdf.worker"; 
import VedicHero from "../../components/vedic-section/vedic-hero";
import VedicSectionAbout from "../../components/vedic-section/vedic-section-about";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js"; 

const PDFViewer = ({ url }) => {
    const pdfContainerRef = useRef(null);

    useEffect(() => {
        if (!url) return; 

        const loadPDF = async () => {
            try {
                const loadingTask = pdfjsLib.getDocument(url);
                const pdf = await loadingTask.promise;

                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const scale = 1.5;
                    const viewport = page.getViewport({ scale });

                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d");

                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    await page.render({ canvasContext: context, viewport }).promise;

                    pdfContainerRef.current.appendChild(canvas);
                }
            } catch (error) {
                console.error("Error loading PDF:", error);
            }
        };

        loadPDF();
    }, [url]);

    return <div ref={pdfContainerRef} className="w-full flex flex-col items-center space-y-4" />;
};

export default function AllVedas() {
    const params = useParams();
    let decodedVed = decodeURIComponent(params?.fourvedas || "").trim(); 

    console.log("Decoded Veda Name:", decodedVed);

    const pdfUrls = {
        "rig veda": "/pdf/rig-veda.pdf",
        "sam veda": "/pdf/sam-veda.pdf",
        "yajur veda": "/pdf/yajur-veda.pdf",
        "atharva veda": "/pdf/atharva-veda.pdf"
    };

    const normalizeVedaName = (name) => {
        name = name.toLowerCase().replace(/\s+/g, " ").trim(); 
        if (name.includes("yjur")) return "yajur veda"; 
        if (name.includes("sam")) return "sam veda"; 
        return name;
    };

    const correctedVed = normalizeVedaName(decodedVed);
    const pdfUrl = pdfUrls[correctedVed] || "/pdf/default.pdf"; 

    return (
        <>
            <div>
                <VedicHero />
            </div>
            <div>
                <VedicSectionAbout />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-[#713700] m-5">{decodedVed}</h1>
                <div className="w-full max-h-screen overflow-y-auto">
                    <PDFViewer url={pdfUrl} />
                </div>
            </div>
        </>
    );
}
