import React from 'react';
import icons from '../../../assets/icons';
import Slider from 'react-slick';
function TestimonialSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const testimonials = [
        {
            id: 1,
            text: 'Chúng tôi đã làm việc với Positivus trong một năm qua và đã thấy sự tăng trưởng đáng kể.',
            author: 'John Smith',
            role: 'Marketing Director at XYZ Corp',
        },
        {
            id: 2,
            text: 'Đội ngũ rất chuyên nghiệp, phản hồi nhanh và thực sự quan tâm đến thành công của chúng tôi.',
            author: 'Jane Doe',
            role: 'CEO of ABC Ltd.',
        },
        {
            id: 3,
            text: 'Dịch vụ xuất sắc, chúng tôi rất hài lòng với kết quả đạt được.',
            author: 'Michael Brown',
            role: 'Founder of 123 Studio',
        },
        {
            id: 4,
            text: 'Dịch vụ xuất sắc, chúng tôi rất hài lòng với kết quả đạt được.',
            author: 'Michael Brown',
            role: 'Founder of 123 Studio',
        },
    ];
    const settings = {
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        customPaging: (i) => (
            <img
                src={i === currentSlide ? icons.DotSliderActive : icons.DotSlider}
                alt=""
                className="w-4 h-4 transition-all duration-300 mt-8"
            />
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '30px',
                },
            },
        ],
    };
    return (
        <div className="relative py-20 bg-primary_black rounded-[45px]">
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id}>
                        <div className="relative max-w-2xl mx-auto p-9  bg-gray-900 border border-lime-400 rounded-lg text-white">
                            <p className="text-lg">
                                "We have been working with Positivus for the past year and have seen a significant
                                increase in website traffic and leads as a result of their efforts. The team is
                                professional, responsive, and truly cares about the success of our business. We highly
                                recommend Positivus to any company looking to grow their online presence."
                            </p>

                            {/* Mũi tên chỉa vào tên */}
                            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-8 border-lime-400"></div>

                            <div className="mt-6 text-center">
                                <p className="text-lime-400 font-bold">{testimonial.author}</p>
                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialSlider;
