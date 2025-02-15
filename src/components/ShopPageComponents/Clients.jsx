import React from 'react';
import logo1 from '../../images/Vector-1.png';
import logo2 from '../../images/Vector-2.png';
import logo3 from '../../images/Vector-3.png';
import logo4 from '../../images/Vector-4.png';
import logo5 from '../../images/Vector.png';
import logo6 from '../../images/Vector6.png';

const Clients = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <div className="flex flex-col items-center gap-[60px] pt-[110px] p-[110px] ">
            <div className="flex flex-wrap justify-center gap-[30px]">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Client logo ${index + 1}`}
                        className="w-[153px] h-[50px] object-contain"
                    />
                ))}
            </div>
        </div>
    );
};

export default Clients;