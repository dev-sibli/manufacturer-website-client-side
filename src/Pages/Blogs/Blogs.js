import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto my-5'>
            <h1 className='text-3xl text-center font-mono font-bold my-3'>Blogs</h1>
            <div>
                <h3 className='text-2xl'>How will you improve the performance of a React Application?</h3>
                <p className='mb-6'><strong>If we want to improve</strong> the performance of a react application we should follow some technique. We need to Keep component state local where necessary.We've learned that a state update in a parent component re-renders the parent and its child components. So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code. We should Memoizing React components to prevent unnecessary re-renders. It will caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.
                </p>
                <h3 className='text-2xl'>What are the different ways to manage a state in a React application?</h3>
                <p className='mb-6'><strong>If we want to improve</strong> the performance of a react application we should follow some technique. We need to Keep component state local where necessary.We've learned that a state update in a parent component re-renders the parent and its child components. So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code. We should Memoizing React components to prevent unnecessary re-renders. It will caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.
                </p>
            </div>
        </div>
    );
};

export default Blogs;