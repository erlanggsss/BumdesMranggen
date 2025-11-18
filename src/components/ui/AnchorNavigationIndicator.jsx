import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const AnchorNavigation = ({ 
  isCollapsed = false,
  className = "",
  onMenuStateChange = null
}) => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const navigationItems = [
    { label: "Beranda", href: "#beranda", icon: "Home" },
    { label: "Tentang Kami", href: "#tentang", icon: "BookOpen" },
    { label: "Unit Usaha", href: "#unit-usaha", icon: "Building2" },
    { label: "Struktur Organisasi", href: "#struktur-organisasi", icon: "Users" },
    { label: "Kontak", href: "#kontak", icon: "Phone" },
    { label: "FAQs", href: "#faq", icon: "HelpCircle" }
  ];

  // Notify parent component when menu state changes
  useEffect(() => {
    if (onMenuStateChange) {
      onMenuStateChange(isMobileMenuOpen);
    }
  }, [isMobileMenuOpen, onMenuStateChange]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems?.map(item => 
        document.querySelector(item?.href)
      )?.filter(Boolean);

      const scrollPosition = window.scrollY + 200;

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
  }, [navigationItems]);

  // Function to manually update active section
  const updateActiveSection = () => {
    const sections = navigationItems?.map(item => 
      document.querySelector(item?.href)
    )?.filter(Boolean);

    const scrollPosition = window.scrollY + 200;

    for (let i = sections?.length - 1; i >= 0; i--) {
      const section = sections?.[i];
      if (section && section?.offsetTop <= scrollPosition) {
        const sectionId = section?.id;
        setActiveSection(sectionId);
        break;
      }
    }
  };

  // Close mobile menu when clicking outside or on scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = (event) => {
        const nav = document.querySelector('nav');
        const menuSheet = event.target?.closest('[data-menu-sheet]');
        
        // Only close if clicking outside nav and outside menu sheet
        if (nav && !nav?.contains(event?.target) && !menuSheet) {
          setIsClosing(true);
          setTimeout(() => {
            setIsMobileMenuOpen(false);
            setIsClosing(false);
          }, 350);
        }
      };

      const handleScroll = () => {
        setIsClosing(true);
        setTimeout(() => {
          setIsMobileMenuOpen(false);
          setIsClosing(false);
        }, 350);
      };

      // Add small delay to prevent immediate closure
      const clickListener = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(clickListener);
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobileMenuOpen]);

  // Attach drag events on document level for better tracking
  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e) => handleDragMove(e);
    const handleEnd = () => handleDragEnd();

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragStartY, dragOffset]);

  const handleNavClick = (href) => {
    // Trigger slide down animation before closing
    setIsClosing(true);
    
    // Navigate during animation (immediate) with better offset
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element?.offsetTop - 150; // Account for fixed nav + menu overlay
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        });

        // Manually update active section multiple times during smooth scroll
        const scrollUpdateInterval = setInterval(() => {
          updateActiveSection();
        }, 100);

        // Stop updating after smooth scroll animation completes (typically 500-800ms)
        setTimeout(() => {
          clearInterval(scrollUpdateInterval);
          updateActiveSection(); // Final update to ensure correct section
        }, 1000);
      }
    }, 50); // Small delay to ensure DOM is ready
    
    // Close menu after animation completes
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 350); // Slightly shorter than animation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Improved drag handlers with better state management
  const handleDragStart = (e) => {
    setIsDragging(true);
    const startY = e.type.includes('touch') ? e.touches?.[0]?.clientY : e.clientY;
    setDragStartY(startY);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging || dragStartY === 0) return;
    
    e.preventDefault();
    const currentY = e.type.includes('touch') ? e.touches?.[0]?.clientY : e.clientY;
    const offset = currentY - dragStartY;
    
    // Only allow dragging downwards with minimum threshold
    if (offset > 0) {
      setDragOffset(offset);
    }
  };

  const handleDragEnd = () => {
    // If dragged more than 80px downward, close the menu
    if (dragOffset > 80) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
        setIsDragging(false);
        setDragStartY(0);
        setDragOffset(0);
      }, 350);
    } else {
      // Reset drag state if didn't drag enough
      setIsDragging(false);
      setDragStartY(0);
      setDragOffset(0);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Logo - Responsive sizing */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src="/favicon.png" alt="BUMDes Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <div className="font-poppins font-bold text-sm sm:text-lg lg:text-xl text-primary">
                <span className="hidden sm:inline">BUMDes Gotong Royong Sejahtera</span>
                <span className="sm:hidden">BUMDes Gotong Royong Sejahtera</span>
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
      </nav>
      
      {/* Mobile Menu Sheet - Slides up from bottom (half screen) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          style={{ 
            pointerEvents: isClosing ? 'none' : 'auto',
            opacity: isClosing ? 0 : 1,
            transition: isClosing ? 'opacity 0.35s ease-in' : 'opacity 0.3s ease-out'
          }} 
          data-menu-sheet
        >
          {/* Background overlay - Animated fade in/out */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                setIsMobileMenuOpen(false);
                setIsClosing(false);
              }, 350);
            }}
            aria-hidden="true"
            style={{
              animation: isClosing ? 'fadeOut 0.35s ease-in forwards' : 'fadeIn 0.3s ease-out',
              pointerEvents: isClosing ? 'none' : 'auto'
            }}
          />
          
          {/* Menu content - Slides up from bottom (50vh) or down when closing */}
          <div 
            className="fixed bottom-0 left-0 right-0 max-h-[50vh] bg-white shadow-2xl rounded-t-3xl overflow-hidden"
            style={{
              animation: isClosing 
                ? 'slideDown 0.35s cubic-bezier(0.68, 0.28, 0.68, 1) forwards' 
                : 'slideUp 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
              maxHeight: '50vh',
              pointerEvents: isClosing ? 'none' : 'auto',
              transform: isDragging && dragOffset > 0 ? `translateY(${dragOffset}px)` : 'translateY(0)',
              transition: !isDragging && dragStartY === 0 ? 'transform 0.2s ease-out' : 'none'
            }}
            data-menu-sheet
          >
            {/* Handle bar for mobile indication - Draggable */}
            <div 
              className="flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
              style={{
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full transition-colors" />
            </div>

            {/* Menu items */}
            <div className="px-4 pb-4 space-y-1">
              {navigationItems?.map((item) => {
                const isActive = activeSection === item?.href?.substring(1);
                return (
                  <button
                    key={item?.href}
                    onClick={() => handleNavClick(item?.href)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left font-inter font-medium text-sm transition-all duration-250 min-h-10 ${
                      isActive 
                        ? 'text-primary bg-primary/10 border border-primary/20' :'text-gray-700 hover:text-primary hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Add custom animations to tailwind.css if not already present */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default AnchorNavigation;