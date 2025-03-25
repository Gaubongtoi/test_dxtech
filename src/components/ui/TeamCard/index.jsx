import icons from '../../../assets/icons';

function TeamCard({ name, role, experience, skills, image }) {
    return (
        <div className="bg-white rounded-[45px] shadow-md p-11 border border-black border-b-8 max-w-sm flex flex-col">
            <div className="relative flex items-center justify-between">
                <div className=" flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                        <div className="absolute w-full h-full bg-lime-400 rounded-full scale-125 -z-10"></div>
                        <img src={image} alt={name} className="w-16 h-16 object-cover border-2 border-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-gray-500 text-sm">{role}</p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8">
                    <img src={icons.LinkedIcon} alt="LinkedIn" className="object-contain" />
                </div>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex flex-col flex-grow">
                <p className="text-sm">{experience}</p>
                {skills && <p className="text-sm mt-2">{skills}</p>}
            </div>
        </div>
    );
}

export default TeamCard;
