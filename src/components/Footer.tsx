'use client'
import { CldImage } from 'next-cloudinary';
import ContactForm from './ContactForm';

export default function Footer() {
    return (
        <div className="py-24 sm:py-32 h-full relative w-full px-4">
            <ContactForm />
                <div className="mx-auto max-w-7xl min-h-24 mt-12 px-6 lg:px-8 z-10 relative bg-white rounded-lg">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        
                    </div>
            </div>
            <CldImage
                width="1400"
                height="1200"
                src="https://res.cloudinary.com/the-color-mill/image/upload/v1708031692/renee-clark/footer-landscape_xzvj2h.png"
                sizes="100vw"
                alt="Hero image of a forest with a sunbeam shining through the trees."
                style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
            />
        </div>
    )
}