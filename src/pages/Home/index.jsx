import ServiceCard from '../../components/ui/ServiceCard';
import icons from '../../assets/icons';
import images from '../../assets/images';
import TeamCard from '../../components/ui/TeamCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Section from '../../components/ui/Section';
import TestimonialSlider from '../../components/ui/TestimonialSlider';
import OurWorkingProcess from '../../components/ui/OurWorkingProcess';

function HomePage() {
    const services = [
        {
            id: 1,
            bgColor: 'bg-primary_white',
            textColor: 'text-black',
            borderColor: 'border-black',
            highlight: (
                <>
                    <span className="px-1 bg-primary_green rounded-md">Search engine</span>
                    <br />
                    <span className="px-1 bg-primary_green rounded-md">optimization</span>
                </>
            ),
            icon: icons.ServicesItem1,
            learnMoreIcon: icons.LearnMoreArrow,
        },
        {
            id: 2,
            bgColor: 'bg-primary_green',
            textColor: 'text-black',
            borderColor: 'border-black',
            highlight: (
                <>
                    <span className="px-1 bg-white rounded-md">Pay-per-click</span>
                    <br />
                    <span className="px-1 bg-white rounded-md">advertising</span>
                </>
            ),
            icon: icons.ServicesItem2,
            learnMoreIcon: icons.LearnMoreArrow,
        },
        {
            id: 3,
            bgColor: 'bg-primary_black',
            textColor: 'text-white',
            borderColor: 'border-black',
            highlight: (
                <>
                    <span className="px-1 bg-white rounded-md">Social Media</span>
                    <br />
                    <span className="px-1 bg-white rounded-md">Marketing</span>
                </>
            ),
            icon: icons.ServicesItem3,
            learnMoreIcon: icons.LearnMoreArrow_White,
        },
        {
            id: 4,
            bgColor: 'bg-primary_white',
            textColor: 'text-black',
            borderColor: 'border-black',
            highlight: (
                <>
                    <span className="px-1 bg-primary_green rounded-md">Email</span>
                    <br />
                    <span className="px-1 bg-primary_green rounded-md">Marketing</span>
                </>
            ),
            icon: icons.ServicesItem4,
            learnMoreIcon: icons.LearnMoreArrow,
        },
        {
            id: 5,
            bgColor: 'bg-primary_green',
            textColor: 'text-black',
            borderColor: 'border-black',
            highlight: (
                <>
                    <span className="px-1 bg-primary_white rounded-md">Content</span>
                    <br />
                    <span className="px-1 bg-primary_white rounded-md">Creation</span>
                </>
            ),
            icon: icons.ServicesItem5,
            learnMoreIcon: icons.LearnMoreArrow,
        },
        {
            id: 6,
            bgColor: 'bg-primary_black',
            textColor: 'text-white',
            borderColor: 'border-black',
            highlight: (
                <>
                    <span className="px-1 bg-primary_green rounded-md">Analytics and </span>
                    <br />
                    <span className="px-1 bg-primary_green rounded-md">Tracking</span>
                </>
            ),
            icon: icons.ServicesItem6,
            learnMoreIcon: icons.LearnMoreArrow_White,
        },
    ];
    const teamMembers = [
        {
            name: 'John Smith',
            role: 'CEO and Founder',
            experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
            skills: '',
            image: icons.Avatar,
        },
        {
            name: 'Jane Doe',
            role: 'Director of Operations',
            experience: '7+ years of experience in project management and team leadership.',
            skills: 'Strong organizational and communication skills.',
            image: icons.Avatar,
        },
        {
            name: 'Michael Brown',
            role: 'Senior SEO Specialist',
            experience:
                '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
            skills: '',
            image: icons.Avatar,
        },
        {
            name: 'Emily Johnson',
            role: 'PPC Manager',
            experience:
                '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
            skills: '',
            image: icons.Avatar,
        },
        {
            name: 'Brian Williams',
            role: 'Social Media Specialist',
            experience:
                '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
            skills: '',
            image: icons.Avatar,
        },
        {
            name: 'Sarah Kim',
            role: 'Content Creator',
            experience: '2+ years of experience in writing and editing.',
            skills: 'Skilled in creating compelling, SEO-optimized content for various industries.',
            image: icons.Avatar,
        },
    ];

    return (
        <>
            {/* Hero Bio */}
            <section className="flex items-stretch justify-between">
                {/* Text content */}
                <div className="w-1/2 text-center md:text-left">
                    <h1 className="text-[60px] font-medium !leading-[1.3] text-black">
                        Navigating the <br /> digital landscape <br /> for success
                    </h1>
                    <p className="text-xl mt-8">
                        Our digital marketing agency helps businesses <br /> grow and succeed online through a range of{' '}
                        <br />
                        services including SEO, PPC, social media marketing, <br /> and content creation.
                    </p>
                    <button className="bg-black mt-9 inline text-white px-10 py-5 rounded-md text-[19px] font-medium hover:bg-gray-900 transition">
                        Book a consultation
                    </button>
                </div>

                {/* Placeholder for Image */}
                <div className=" mt-8 md:mt-0">
                    <img src={images.Illustration} alt="Illustration" className=" h-[515px]" />
                </div>
            </section>
            {/* Logo Section */}
            <div className="flex items-center justify-between mt-20 mb-[139px]">
                <img src={icons.Amazon} alt="Amazon" className="h-10 filter grayscale" />
                <img src={icons.Dribbble} alt="Dribbble" className="h-10 filter grayscale" />
                <img src={icons.HubSpot} alt="HubSpot" className="h-10 filter grayscale" />
                <img src={icons.Notion} alt="Notion" className="h-10 filter grayscale" />
                <img src={icons.Netflix} alt="Netflix" className="h-10 filter grayscale" />
                <img src={icons.Zoom} alt="Zoom" className="h-10 filter grayscale" />
            </div>

            {/* Services Section */}
            <Section
                title="Services"
                description={
                    <>
                        At our digital marketing agency, we offer a range of services to <br /> help businesses grow and
                        succeed online. These services include:
                    </>
                }
            >
                <div className="flex flex-wrap justify-between">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} {...service} index={index} />
                    ))}
                </div>
            </Section>
            {/* Proposal Section */}
            <section className="mb-12">
                <div className="bg-gray-100 rounded-2xl p-10 flex justify-between items-center relative">
                    {/* Nội dung văn bản */}
                    <div className="max-w-md">
                        <h2 className="text-2xl font-semibold">Let’s make things happen</h2>
                        <p className="text-gray-600 mt-3">
                            Contact us today to learn more about how our digital marketing services can help your
                            business grow and succeed online.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md">
                            Get your free proposal
                        </button>
                    </div>
                    {/* Hình minh họa */}
                    <div className="absolute right-0 w-1/3 flex justify-center">
                        <img src={images.Proposal} alt="" />
                    </div>
                </div>
            </section>
            {/* Case Studies Section */}
            <Section
                title="Case Studies"
                description={
                    <>
                        Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case
                        Studies
                    </>
                }
            >
                <div class="bg-primary_black text-white rounded-[45px] p-16 flex justify-between border-2 mt-10 gap-10 text-xl">
                    <div class="w-1/3">
                        <p>
                            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50%
                            increase in website traffic and a 25% increase in sales.
                        </p>
                        <a href="#" class="text-primary_green flex items-center gap-2 mt-4">
                            Learn more <img src={icons.LearnMoreArrowUp} alt="" />
                        </a>
                    </div>
                    <div class="w-px bg-gray-500"></div>
                    <div class="w-1/3 relative">
                        <p>
                            For a B2B software company, we developed an SEO strategy that resulted in a first page
                            ranking for key keywords and a 200% increase in organic traffic.
                        </p>
                        <a href="#" class="text-primary_green flex items-center gap-2 mt-4">
                            Learn more <img src={icons.LearnMoreArrowUp} alt="" />
                        </a>
                    </div>

                    <div class="w-px bg-gray-500"></div>

                    <div class="w-1/3">
                        <p>
                            For a national retail chain, we created a social media marketing campaign that increased
                            followers by 25% and generated a 20% increase in online sales.
                        </p>
                        <a href="#" class="text-primary_green flex items-center gap-2 mt-4">
                            Learn more <img src={icons.LearnMoreArrowUp} alt="" />
                        </a>
                    </div>
                </div>
            </Section>
            {/* Our Working Process Section */}
            <Section
                title="Our Working Process"
                description={
                    <>
                        Step-by-Step Guide to Achieving <br /> Your Business Goals
                    </>
                }
            >
                <OurWorkingProcess />
            </Section>
            {/* Team Section */}
            <Section
                title="Team"
                description={
                    <>
                        Meet the skilled and experienced team behind our <br /> successful digital marketing strategies
                    </>
                }
            >
                <div className="mt-10 flex flex-col items-center">
                    <div className="flex flex-wrap justify-between gap-6 w-full">
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} {...member} className="flex-1 min-w-[300px] max-w-sm" />
                        ))}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-black text-white px-6 py-3 rounded-lg mt-8">See all team</button>
                </div>
            </Section>
            {/* Testimonials Section */}
            <Section
                title="Testimonials"
                description={
                    <>
                        Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn More about Our Digital
                        Marketing Services
                    </>
                }
            >
                <TestimonialSlider />
            </Section>
            {/* Contact Us */}
            <Section
                title="Contact Us"
                description={
                    <>
                        Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
                    </>
                }
            >
                <div className="relative bg-gray-100 p-20 rounded-2xl flex flex-row items-start gap-6 shadow-md">
                    {/* Form Section */}
                    <div className="w-full md:w-2/3">
                        {/* Radio Buttons */}
                        <div className="flex space-x-6 mb-6">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="contactType" className="accent-lime-400" defaultChecked />
                                <span>Say Hi</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="contactType" className="accent-lime-400" />
                                <span>Get a Quote</span>
                            </label>
                        </div>

                        {/* Form Fields */}
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 border border-black rounded-[14px] focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email*</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 border border-black rounded-[14px] focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message*</label>
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-3 border border-black rounded-[14px] h-32 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />
                            </div>
                            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900">
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* Decorative Section */}
                    <div className="absolute -right-48 top-1/2 -translate-y-1/2 hidden md:flex w-1/3 justify-center">
                        <img src={icons.ContactUs} alt={icons.ContactUs} />
                    </div>
                </div>
            </Section>
        </>
    );
}

export default HomePage;
