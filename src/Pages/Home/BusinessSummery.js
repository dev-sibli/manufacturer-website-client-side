import React from 'react';
import { MdSupervisedUserCircle, MdOutlineArchitecture, MdAttachMoney } from "react-icons/md";

const BusinessSummery = () => {
    return (
        <div class="w-full text-center stats stats-vertical lg:stats-horizontal shadow my-5">

            <div class="stat  flex justify-center align-item-center">
                <div class="stat-title "><MdSupervisedUserCircle size={40} color={'blue'} /></div>
                <div class="stat-value">150+</div>
                <div class="stat-desc">Clients</div>
            </div>

            <div class="stat  flex justify-center align-item-center">
                <div class="stat-title"><MdOutlineArchitecture size={40} color={'blue'} /></div>
                <div class="stat-value">60+</div>
                <div class="stat-desc">Tools Available</div>
            </div>

            <div class="stat flex justify-center align-item-center">
                <div class="stat-title"><MdAttachMoney size={40} color={'blue'} /></div>
                <div class="stat-value">1M+</div>
                <div class="stat-desc">Annual revenue</div>
            </div>

        </div>

    );
};

export default BusinessSummery;