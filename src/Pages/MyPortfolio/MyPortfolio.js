import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center my-10'>
            <div class="card w-3/6 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name: Sibli Sadik Rony</h2>
                    <p>Email: siblisadik13@gmail.com</p>
                    <p>Education: Graduate, BSC in CSE</p>
                    <p><strong>Web Technology/Skill:</strong></p>
                    <ul className='list-disc ml-6'>
                        <li>HTML5</li>
                        <li>Vanila CSS, Bootstrap, Tailwind </li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Mongodb</li>
                        <li>Authentication</li>
                        <li>Payment Gateway integration</li>
                    </ul>
                    <p><strong>Recent Works</strong></p>
                    <ul className='list-disc ml-6'>
                        <li><strong>Traveler:</strong> https://traveler-847be.web.app/</li>
                        <li><strong>Macbook Pro review:</strong> https://macbook-pro-review.netlify.app/</li>
                        <li><strong>Phone Finder:</strong> https://phone-finder-sibli.netlify.app/</li>

                    </ul>
                </div>
            </div>
        </div>
    )
};

export default MyPortfolio;