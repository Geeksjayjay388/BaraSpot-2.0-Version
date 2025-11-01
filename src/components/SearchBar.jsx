import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Upload, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <header className="bg-gradient-to-r from-indigo-50 to-purple-50 shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 
            onClick={() => navigate('/')}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
          >
            BlackVendors
          </h1>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleUploadClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium transition-colors duration-200"
            >
              <Upload className="w-4 h-4" />
              <span>Sell Item</span>
            </button>
            <Link to="/profile">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium transition-colors duration-200">
                About Us
              </button>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={handleUploadClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors duration-200"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t pt-4">
            <button
              onClick={handleUploadClick}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 font-medium transition-colors duration-200"
            >
              <Upload className="w-4 h-4" />
              Sell Item
            </button>
            <Link to="/profile">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 font-medium transition-colors duration-200">
                About Us
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="h-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"></div>
    </header>
  );
}

export default SearchBar;
