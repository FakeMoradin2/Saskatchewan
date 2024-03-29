import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState('');
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    try {
      const res = await axios.get('/api/db');
      const data = await res.data;
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const submitProperty = async () => {
    setLoading(true);
    try {
      if (!description || !bathrooms || !bedrooms || !imageUrl) {
        toast.error('Completa todos los campos, incluyendo la URL de la imagen');
        setLoading(false);
        return;
      }

      const property = {
        description: description,
        bathrooms: bathrooms,
        bedrooms: bedrooms,
        imageUrl: imageUrl,
      };

      await axios.post('/api/db', property, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      getProperties();
      toast.success('Propiedad agregada exitosamente');
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error('Error al agregar la propiedad');
    }

    setLoading(false);
  };

  const resetForm = () => {
    setDescription('');
    setBathrooms(0);
    setBedrooms(0);
    setImageUrl('');
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-black w-full h-50 relative overflow-hidden">
        <img 
          src="/WhatsApp Image 2024-03-23 at 5.33.24 PM.jpeg"                       
          alt="Casa en Edmonton"
          className='w-full h-50 object-cover lg:h-80'
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-left p-4 text-white">
          <h1 className="text-3xl lg:text-4xl font-bold">Saskatchewan Dr</h1>
        </div>
      </header>

      <main className="p-4">
        <Toaster position="bottom-center" />
        {showForm && (
          <div className='bg-gray-200 p-4'>
            <div className='flex flex-col p-4 space-y-4 bg-gray-200'>
              <label htmlFor="description" className="text-gray-800 font-semibold">Descripción:</label>
              <input
                id="description"
                className='px-4 py-2 text-black border rounded focus:outline-none focus:border-blue-500'
                type='text'
                placeholder='Descripción de la propiedad'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="bathrooms" className="text-gray-800 font-semibold">Baños:</label>
              <input
                id="bathrooms"
                className='px-4 py-2 text-black border rounded focus:outline-none focus:border-blue-500'
                type='number'
                placeholder='Número de baños'
                value={bathrooms}
                onChange={(e) => setBathrooms(parseInt(e.target.value))}
              />
              <label htmlFor="bedrooms" className="text-gray-800 font-semibold">Habitaciones:</label>
              <input
                id="bedrooms"
                className='px-4 py-2 text-black border rounded focus:outline-none focus:border-blue-500'
                type='number'
                placeholder='Número de habitaciones'
                value={bedrooms}
                onChange={(e) => setBedrooms(parseInt(e.target.value))}
              />
              <label htmlFor="imageUrl" className="text-gray-800 font-semibold">URL de la Imagen:</label>
              <input
                id="imageUrl"
                className='px-4 py-2 text-black border rounded focus:outline-none focus:border-blue-500'
                type='text'
                placeholder='URL de la imagen'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>
        )}
        
        <section className="bg-gray-200 p-4">
          <div className="flex justify-end p-4 space-x-4 bg-gray-200">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              disabled={loading}
              onClick={submitProperty}
            >
              {loading ? 'Detener' : 'Agregar Propiedad'}
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={toggleForm}
            >
              {showForm ? 'Ocultar Formulario' : 'Agregar Nueva Propiedad'}
</button>
</div>
</section>
{loading && <div className="text-center mt-4">Cargando...</div>}
    
    <section className="p-4 bg-gray-200 flex flex-wrap">
      {properties.map((property, i) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4" key={i}>
          <div className="bg-white border border-gray-200 p-6 rounded-md flex flex-col items-center mb-4">
            <img
              src={property.imageUrl}
              alt={property.description}
              className="mb-4 rounded-md object-cover"
              style={{ width: '100%', height: '250px' }}
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {property.description}
            </h3>
            <p className="text-gray-600">
              Baños: {property.bathrooms}, Habitaciones: {property.bedrooms}
            </p>
          </div>
        </div>
      ))}
    </section>
  </main>
  <footer className="text-center py-4 text-gray-600">
    © {new Date().getFullYear()} Mi Empresa de Renta
  </footer>
</div>
);
}
