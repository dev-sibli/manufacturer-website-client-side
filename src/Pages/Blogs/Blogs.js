import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto my-5'>
            <h1 className='text-3xl text-center font-mono font-bold my-3'>Blogs</h1>
            <div>
                <h3 className='text-2xl'>How will you improve the performance of a React Application?</h3>
                <p className='mb-6'><strong>If we want to improve</strong> the performance of a react application we should follow some technique. We need to Keep component state local where necessary.We've learned that a state update in a parent component re-renders the parent and its child components. So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code. We should Memoizing React components to prevent unnecessary re-renders. It will caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.
                </p>
                <h3 className='text-2xl'>How does prototypical inheritance work?</h3>
                <p className='mb-6'><strong>prototypical inheritance</strong> refers to the ability to access object properties from another object.
                    We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function
                </p>
                <h3 className='text-2xl'>Why you do not set the state directly in React.</h3>
                <p className='mb-6'><strong>If we update it directly,</strong> calling the setState() afterward may just replace the update we made.
                    When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. More than we  will lose control of the state across all components.
                </p>
            </div>
        </div>
    );
};

export default Blogs;