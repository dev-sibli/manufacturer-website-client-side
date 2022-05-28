import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://fierce-wildwood-20183.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div className='my-10'>
            <h4 className='text-2xl font-bold text-center my-12'>Our Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(-6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;