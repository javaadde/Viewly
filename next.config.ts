// next.config.js - RECOMMENDED SECURE APPROACH
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'image.tmdb.org' }, // TMDB
      { protocol: 'https', hostname: 'resizing.flixster.com' }, // Flixster
      { protocol: 'https', hostname: 'm.media-amazon.com' }, // IMDb
      // Add other specific hosts here (e.g., 'i.ytimg.com' for YouTube thumbnails)
    ],
  },
};