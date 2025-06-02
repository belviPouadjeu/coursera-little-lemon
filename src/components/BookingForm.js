import { useState, useEffect } from 'react';
import wine from '../assets/images/wine-glasses.png';
import dishIcon from '../assets/images/dish_icon.svg';
import timeIcon from '../assets/images/time.svg';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [seating, setSeating] = useState('');
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
    seating: false
  });

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  useEffect(() => {
    const savedDate = localStorage.getItem('reservation-date');
    const savedTime = localStorage.getItem('reservation-time');
    const savedGuests = localStorage.getItem('reservation-guests');
    const savedOccasion = localStorage.getItem('reservation-occasion');
    const savedSeating = localStorage.getItem('reservation-seating');

    if (savedDate) setDate(savedDate);
    if (savedTime) setTime(savedTime);
    if (savedGuests) setGuests(Number(savedGuests));
    if (savedOccasion) setOccasion(savedOccasion);
    if (savedSeating) setSeating(savedSeating);
  }, []);

  useEffect(() => {
    localStorage.setItem('reservation-date', date);
    localStorage.setItem('reservation-time', time);
    localStorage.setItem('reservation-guests', guests);
    localStorage.setItem('reservation-occasion', occasion);
    localStorage.setItem('reservation-seating', seating);
  }, [date, time, guests, occasion, seating]);

  const validateField = (field, value) => {
    switch (field) {
      case 'date': return !!value;
      case 'time': return !!value;
      case 'guests': return value >= 1 && value <= 10;
      case 'occasion': return !!value;
      case 'seating': return !!value;
      default: return false;
    }
  };

  const isFormValid = () => {
    return (
      validateField('date', date) &&
      validateField('time', time) &&
      validateField('guests', guests) &&
      validateField('occasion', occasion) &&
      validateField('seating', seating)
    );
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const getInputClass = (field, value) => {
    if (!touched[field]) return '';
    return validateField(field, value) ? 'valid' : 'invalid';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true,
      seating: true
    });

    if (!isFormValid()) {
      alert('Please fill all required fields correctly');
      return;
    }

    alert('Reservation saved!');
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Make a Reservation</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-columns">
          <div className="form-left">
            {/* Seating */}
            <div className="form-group">
              <div className="radio-group">
                <label className={`radio-option ${seating === 'indoor' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="seating"
                    value="indoor"
                    checked={seating === 'indoor'}
                    onChange={(e) => setSeating(e.target.value)}
                    onBlur={() => handleBlur('seating')}
                    className={getInputClass('seating', seating)}
                  />
                  <span>Indoor</span>
                </label>
              </div>
              {touched.seating && !seating && (
                <p className="error-message">Please select a seating option</p>
              )}
            </div>
            {/* Date */}
            <div className="form-group">
              <label htmlFor="res-date">Date</label>
              <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onBlur={() => handleBlur('date')}
                className={getInputClass('date', date)}
                min={new Date().toISOString().split('T')[0]}
              />
              {touched.date && !date && (
                <p className="error-message">Please select a date</p>
              )}
            </div>

            {/* Occasion */}
            <div className="form-group">
              <label htmlFor="occasion">
                <img src={wine} alt="Occasion" className="input-icon wine" />
                Occasion
              </label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                onBlur={() => handleBlur('occasion')}
                className={getInputClass('occasion', occasion)}
              >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
              {touched.occasion && !occasion && (
                <p className="error-message">Please select an occasion</p>
              )}
            </div>
          </div>

          <div className="form-right">
            <div className="form-group">
              <div className="radio-group">
                <label className={`radio-option ${seating === 'outdoor' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="seating"
                    value="outdoor"
                    checked={seating === 'outdoor'}
                    onChange={(e) => setSeating(e.target.value)}
                    onBlur={() => handleBlur('seating')}
                    className={getInputClass('seating', seating)}
                  />
                  <span>Outdoor</span>
                </label> 
              </div>
              {touched.seating && !seating && (
                <p className="error-message">Please select a seating option</p>
              )}
            </div>
             
            <div className="form-group">
              <label htmlFor="res-time">
                <img src={timeIcon} alt="Time" className="input-icon" />
                Time
              </label>
              <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onBlur={() => handleBlur('time')}
                className={getInputClass('time', time)}
              >
                <option value="">Select time</option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {touched.time && !time && (
                <p className="error-message">Please select a time</p>
              )}
            </div>

            {/* Guests */}
            <div className="form-group">
              <label htmlFor="guests">
                <img src={dishIcon} alt="Guests" className="input-icon" />
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                onBlur={() => handleBlur('guests')}
                className={getInputClass('guests', guests)}
                min="1"
                max="10"
              />
              {touched.guests && (guests < 1 || guests > 10) && (
                <p className="error-message">Please enter between 1 and 10 guests</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`submit-btn ${isFormValid() ? 'active' : 'disabled'}`}
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
