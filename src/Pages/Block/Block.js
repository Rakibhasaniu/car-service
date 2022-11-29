import React from 'react';

const Block = () => {
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div className='bg-orange-600 rounded-lg p-5 text-white'>
                            <h3 className="font-semibold text-2xl mb-5">1 What are the different ways to manage a state in a React application?</h3>
                            <p className="mt-1 dark:text-gray-400">Local (UI) state – Local state is data we manage in one or another component.

                                Local state is most often managed in React using the useState hook.

                                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                        </div>
                        <div className='bg-orange-600 rounded-lg p-5 text-white'>
                            <h3 className="font-semibold text-2xl mb-5">2 How does prototypical inheritance work?</h3>
                            <p className="mt-1 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        </div>
                        <div className='bg-orange-600 rounded-lg p-5 text-white'>
                            <h3 className="font-semibold text-2xl mb-5">3 What is a unit test? Why should we write unit tests?</h3>
                            <p className="mt-1 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default Block;