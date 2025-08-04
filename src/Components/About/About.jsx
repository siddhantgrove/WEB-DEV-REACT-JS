import React from 'react'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                          src="https://www.prlog.org/12717992-tycc.png"
                            alt="image"
                        />
                    </div> 
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            PR That Works, Stories That Stick
                        </h2>
                        <p className="mt-6 text-gray-800">
                            At The Yellow Coin Communication, we go beyond press releases and media mentions — we build stories that leave a lasting impact. Since 2012, we’ve been helping brands break through the noise with strategic communication that not only works, but resonates.

Whether it’s traditional PR, digital outreach, brand building, or crisis communication, we craft every message with purpose and precision. Our team of experts blends creativity with data-driven insights to shape narratives that capture attention and build trust.

With a presence across 180+ Indian cities and global clients, we serve startups, enterprises, and organizations looking to scale their visibility. From local campaigns to international launches — our solutions are tailored, targeted, and results-driven.

When you partner with The Yellow Coin Communication, you're not just hiring a PR agency — you're investing in a story that sticks.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}