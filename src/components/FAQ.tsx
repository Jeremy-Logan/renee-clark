'use client'
import { CldImage } from 'next-cloudinary';

const questions = [
    {
        question: 'What is Ecotherapy?',
        answer: 'Ecotherapy is a form of therapy that encourages an individual to spend time in nature to improve mental and physical health. It is also known as green therapy, nature therapy, and earth-centered therapy.'
    },
    {
        question: 'What is Ecopsychology?',
        answer: 'Ecopsychology is the study of the relationship between human beings and the natural world through ecological and psychological principles. It explores the ways in which the natural world can be used to heal and improve mental health.'
    },
    {
        question: 'What are the benefits of Ecotherapy and Ecopsychology?',
        answer: 'Ecotherapy and ecopsychology have been shown to improve mental and physical health, reduce stress, and increase feelings of well-being. Spending time in nature has been linked to improved mood, increased creativity, and better overall mental health.'
    },
    {
        question: 'How can I get started with Ecotherapy and Ecopsychology?',
        answer: 'To get started with ecotherapy and ecopsychology, you can begin by spending time in nature, whether it is in a park, forest, or garden. You can also seek out a therapist who specializes in ecotherapy and ecopsychology to guide you through the process.'
    },
    {
        question: 'What can I expect from an Ecotherapy and Ecopsychology session?',
        answer: 'During an ecotherapy and ecopsychology session, you can expect to spend time outdoors, engage in nature-based activities, and explore your relationship with the natural world. Your therapist will guide you through the process and help you connect with nature in a meaningful way.'
    },
]

export default function FAQ() {
    return (
        <div className="max-w-6xl mx-auto h-full relative mb-16">
            <div className="sm:mx-auto mx-1 sm:px-12 z-10 relative grid grid-cols-1 xl:grid-cols-2">
                <div className="rounded-lg mx-auto py-8 px-8 lg:mx-0 col-start-1 xl:col-start-2 bg-white/60 xl:bg-white/50 m-12">
                    <h2 className="text-3xl font-serif text-[#2d2d2d] sm:text-4xl">Frequently Asked Questions</h2>
                    <div className="mt-6">
                        {questions.map((q, i) => (
                            <div key={i} className="mt-6">
                                <h3 className="text-lg font-medium text-[#2d2d2d]">{q.question}</h3>
                                <p className="mt-2 text-[#2d2d2d]">{q.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CldImage
                width="1200"
                height="900"
                src="https://res.cloudinary.com/the-color-mill/image/upload/v1708041458/renee-clark/green-leaves-background_qnoak2.png"
                sizes="100vw"
                alt="Hero image of a forest with a sunbeam shining through the trees."
                style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
            />
        </div>

    )
}