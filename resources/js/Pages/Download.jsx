import GuestLayout, { DownloadContext } from '@/Layouts/GuestLayout'
import { PlayIcon } from '@heroicons/react/24/solid'
import { Head } from '@inertiajs/react'
import React, { useContext } from 'react'

export default function () {

    return (
        <GuestLayout>
            <View />
        </GuestLayout>
    )
}

const View = () => {
    const {open} = useContext(DownloadContext)
    return (
        <div className="md:py-20 px-4">
            <Head title='Download' />
            <div class="md:min-h-[80vh] border-[#11AA6C] border-solid border-2 px-5 md:px-20 rounded-xl bg-primary max-w-6xl mx-auto relative  bg-[url('/assets/imgs/media/banners/curved-bg.svg')] bg-no-repeat md:flex bg-top md:bg-origin-content overflow-hidden md:overflow-visible">
                <div className="md:w-1/2 text-white space-y-5 py-10 ">
                    <div className="p-1 inline-block rounded-2xl bg-secondary shadow-lg">
                        <img src="/assets/imgs/logos/logo-black.svg " alt="" />
                    </div>

                    <div className='space-y-3'>
                        <h2 class={'md:text-4xl text-xl font-bold'}>Book appointment, Order a Lab Test and Manage your Medications.</h2>
                        <p className="md:text-lg text-sm"> Discover a new era of personalized wellness – welcome to a platform that truly transforms healthcare.</p>
                    </div>

                    <button onClick={open} class="btn btn-secondary">Download <PlayIcon class={'text-white text-opacity-70 w-6 h-6'} /></button>


                    <div class={'flex items-center space-x-4'}>
                        <div>
                            <img src="/assets/imgs/qr-code-2.svg" class={'w-20'} alt="" />
                        </div>

                        <div>
                            <h2 class={'md:text-2xl text-xl text-white font-semibold'}>Scan to download <br /> the app</h2>
                        </div>
                    </div>

                </div>

                <div className='md:w-1/2 relative'>
                    <img src="/assets/imgs/media/mobile-display.png" class={'md:absolute drop-shadow-2xl md:-top-20 left-[20%] md:w-[70%] -mb-[500px] md:mb-0'} alt="" />
                </div>


            </div>
        </div>
    )
}
