import React, { useState } from 'react';
import './main.css';
import image1 from './assets/1.jpg'; // Import images from assets folder
import image2 from './assets/9.png';
import image3 from './assets/3.jpg';
import image4 from './assets/4.jpg';
import image5 from './assets/5.jpg';
import ContactModal from './contactmodal';

const Main = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (image, index) => {
    setSelectedImage(image);
    setActiveCard(index);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <div className="text-content">
          <h2 className="award-winning">AWARD WINNING</h2>
          <h1 className="title">DIGITAL MARKETING AGENCY</h1>
          <p className="description">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum.
          </p>
          <button className="contact-button" onClick={toggleModal}>CONTACT US</button>
        </div>
        <div className="image-content">
          <img src={selectedImage || image1} alt="Selected" />
        </div>
      </div>

      {/* Services Section */}
      <div className="content">
        <h2>WHAT WE DO</h2>
        <h3>SERVICES PROVIDE for you</h3>
      </div>
      <div className="top-right-text">
        <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh.<br /> Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
      </div>
      
      {/* Slider Section */}
      <div className="slider-container">
        <div className="slider">
          <div className={`slide ${activeCard === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${image1})` }} onClick={() => handleClick(image1, 0)}>
            <div className="info">
              <h2>WEB DEVELOPMENT</h2>
              <p> Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum </p>
              <p>READ MORE</p>
            </div>
          </div>
          <div className={`slide ${activeCard === 1 ? 'active' : ''}`} style={{ backgroundImage: `url(${image2})` }} onClick={() => handleClick(image2, 1)}>
            <div className="info">
              <h2>GRAPHIC DESIGN</h2>
              <p> Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum </p>
              <p>READ MORE</p>
            </div>
          </div>
          <div className={`slide ${activeCard === 2 ? 'active' : ''}`} style={{ backgroundImage: `url(${image3})` }} onClick={() => handleClick(image3, 2)}>
            <div className="info">
              <h2>DIGITAL MARKETING</h2>
              <p> Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum </p>
              <p>READ MORE</p>
            </div>
          </div>
          <div className={`slide ${activeCard === 3 ? 'active' : ''}`} style={{ backgroundImage: `url(${image4})` }} onClick={() => handleClick(image4, 3)}>
            <div className="info">
              <h2>MOBILE APP DEVELOPMENT</h2>
              <p> Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum </p>
              <p>READ MORE</p>
            </div>
          </div>
          <div className={`slide ${activeCard === 4 ? 'active' : ''}`} style={{ backgroundImage: `url(${image5})` }} onClick={() => handleClick(image5, 4)}>
            <div className="info">
              <h2>UI/UX DESIGN</h2>
              <p> Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus. Morbi sed lacus nec risus finibus feugiat et fermentum </p>
              <p>READ MORE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Project Section */}
      <div className="project-section">
        <h4>OUR PROJECT</h4>
        <h5>WHY WE ARE BEST</h5>
      </div>
      <div className="cards-section">
        <div className="big-card">
          {selectedImage && <img src={selectedImage} alt="Big Card" />}
        </div>
        <div className="small-cards">
          <div className={`card ${activeCard === 0 ? 'active' : ''}`} onClick={() => handleClick(image1, 0)}>
            <h3>Card 1</h3>
            <p>Genderless Kei - Japan's Hot<br /> Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of </p>
          </div>
          <div className={`card ${activeCard === 1 ? 'active' : ''}`} onClick={() => handleClick(image2, 1)}>
            <h3>Card 2</h3>
            <p>Better Strategy & Quality<br />Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of </p>
          </div>
          <div className={`card ${activeCard === 2 ? 'active' : ''}`} onClick={() => handleClick(image3, 2)}>
            <h3>Card 3</h3>
            <p> Genderless Kei - Japan's Hot<br /> Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of </p>
          </div>
          {/* Similar changes for other cards */}
        </div>
      </div>

      {/* Growth Section */}
      <div className="growth-section">
        <h2>Experts Growth</h2>
      </div>

      <div className="our-growth-section">
        <h3>Our Growth</h3>
      </div>

      {/* Horizontal Cards Section */}
    
      <div className="xyz">
      <div className="lord">
        <div className="just">
        <span className="emoji">❤️</span>
          <p> 199 + </p>
          <p>Staticafied customers</p>
        </div>
        <div className="just">
        <span className="emoji">⌚</span>
          <p> 1591+ </p>
          <p>Day of Operation</p>
        </div>
        <div className="just">
        <span className="emoji">✔️</span>
          <p>283+ </p>
          <p>Complete Project</p>
        </div>
        <div className="just">
        <span className="emoji">🏆</span>
          <p>75+ </p>
          <p>Win Awards</p>
        </div>
      </div>
    </div>
       


       
      {showModal && <ContactModal onClose={toggleModal} />}
    </div>
  );
};

export default Main;

