import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-2xl w-full text-center relative z-10">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-white opacity-90">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-10 bg-white"></div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
        
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 text-gray-600 text-sm">
          <div>Error Code: 404</div>
          <div>•</div>
          <div>Page Not Found</div>
        </div>

        {/* Minimalist floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-75"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}