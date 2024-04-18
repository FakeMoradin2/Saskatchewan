// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Near Saskatchewan Drive | Edmonton</title>
        <meta name="description" content="Explore what's near Saskatchewan Drive in Edmonton, Alberta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Near Saskatchewan Drive</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Information about nearby attractions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Attractions</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">University of Alberta</h3>
              <p className="text-gray-700">Explore the vibrant campus and its mix of historical and modern architecture.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Old Strathcona & Whyte Avenue</h3>
              <p className="text-gray-700">Discover the historic district known for its nightlife, boutique shops, and vibrant arts scene.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">North Saskatchewan River Valley</h3>
              <p className="text-gray-700">Enjoy outdoor activities like hiking and biking in this extensive park system.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Louise McKinney Riverfront Park</h3>
              <p className="text-gray-700">Relax by the river and take in the scenic views at this beautiful park.</p>
            </div>

            {/* Add more attractions here */}
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://i.redd.it/ltkqsbon6ov41.jpg"
              alt="Saskatchewan Drive"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* More information */}
        <div className="mt-8 text-gray-900">
          <h2 className="text-2xl font-bold mb-4">More Information</h2>

          <p>
            Saskatchewan Drive is a scenic route located south of downtown Edmonton, Alberta, offering stunning views of the city skyline and the North Saskatchewan River.
          </p>

          <p>
            In addition to its natural beauty, the area around Saskatchewan Drive is home to several attractions, including the University of Alberta, Old Strathcona, and the North Saskatchewan River Valley. Visitors can explore the university campus, stroll through the historic district, or enjoy outdoor activities in the nearby parks.
          </p>

          {/* Add more information here */}
        </div>
      </main>
    </div>
  );
};

export default Home;
