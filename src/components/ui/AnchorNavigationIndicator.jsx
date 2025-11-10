import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const AnchorNavigation = ({ 
  isCollapsed = false,
  className = ""
}) => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Beranda", href: "#beranda", icon: "Home" },
    { label: "Tentang Kami", href: "#tentang", icon: "Users" },
    { label: "Unit Usaha", href: "#unit-usaha", icon: "Building2" },
    { label: "Program", href: "#program", icon: "Calendar" },
    { label: "Produk", href: "#produk", icon: "Package" },
    { label: "Kontak", href: "#kontak", icon: "Phone" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems?.map(item => 
        document.querySelector(item?.href)
      )?.filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = sections?.[i];
        if (section && section?.offsetTop <= scrollPosition) {
          const sectionId = section?.id;
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Leaf" size={18} color="white" className="sm:w-6 sm:h-6" />
            </div>
            <div className="font-poppins font-bold text-sm sm:text-lg lg:text-xl text-primary">
              <span className="hidden sm:inline">BUMDes Makmur Sejahtera</span>
              <span className="sm:hidden">BUMDes</span>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems?.map((item) => {
              const isActive = activeSection === item?.href?.substring(1);
              return (
                <button
                  key={item?.href}
                  onClick={() => handleNavClick(item?.href)}
                  className={`font-inter font-medium text-sm xl:text-base transition-colors duration-250 hover:text-primary min-h-11 px-3 py-2 ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-gray-700'
                  }`}
                >
                  {item?.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button - Touch-friendly size */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-3 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-250 min-h-11 min-w-11 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Full-screen overlay on small screens */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="lg:hidden fixed inset-0 top-14 sm:top-16 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu content */}
          <div className="lg:hidden fixed inset-0 top-14 sm:top-16 bg-white z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {navigationItems?.map((item) => {
                const isActive = activeSection === item?.href?.substring(1);
                return (
                  <button
                    key={item?.href}
                    onClick={() => handleNavClick(item?.href)}
                    className={`w-full flex items-center space-x-4 px-4 py-4 rounded-lg text-left font-inter font-medium text-base transition-colors duration-250 min-h-12 ${
                      isActive 
                        ? 'text-primary bg-primary/10' :'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default AnchorNavigation;