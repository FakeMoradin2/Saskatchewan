import React from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';

const WhyEdmontonSection = () => {
    return (
        <section className="bg-white">
            <Navbar />
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 mt-8">Why Edmonton?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="mb-4">
                            <Image src="/1.jpg" alt="Edmonton City" width={400} height={300} className="rounded-lg" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality of Municipal Services</h3>
                        <p className="text-gray-900">Edmonton is known for its sustainable approach to urban life. In addition to the recycling and water treatment programs mentioned, the city has made significant investments in public transportation, with the expansion of the Light Rail Transit (LRT), improvements in bicycle and pedestrian infrastructure, and programs to reduce traffic and environmental pollution.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">A Welcoming and Vibrant City</h3>
                        <p className="text-gray-900">The vitality of Edmonton is evident in its diversified economy, which is not limited to natural resources, but also encompasses sectors such as technology, education, and healthcare services. The city attracts entrepreneurs and innovators, with incubators and accelerators supporting startups in various industries.</p>
                    </div>
                    <div>
                        <div className="mb-4">
                            <Image src="/3.webp" alt="Diversity and Culture" width={400} height={300} className="rounded-lg" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Diversity and Culture</h3>
                        <p className="text-gray-900">Edmonton&apos;s cultural richness is celebrated through a wide range of festivals, markets, and cultural events. This includes art, music, and film festivals, as well as farmers&apos; markets showcasing local talent and products.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality of Life and Green Spaces</h3>
                        <p className="text-gray-900">In addition to the valuable green space mentioned, Edmonton offers easy access to outdoor activities such as kayaking, cycling, and skiing in nearby Elk Island National Park. Connecting with nature is a key element of the quality of life in Edmonton.</p>
                    </div>
                    <div>
                        <div className="mb-4">
                            <Image src="/4.avif" alt="Climate and Festivals" width={400} height={300} className="rounded-lg" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Climate and Festivals</h3>
                        <p className="text-gray-900">Edmonton&apos;s sunny weather allows for enjoying its numerous parks and outdoor events. In addition to cultural festivals, Edmonton hosts sports and community events that take advantage of its favorable climate in the warmer months.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality Education</h3>
                        <p className="text-gray-900">With institutions like the University of Alberta, one of Canada&apos;s top research universities, Edmonton is a hub of innovation and education. These institutions not only offer exceptional education but also research and professional development opportunities in various fields.</p>
                    </div>
                    <div>
                        <div className="mb-4">
                            <Image src="/5.jpg" alt="Recreational and Entertainment Options" width={400} height={300} className="rounded-lg" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Recreational and Entertainment Options</h3>
                        <p className="text-gray-900">Beyond parks, Edmonton boasts a vibrant nightlife, with a variety of restaurants, bars, and clubs offering entertainment and local and international cuisine. Commercial districts like West Edmonton Mall, one of the largest shopping malls in North America, offer ample shopping, leisure, and entertainment options.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Safety</h3>
                        <p className="text-gray-900">Edmonton is generally considered a safe city to live, work, and visit. Surveys show that the majority of residents feel safe walking in the city after dark, and local authorities and the Edmonton Police Service are committed to public safety. They implement crime prevention programs, safety education, and encourage community involvement to maintain and enhance safety throughout the city.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyEdmontonSection;
