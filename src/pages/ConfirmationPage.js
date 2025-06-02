import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import imageOne from '../assets/images/image_one.jpg';
import imageTwo from '../assets/images/image_two.jpg';
import imageThree from '../assets/images/image_three.jpg';

const ConfirmationPage = () => {
    const navigate = useNavigate();

    const [reservationData, setReservationData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
        seating: ''
    });

    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequest: ''
    });

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false
    });

    const [showPopup, setShowPopup] = useState(false);

    // Charger les données de réservation depuis localStorage
    useEffect(() => {
        setReservationData({
        date: localStorage.getItem('reservation-date') || '',
        time: localStorage.getItem('reservation-time') || '',
        guests: localStorage.getItem('reservation-guests') || '',
        occasion: localStorage.getItem('reservation-occasion') || '',
        seating: localStorage.getItem('reservation-seating') || ''
        });
    }, []);

    const validateField = (field, value) => {
        switch (field) {
        case 'firstName':
        case 'lastName':
            return value.trim() !== '';
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'phone':
            return /^\d{10,}$/.test(value);
        default:
            return true;
        }
    };

    const isFormValid = () => {
        return ['firstName', 'lastName', 'email', 'phone'].every((key) =>
        validateField(key, personalInfo[key])
        );
    };

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    };

    const getInputClass = (field) => {
        if (!touched[field]) return '';
        return validateField(field, personalInfo[field]) ? 'valid' : 'invalid';
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true
        });

        if (!isFormValid()) {
        alert('Please fill all required fields correctly.');
        return;
        }

        // Enregistrer les infos personnelles
        localStorage.setItem('reservation-firstName', personalInfo.firstName);
        localStorage.setItem('reservation-lastName', personalInfo.lastName);
        localStorage.setItem('reservation-email', personalInfo.email);
        localStorage.setItem('reservation-phone', personalInfo.phone);
        localStorage.setItem('reservation-specialRequest', personalInfo.specialRequest);

        // Réinitialiser les champs du formulaire
        setPersonalInfo({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequest: ''
        });

        setTouched({
        firstName: false,
        lastName: false,
        email: false,
        phone: false
        });

        // Supprimer uniquement les infos personnelles
        localStorage.removeItem('reservation-firstName');
        localStorage.removeItem('reservation-lastName');
        localStorage.removeItem('reservation-email');
        localStorage.removeItem('reservation-phone');
        localStorage.removeItem('reservation-specialRequest');

        // Afficher le popup
        setShowPopup(true);
    };

    const closePopup = () => {
        localStorage.clear();
        setShowPopup(false);
        navigate('/confirmation');
    };

    return (
        <div className="booking-container">
        <div className="booking-header">
            <h1>Confirm Your Reservation</h1>
            <p className="reservation-summary">
            {reservationData.seating || 'No seating'} seating for{' '}
            {reservationData.guests || '?'}{' '}
            {reservationData.guests === '1' ? 'person' : 'people'} on{' '}
            {reservationData.date || 'unknown date'} at{' '}
            {reservationData.time || 'unknown time'} (
            {reservationData.occasion || 'No occasion'})
            </p>
        </div>

        <form onSubmit={handleSubmit} className="form">
            <div className="form-columns">
            <div className="form-left">
                <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handleChange}
                    onBlur={() => handleBlur('firstName')}
                    className={getInputClass('firstName')}
                    required
                    placeholder="Enter your first name"
                />
                {touched.firstName && !personalInfo.firstName && (
                    <p className="error-message">Please enter your first name</p>
                )}
                </div>

                <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={personalInfo.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={getInputClass('email')}
                    required
                    placeholder="example@example.com"
                />
                {touched.email && !validateField('email', personalInfo.email) && (
                    <p className="error-message">Please enter a valid email address</p>
                )}
                </div>
            </div>

            <div className="form-right">
                <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={personalInfo.lastName}
                    onChange={handleChange}
                    onBlur={() => handleBlur('lastName')}
                    className={getInputClass('lastName')}
                    required
                    placeholder="Enter your last name"
                />
                {touched.lastName && !personalInfo.lastName && (
                    <p className="error-message">Please enter your last name</p>
                )}
                </div>

                <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur('phone')}
                    className={getInputClass('phone')}
                    required
                    placeholder="Enter your phone number"
                />
                {touched.phone && !validateField('phone', personalInfo.phone) && (
                    <p className="error-message">
                    Please enter a valid phone number (at least 10 digits)
                    </p>
                )}
                </div>

                <div className="form-group">
                <label htmlFor="specialRequest">Special Request (optional)</label>
                <textarea
                    id="specialRequest"
                    name="specialRequest"
                    value={personalInfo.specialRequest}
                    onChange={handleChange}
                    placeholder="Any allergies, seating preferences, etc."
                />
                </div>
            </div>
            </div>

            <div className="image-grid">
            <img src={imageThree} alt="Ambiance 3" />
            <img src={imageTwo} alt="Ambiance 2" />
            <img src={imageOne} alt="Ambiance 1" />
            </div>

            <button
            type="submit"
            className={`submit-btn ${isFormValid() ? 'active' : 'disabled'}`}
            disabled={!isFormValid()}
            >
            Confirm Reservation
            </button>
        </form>

        {showPopup && (
            <div className="popup-overlay">
            <div className="popup-content">
                <h2>Reservation Confirmed!</h2>
                <p>Your reservation has been saved successfully.</p>
                <button onClick={closePopup}>Continue</button>
            </div>
            </div>
        )}
        </div>
    );
};

export default ConfirmationPage;
