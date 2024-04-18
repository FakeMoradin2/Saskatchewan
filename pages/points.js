import React from 'react';
import Navbar from '@/components/navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PointsOfInterest = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <section className="bg-white">
            <Navbar />
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 mt-8">Points of Interest in Edmonton</h2>
            <div className="container mx-auto px-4 max-w-4xl">
                <Slider {...settings}>
                    <div>
                        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/516000/516208-west-edmonton-mall.jpg" alt="West Edmonton Mall" className="mx-auto h-64 w-full object-cover" />
                    </div>
                    <div>
                        <img src="https://static.stalbert.ca/site/assets/files/14303/cityhighlights-northsaskriver-banner.-full.jpg" alt="North Saskatchewan River Valley" className="mx-auto h-64 w-full object-cover" />
                    </div>
                    <div>
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/76/69/dd/alberta-legislature-building.jpg?w=1200&h=1200&s=1" alt="Legislature Building" className="mx-auto h-64 w-full object-cover" />
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Art_Gallery_of_Alberta_%2810293224826%29.jpg" alt="Art Gallery of Alberta" className="mx-auto h-64 w-full object-cover" />
                    </div>
                    <div>
                        <img src="https://www.fortedmontonpark.ca/public/uploads/snippets/fortedmontonparkeventcanadaday201551/1615986381-1920w_840h_fortedmontonparkeventcanadaday201551.jpg" alt="Fort Edmonton Park" className="mx-auto h-64 w-full object-cover" />
                    </div>
                    <div>
                        <img src="https://cdn.britannica.com/31/137731-050-C7505FD2/Herd-bison-Elk-Island-National-Park-Alberta.jpg" alt="Elk Island National Park" className="mx-auto h-64 w-full object-cover" />
                    </div>
                    <div>
                        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/515000/515969-muttart-conservatory.jpg" alt="Muttart Conservatory" className="mx-auto h-64 w-full object-cover" />
                    </div>
                    <div>
                        <img src="https://curiocity.com/wp-content/uploads/2022/08/ef.jpeg" alt="Edmonton International Fringe Festival" className="mx-auto h-64 w-full object-cover" />
                    </div>
                </Slider>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">West Edmonton Mall</h3>
                            <p className="text-gray-900">More than just a shopping center, it's a monumental attraction in its own right. It is one of the largest malls in the world, equipped with an indoor water park, an amusement park, ice rinks, an aquarium, and over 800 shops and services. It's a place that promises entertainment for all ages.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">North Saskatchewan River Valley</h3>
                            <p className="text-gray-900">This extensive system of urban parks offers a network of hiking and biking trails, picnic areas, and the opportunity to see wildlife in its natural habitat. It's ideal for those looking for a nature getaway without leaving the city.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Legislature Building</h3>
                            <p className="text-gray-900">The Alberta Legislature Building, located in the capital city of Edmonton, is the meeting place of the Legislative Assembly and the Executive Council. Its stunning architecture and historical significance make it a must-visit attraction.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Art Gallery of Alberta</h3>
                            <p className="text-gray-900">This contemporary art gallery showcases a diverse collection of works, including paintings, sculptures, and multimedia installations. It's a hub for cultural enthusiasts and art lovers.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Fort Edmonton Park</h3>
                            <p className="text-gray-900">Experience the history of Edmonton firsthand at Fort Edmonton Park. This living history museum features reconstructed buildings and exhibits that depict life in Edmonton from the late 19th century to the mid-20th century.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Elk Island National Park</h3>
                            <p className="text-gray-900">Escape the hustle and bustle of the city and immerse yourself in nature at Elk Island National Park. This protected area is home to a variety of wildlife, including bison, elk, and over 250 species of birds.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Muttart Conservatory</h3>
                            <p className="text-gray-900">Explore the botanical wonders of the world at the Muttart Conservatory. This botanical garden features four glass pyramids, each housing a different biome, including tropical, arid, temperate, and seasonal displays.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Edmonton International Fringe Festival</h3>
                            <p className="text-gray-900">Experience the world's second-largest fringe festival in Edmonton. The Edmonton International Fringe Festival features hundreds of performances, including theater, dance, comedy, and more, from artists around the globe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PointsOfInterest;
