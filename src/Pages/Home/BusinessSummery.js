import React from 'react';
import { MdSupervisedUserCircle, MdOutlineArchitecture, MdAttachMoney } from "react-icons/md";

const BusinessSummery = () => {
    return (
        <div className="w-full text-center stats stats-vertical lg:stats-horizontal shadow my-5">

            <div className="stat  flex justify-center align-item-center">
                <div className="stat-title "><MdSupervisedUserCircle size={40} color={'blue'} /></div>
                <div className="stat-value">150+</div>
                <div className="stat-desc">Clients</div>
            </div>

            <div className="stat  flex justify-center align-item-center">
                <div className="stat-title"><MdOutlineArchitecture size={40} color={'blue'} /></div>
                <div className="stat-value">60+</div>
                <div className="stat-desc">Tools Available</div>
            </div>

            <div className="stat flex justify-center align-item-center">
                <div className="stat-title"><MdAttachMoney size={40} color={'blue'} /></div>
                <div className="stat-value">1M+</div>
                <div className="stat-desc">Annual revenue</div>
            </div>

        </div>

    );
};

export default BusinessSummery;