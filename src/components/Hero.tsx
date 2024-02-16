'use client'
import { CldImage } from 'next-cloudinary'; 

export default function Hero() {
    return (
        <div className="py-24 sm:py-32 h-[700px] relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 z-10 relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-serif text-white sm:text-4xl">Transforming Lives Through Ecopsychology and Ecotherapy</h2>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Explore a holistic approach to well-being by integrating nature, culture, and inner wisdom in therapy and healing practices.
                    </p>
                </div>
            </div>
            <CldImage
                width="1240"
                height="700"
                src="https://res.cloudinary.com/the-color-mill/image/upload/v1708031971/renee-clark/morning-forest_ss4uph.jpg"
                sizes="100vw"
                tint="15:blue"
                alt="Hero image of a forest with a sunbeam shining through the trees."
                style={{ objectFit: 'cover' , position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
                />
        </div>
    )
}