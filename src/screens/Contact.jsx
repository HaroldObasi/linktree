import React from "react";

const Contact = () => {
    return (
        <section className="mx-auto mt-10 w-[720px]">
            <h1 className="text-4xl font-inter font-bold">Contact Me</h1>
            <p className="text-gray-600 font-inter text-xl mt-3">
                Hi there, contact me to ask me about anything you have in mind.
            </p>

            <form className="mt-7">
                <div className="flex flex-row ">
                    <div class="mb-4">
                        <label
                            class="block font-inter text-sm text-gray-700 mb-1"
                            for="first_name"
                        >
                            First name
                        </label>
                        <input
                            class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 placeholder:font-inter placeholder:text-md"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block font-inter text-sm text-gray-700 mb-1"
                            for="username"
                        >
                            Username
                        </label>
                        <input
                            class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 placeholder:font-inter placeholder:text-md"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
