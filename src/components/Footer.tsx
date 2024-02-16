'use client'
import { CldImage } from 'next-cloudinary';
import ContactForm from './ContactForm';
import Link from 'next/link';

const navigation = [
    { name: 'About', href: '/#about' },
    { name: 'Practice', href: '/#practice' }
]

export default function Footer() {
    return (
        <div className="py-24 sm:py-32 h-full relative w-full px-4">
            <ContactForm />
            <div className="mx-auto max-w-7xl mt-36 px-6 lg:px-12 z-10 relative bg-white rounded-lg">
                <div className="mx-auto lg:mx-0 py-8 w-full items-center flex flex-col sm:flex-row justify-center  sm:justify-between">
                    <h2 className='text-2xl sm:text-left text-center font-serif text-slate-900'>Renee Clark</h2>
                    <div className='flex gap-4 justify-center sm:justify-end mt-4 sm:mt-0'>
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-lg leading-6 text-slate-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
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