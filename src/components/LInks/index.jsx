import data from "./data";

// eslint-disable-next-line react/display-name
const Links = () => (
    <div>
        {data.map((item) => (
            <div
                key={item.id}
                id={item.id}
                onClick={() => (window.location.href = item.url)}
                className="bg-gray-200 text-center rounded-md mx-[20px] lg:mx-[144px] py-5 my-4  cursor-pointer hover:bg-gray-300"
            >
                <p className="font-inter font-medium text-[18px]">
                    {item.name}
                </p>
            </div>
        ))}
        <div className="rounded-md mx-[144px] py-5 my-4 flex justify-center flex-row ">
            <a href="https://www.slack.com">
                <img src="slack.png" alt="" className="w-6 mx-3" />
            </a>
            <a href="https://www.github.com/haroldobasi/next_app">
                <img src="/github.png" alt="" className="w-6 mx-3" />{" "}
            </a>
        </div>
    </div>
);

export default Links;
