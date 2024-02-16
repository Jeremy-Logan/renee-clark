'use client'

import { CldImage } from "next-cloudinary"

export default function About() {
    return (
        <div className="bg-white">
            <section className="relative max-w-6xl mx-auto pt-12 flex">
                <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-16 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
                    <div className="relative aspect-h-3 aspect-w-3 overflow-hidden sm:aspect-w-4 lg:pr-4 xl:pr-16">
                        <CldImage
                            width="500"
                            height="500"
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            src="https://res.cloudinary.com/the-color-mill/image/upload/v1708036536/renee-clark/portrait-placeholder_gmjdik.png"
                            alt="Potrait of Renee"
                            style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="lg:col-start-2 mt-4  lg:mt-0">
                        <h2 className="font-medium font-serif text-4xl text-gray-500">
                            About Renee
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur. In in phasellus volutpat nisi egestas ut aliquam platea. Tincidunt nisi scelerisque adipiscing ultrices odio etiam dictumst. Id congue tellus mattis elementum aliquet. Erat velit ullamcorper at eu varius cras tellus. Magna eget amet et metus faucibus sed at. Pharetra nulla arcu suspendisse et pellentesque leo elementum bibendum venenatis.
<br/><br/>
                            Gravida lectus rhoncus vestibulum etiam platea vivamus id nulla sit. Tortor erat mi elit dis sollicitudin velit. Leo elit dignissim ipsum aenean. Faucibus eu aliquet in orci. Dolor ut id euismod lectus phasellus vulputate nisl congue. Egestas ipsum volutpat sed ut eget congue.
<br/><br/>
                            Duis tempus semper consequat massa elementum bibendum enim risus felis. Sodales etiam eu senectus varius. Vitae tortor orci sit sit morbi eleifend. Enim pretium gravida integer mi gravida at nec sed nibh. Eros blandit magna neque amet. Aenean condimentum a tellus venenatis senectus erat vel. Eget eget ac et est nunc placerat. In sit faucibus elementum amet. Morbi felis dignissim tortor lorem mauris mauris id varius. Commodo ultricies viverra amet mi. Sit ut aliquet cras vel ut viverra a morbi turpis. Mattis viverra elementum vulputate pellentesque non pellentesque. Amet ut consequat nibh semper.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
