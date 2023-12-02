import React from "react";

export default function Body() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            ZenChat - Start Chatting, and see how's it going!
          </h1>
          <p className="mb-8 text-xl leading-relaxed">
            Using State of the art RoBERTa Model (Huggingface) for Sentiment
            Analysis in Version-2 Update. In the previous version, we used
            Support Vector Machines to provide multiple levels of sentiment
            while chatting. Enjoy new UI updates, and functionality enhancement!
          </p>
          <p className="mb-8 text-xl leading-relaxed">
            Start Anonymous Chatting with Random People.
          </p>
          <button
            onClick={() =>
              (window.location.href = "http://localhost:3000/chat")
            }
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Start Chatting
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Log In</button>
        <button className="inline-flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Chat</button>
      </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="http://unblast.com/wp-content/uploads/2020/04/Chat-Dashboard-UI-Template-1.jpg"
          />
        </div>
      </div>
    </section>
  );
}
