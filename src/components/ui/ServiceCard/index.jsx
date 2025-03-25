function ServiceCard({ bgColor, textColor, borderColor, highlight, icon, learnMoreIcon, index }) {
    return (
        <div
            className={`flex justify-between ${bgColor} px-8 py-16 rounded-[45px] shadow-md w-[48%] border-b-8 ${borderColor} ${
                index >= 2 ? 'mt-10' : ''
            }`}
        >
            <div className="ml-4 flex flex-col justify-between">
                <h3 className="font-medium text-3xl">{highlight}</h3>
                <div className="flex items-center gap-3">
                    <img src={learnMoreIcon} alt="LearnMoreArrow" />
                    <p className={`text-xl ${textColor}`}>Learn more</p>
                </div>
            </div>
            <img src={icon} alt="Content Creation" className="object-contain" />
        </div>
    );
}

export default ServiceCard;
