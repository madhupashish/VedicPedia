import Image from 'next/image';
import { Card } from '../../../components/ui/card'
import Link from 'next/link';

const FourVedas = () => {
    return (
        <>
            <div className="w-full p-3 bg-[#713700cd]">
                <div className='w-full flex flex-wrap gap-5 items-center justify-center p-8'>
                    <Link href={'/vedas/Rig Veda'}>
                        <Card className='bg-[#EDE6D6] rounded-none p-7' style={{ boxShadow: "-2px 0px #0000, 10px -9px #492401, var(--tw-shadow)" }}>
                            <Image
                                src={"/images/v1.png"}
                                alt='ved-1'
                                width={100}
                                height={100}
                                className='w-full h-32 rounded-full object-cover' />
                            <br />
                            <h2 className='text-[#411900] font-semibold'>Rig Veda</h2>
                        </Card>
                    </Link>
                    <Link href={'/vedas/Sam Veda'}>
                        <Card className='bg-[#EDE6D6] rounded-none p-7' style={{ boxShadow: "-2px 0px #0000, 10px -9px #492401, var(--tw-shadow)" }}>
                            <Image
                                src={"/images/v2.jpg"}
                                alt='ved-2'
                                width={100}
                                height={100}
                                className='w-full h-32 rounded-full object-cover' />
                            <br />
                            <h2 className='text-[#411900] font-semibold'>Sam Veda</h2>
                        </Card>
                    </Link>
                    <Link href={'/vedas/Yajur Veda'}>
                        <Card className='bg-[#EDE6D6] rounded-none p-7' style={{ boxShadow: "-2px 0px #0000, 10px -9px #492401, var(--tw-shadow)" }}>
                            <Image
                                src={"/images/v3.jpg"}
                                alt='ved-3'
                                width={100}
                                height={100}
                                className='w-full h-32 rounded-full object-cover' />
                            <br />
                            <h2 className='text-[#411900] font-semibold'>Yajur Veda</h2>
                        </Card>
                    </Link>
                    <Link href={'/vedas/Atharav Veda'}>
                        <Card className='bg-[#EDE6D6] rounded-none p-7' style={{ boxShadow: "-2px 0px #0000, 10px -9px #492401, var(--tw-shadow)" }}>
                            <Image
                                src={"/images/v4.jpg"}
                                alt='ved-4'
                                width={100}
                                height={100}
                                className='w-full h-32 rounded-full object-cover' />
                            <br />
                            <h2 className='text-[#411900] font-semibold'>Atharav Veda</h2>
                        </Card>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FourVedas;