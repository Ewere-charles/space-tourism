import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(0);

  useEffect(() => {
    const storedNav = localStorage.getItem('activeNav');
    if (storedNav !== null) {
      setActiveNav(parseInt(storedNav));
    }
  }, []); // Empty dependency array ensures this effect runs only once, on component mount

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const saveActiveNavToLocalStorage = (index) => {
    localStorage.setItem('activeNav', index);
    setActiveNav(index);
  };

  const active = (index) => {
    saveActiveNavToLocalStorage(index);

    switch (index) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/Destination');
        break;
      case 2:
        navigate('/crew');
        break;
      case 3:
        navigate('/Technology');
        break;
      default:
        navigate('/');
        break;
    }
  };

  const hamburgerIcon = isMenuOpen ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
      <g fill="#D0D6F9" fillRule="evenodd">
        <path
          d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"
          className="pointer-events-none"
        />
      </g>
    </svg>
  );


  return (
    <header className="fixed lg:top-5 top-0 z-30 w-full text-[16px] text-white uppercase tracking-[2.7px]">
      {/* Hamburger Navigation */}
      <ul
        id="menu"
        className={`md:hidden flex-col items-start justify-start w-[70%] h-full fixed top-0 -right-[100%] z-40 px-10 py-[80px] backdrop-blur-[20px] blurBg ${
          isMenuOpen ? ('flex', 'slide-in') : ('hidden', 'slide-out')
        }`}
      >
        <li
          className={`flex items-center justify-start cursor-pointer py-2 mb-5 ${activeNav === 0 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(0)}
        >
          <span className="md:hidden lg:block me-[10px]">00</span> Home
        </li>
        <li className={`flex items-center justify-start cursor-pointer py-2 mb-5 ${activeNav === 1 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(1)}>
          <span className="md:hidden lg:block me-[10px]">01</span> Destination
        </li>
        <li className={`flex items-center justify-start cursor-pointer py-2 mb-5 ${activeNav === 2 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(2)}>
          <span className="md:hidden lg:block me-[10px]">02</span> Crew
        </li>
        <li className={`flex items-center justify-start cursor-pointer py-2 mb-5 ${activeNav === 3 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(3)}>
          <span className="md:hidden lg:block me-[10px]">03</span> Technology
        </li>
      </ul>

      <nav className="py-[10px] flex items-center justify-between lg:ps-[50px] md:ps-[30px] md:pe-0 ps-4 pe-4 w-full h-[100px]">
        <div className="bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <ul className="md:flex items-center justify-start gap-10 w-[65%] h-full rounded-1 relative lg:ps-[80px] xl:w-[60%] md:ps-10 backdrop-blur-[20px] blurBg hidden barlow-condensed-regular">
          <div className="absolute h-[1px] lg:w-[45%] bg-zinc-600 rounded-lg right-[95%] z-10"></div>
          <li
          className={`hover:border-b-slate-400 hover:border-b-4 cursor-pointer h-full flex items-center justify-center ${activeNav === 0 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(0)}
          >
            <span className="md:hidden lg:block me-[10px]">00</span> Home
          </li>
          <li
          className={`hover:border-b-slate-400 hover:border-b-4 cursor-pointer h-full flex items-center justify-center ${activeNav === 1 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(1)}
          >
            <span className="md:hidden lg:block me-[10px]">01</span> Destination
          </li>
          <li
          className={`hover:border-b-slate-400 hover:border-b-4 cursor-pointer h-full flex items-center justify-center ${activeNav === 2 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(2)}
          >
            <span className="md:hidden lg:block me-[10px]">02</span> Crew
          </li>
          <li
          className={`hover:border-b-slate-400 hover:border-b-4 cursor-pointer h-full flex items-center justify-center ${activeNav === 3 ? 'border-b-4 border-b-white': ''}`}
          onClick={() => active(3)}
          >
            <span className="md:hidden lg:block me-[10px]">03</span> Technology
          </li>
        </ul>
        <button className="flex items-center justify-center md:hidden w-10 h-10 hamburger z-50" onClick={toggleMenu}>
          {hamburgerIcon}
        </button>
      </nav>
    </header>
  );
}

export default Header;