import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import  { useState } from 'react';
import './Feedback.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Men juda ham mamnunman! Dizaynlar zamonaviy, chiroyli va juda oson sozlanadi. Barchaga tavsiya qilaman!",
      author: "Islom Qodirov",
      position: "Mamnun mijoz",
      rating: 5
    },
    {
      id: 2,
      text: "Ajoyib xizmat va professional yondashuv. Hamma narsa vaqtida va sifatli bajarildi.",
      author: "Malika Karimova",
      position: "Biznes egasi",
      rating: 5
    },
    {
      id: 3,
      text: "Eng yaxshi tanlov edi! Jamoaning professional darajasi juda yuqori.",
      author: "Aziz Rahimov",
      position: "Dasturchi",
      rating: 5
    },
    {
      id: 4,
      text: "Bizning veb-saytimiz juda yaxshi va qoniqarli. Dizaynlar juda chiroyli va oson sozlanadi.",
      author: "Sardor Qodirov",
      position: "Mamnun mijoz",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <h2 className="testimonial-title">Mijozlarning Sharhlari</h2>
        <p className="testimonial-subtitle">Yuqori darajada qoniqarli mijozlarimizdan ba'zi fikrlar.</p>

        <div className="testimonial-card">
          <div className="quote-icon">"</div>

          <p className="testimonial-text">{currentTestimonial.text}</p>

          <div className="author-section">
            <h4 className="author-name">{currentTestimonial.author}</h4>
            <p className="author-position">{currentTestimonial.position}</p>
            
            {/* ⭐ Yulduzcha bahosi */}
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">
                  {i < currentTestimonial.rating ? <AiFillStar /> : <AiOutlineStar />}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ⬅️➡️ Navigatsiya tugmalari */}
        <div className="testimonial-arrows">
          <button onClick={prevTestimonial} className="arrow-button">⟵</button>
          <button onClick={nextTestimonial} className="arrow-button">⟶</button>
        </div>

        {/* ⚫ Navigatsiya nuqtalari */}
        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
