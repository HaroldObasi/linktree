import { useState } from "react";

const Contact = () => {
    const [message, setMessage] = useState("");
    const onChangeInput = (e) => {
        const errorMessage = document.getElementById("error");
        errorMessage.classList.add("hidden");
        e.preventDefault();
        setMessage(e.target.value);
        console.log(message);
    };

    const handleSubmit = (e) => {
        const errorMessage = document.getElementById("error");
        e.preventDefault();
        if (message.length <= 0) {
            errorMessage.classList.remove("hidden");
        } else {
            errorMessage.classList.add("hidden");
        }
    };

    return (
        <body class="antialiased flex font-inter text-gray-900">
            <form class="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
                <div>
                    <h1 class="text-4xl font-bold">Contact Me</h1>
                    <p class="text-gray-600 pt-5">
                        Hi there, contact me to ask me about anything you have
                        in mind.
                    </p>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4">
                    <div class="md:w-1/2">
                        <label
                            for="firstname"
                            className="block font-inter text-sm text-gray-700 mb-1"
                        >
                            First Name
                        </label>
                        <input
                            class="shadow appearance-none border px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="text"
                            name="firstname"
                            id="firstname"
                        />
                    </div>
                    <div class="md:w-1/2 pt-5 md:pt-0">
                        <label
                            for="lastname"
                            className="block font-inter text-sm text-gray-700 mb-1"
                        >
                            Last Name
                        </label>
                        <input
                            class="shadow appearance-none border px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="text"
                            name="lastname"
                            id="lastname"
                        />
                    </div>
                </div>
                <div>
                    <label
                        for="email"
                        className="block font-inter text-sm text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <input
                        class="shadow appearance-none border px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="">
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
                        onChange={(e) => onChangeInput(e)}
                    ></textarea>
                    <p id="error" class={`text-sm text-red-600 hidden`}>
                        Please enter a message
                    </p>
                </div>
                <label class="block font-inter">
                    <input class="mr-2 border-gray-200  " type="checkbox" />
                    <span class="text-sm w-3/4 md:w-full">
                        You agree to providing your data to haroldobasi who may
                        contact you.
                    </span>
                </label>
                <button
                    id="btn__submit"
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                    className="w-full bg-blue-600 py-3 px-auto text-white font-inter rounded-lg hover:bg-blue-700 transition-colors duration-700 ease-in-out"
                >
                    Send message
                </button>
            </form>
        </body>
    );
};

export default Contact;
