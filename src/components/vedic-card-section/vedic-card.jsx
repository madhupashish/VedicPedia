import Image from 'next/image';
import { Card } from '../../components/ui/card';
import Link from 'next/link';

const VedicCard = () => {
    const vedicItems = [
        { src: "https://i.pinimg.com/736x/06/22/1e/06221e6b4422e9b31eb22d7d0eb6e003.jpg", bgColor: "#ff9a3d" },
        { src: "/images/v1.png", title: "Rig Veda", bgColor: "#ff9a3d" },
        { src: "/images/v3.jpg", title: "Sama Veda", bgColor: "#F2D2BD" },
        { src: "/images/v2.jpg", title: "Yjur Veda", bgColor: "#F2D2BD" },
        { src: "/images/v4.jpg", title: "Atharva Veda", bgColor: "#F5DEB3" },
        { src: "https://i.pinimg.com/736x/af/16/fa/af16fa502f36f30a50571d335d24ede4.jpg", title: "Rig Veda" }
    ];

    return (
        <div className="w-full bg-[#EDE6D6] p-1 mx-auto">
            <h1 className='text-4xl font-bold text-[#713700] m-5 text-center mx-auto'>Lover Few Present</h1>
            <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 text-center">
                {vedicItems.map((item, index) => (
                    <Card key={index} className="rounded-xl" style={{ backgroundColor: item.bgColor }}>
                        {(index === 0 || index === vedicItems.length - 1) ? (
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={300}
                                height={400}
                                className='w-full h-full rounded-xl object-cover'
                            />
                        ) : (
                            <>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                    className='w-full p-3 h-72 rounded-full object-cover'
                                />
                                <br />
                                <h2 className='text-[#411900] font-bold'>{item.title}</h2>
                                <p className="mb-6 text-[#411900] text-base font-medium">
                                    Unlock the wisdom of the Vedas. Immerse yourself in the timeless wisdom of the Vedas.
                                </p>
                                <Link href={`/vedas/${item.title}`}>
                                    <button className='bg-white text-[#713700] text-center py-2 px-3 font-semibold'>READ MORE</button>
                                </Link>
                            </>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default VedicCard;
