'use client'

import { CldImage } from "next-cloudinary"

export default function Approach() {
    return (
        <div id='practice' className="bg-white">
            <section className="relative max-w-6xl mx-auto pt-12 flex">
                <div className="mx-auto px-4 pb-16 pt-16 sm:px-6">
                    <div className="relative aspect-h-2 aspect-w-4 overflow-hidden sm:aspect-w-6 lg:pr-4 xl:pr-16">
                        <CldImage
                            width="1200"
                            height="400"
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 70vw"
                            src="https://res.cloudinary.com/the-color-mill/image/upload/v1708039339/renee-clark/forest-walk_fhgucj.jpg"
                            alt="Walking practice in the forest"
                            style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="mt-8">
                        <h2 className="font-medium text-center font-serif text-4xl text-gray-500">
                            Approach
                        </h2>
                        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur. In in phasellus volutpat nisi egestas ut aliquam platea. Tincidunt nisi scelerisque adipiscing ultrices odio etiam dictumst. Id congue tellus mattis elementum aliquet. Erat velit ullamcorper at eu varius cras tellus. Magna eget amet et metus faucibus sed at. Pharetra nulla arcu suspendisse et pellentesque leo elementum bibendum venenatis.
                        </p>
                        <p className="mt-4 text-gray-500">
                            Gravida lectus rhoncus vestibulum etiam platea vivamus id nulla sit. Tortor erat mi elit dis sollicitudin velit. Leo elit dignissim ipsum aenean. Faucibus eu aliquet in orci. Dolor ut id euismod lectus phasellus vulputate nisl congue. Egestas ipsum volutpat sed ut eget congue.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
