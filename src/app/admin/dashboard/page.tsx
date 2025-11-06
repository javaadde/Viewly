'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rating: '',
    imageUrl: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await axios.post('/api/admin/movie/add', {
        ...formData,
        rating: Number(formData.rating)
      });

      setMessage({ type: 'success', text: 'Movie added successfully!' });
      setFormData({ name: '', description: '', rating: '', imageUrl: '' });
    } catch (error) {
      
      setIsLoading(false);
      setMessage({type:'error',text:'Failed to add movie. Please try again.'});

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-zinc-900 rounded-lg shadow-xl p-8 border border-zinc-800">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-zinc-400 mb-8">Add a new movie to the database</p>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-200 mb-2">
                Movie Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
                placeholder="Enter movie name"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-zinc-200 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition resize-none"
                placeholder="Enter movie description"
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-zinc-200 mb-2">
                Rating (0-10) *
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="0"
                max="10"
                step="0.1"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
                placeholder="0.0"
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-zinc-200 mb-2">
                Image URL *
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {message.text && (
              <div className={`p-4 rounded-lg border ${
                message.type === 'success' 
                  ? 'bg-green-950 border-green-800 text-green-200' 
                  : 'bg-red-950 border-red-800 text-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Adding Movie...' : 'Add Movie'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}