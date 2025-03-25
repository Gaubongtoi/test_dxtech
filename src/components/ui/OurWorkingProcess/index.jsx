import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
function OurWorkingProcess() {
    const [activeId, setActiveId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };
    const steps = [
        {
            id: 1,
            title: 'Consultation',
            content:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            id: 2,
            title: 'Research and Strategy Development',
            content:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            id: 3,
            title: 'Implementation',
            content:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            id: 4,
            title: 'Monitoring and Optimization',
            content:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            id: 5,
            title: 'Reporting and Communication',
            content:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
        {
            id: 6,
            title: 'Continual Improvement',
            content:
                'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        },
    ];
    return (
        <div className="space-y-10">
            {steps.map((step) => (
                <div
                    key={step.id}
                    className={`border-b-8 border-black rounded-[45px] p-8  overflow-hidden transition-all ${
                        activeId === step.id ? 'bg-lime-300' : 'bg-gray-100'
                    }`}
                >
                    <button
                        className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
                        onClick={() => toggleAccordion(step.id)}
                    >
                        <span className="flex gap-6 items-center text-3xl">
                            <span className="text-6xl font-medium">{step.id.toString().padStart(2, '0')}</span>{' '}
                            {step.title}
                        </span>
                        <div className="rounded-full border border-black p-3">
                            {activeId === step.id ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                    </button>
                    {activeId === step.id && (
                        <>
                            <div className="border-t border-black mx-4"></div>
                            <div className="p-4 text-gray-700 text-lg">{step.content}</div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default OurWorkingProcess;
