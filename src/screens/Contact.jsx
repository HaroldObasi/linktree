import React from "react";

const Contact = () => {
    return (
        <section className="mx-auto mt-10 w-[720px]">
            <h1 className="text-4xl font-inter font-bold">Contact Me</h1>
            <p className="text-gray-600 font-inter text-xl mt-3">
                Hi there, contact me to ask me about anything you have in mind.
            </p>

            <form className="mt-7 space-y-5">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label
                            className="block font-inter text-sm text-gray-700 mb-1"
                            for="first_name"
                        >
                            First name
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 placeholder:font-inter placeholder:text-md transition-colors duration-200 ease-in-out"
                            id="first_name"
                            type="text"
                            placeholder="First name"
                        />
                    </div>
                    <div className="w-1/2">
                        <label
                            className="block font-inter text-sm text-gray-700 mb-1"
                            for="last_name"
                        >
                            Last name
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 placeholder:font-inter placeholder:text-md transition-colors duration-200 ease-in-out"
                            id="last_name"
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <label
                        className="block font-inter text-sm text-gray-700 mb-1"
                        for="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 placeholder:font-inter placeholder:text-md transition-colors duration-200 ease-in-out"
                        id="email"
                        type="email"
                        placeholder="yourname@example.com"
                    />
                </div>

                <div className="w-full">
                    <label
                        className="block font-inter text-sm text-gray-700 mb-1"
                        for="message"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        class="w-full rounded-lg border shadow border-gray-300 focus:border-blue-400 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                    ></textarea>
                </div>
            </form>
        </section>
    );
};

export default Contact;
