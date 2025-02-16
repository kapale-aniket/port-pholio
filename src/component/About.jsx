import { useState } from "react";
import bannerImage from "../assets/blue.jpg";

const About = () => {
    const [data,setdata] = useState({
        image: bannerImage,
        title: "Education",
        desc1: "BTECH in Computer Science and Engineering (2022-2025) Dr. Babasaheb Ambedkar Technological University Lonere, Maharashtra, India",
        desc2: "Diploma in Computer Engineering (2017-2020) Maharashtra State Board of Technical Education (MSBTE), Mumbai"
    });

    return (
        <>
            <div className="main-container border py-16 bg-gray-100">
                <h1 className="text-4xl pb-16 underline font-bold text-center">About Me</h1>

                <div className="flex">
                    {/* image container */}
                    <div className="w-full">
                        <img
                            className="rounded-full justify-center shadow-lg w-fit h-80"
                            src={data.image}
                            alt="Aniket Arun Kapale"
                        />
                    </div>

                    {/* text container */}
                    <div className="w-full">
                        <h1>{data.title}</h1>
                        <p>{data.desc1}</p>
                        <br />
                        <p>{data.desc2}</p>
                        <br />
                        <button className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl">
                            Read more..
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
