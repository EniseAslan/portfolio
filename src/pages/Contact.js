import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const { t, i18n } = useTranslation();
  const [countries, setCountries] = useState([]);

  const notify = () => toast("Completed");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryNames = response.data.map(
          (country) => country.name.common 
        );
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };

    fetchCountries();
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { fullname: "" },
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="main">
      <div className="contactcard">
        <form onSubmit={handleSubmit(formSubmit)}>
          <h2>{t('Contact Form')}</h2>
          <div className="input-box">
            <label>{t('Full Name')}</label>
            <input
              id="fullname"
              type="text"
              className="field"
              placeholder={t('Enter your name')}
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="error">{t('This field is required')}</span>
            )}
          </div>
          <div className="input-box">
            <label>{t('Email Address')}</label>
            <input
              id="emaill"
              type="email"
              className="field"
              placeholder={t('Enter your email')}
              {...register("emaill", { required: true })}
            />
            {errors.emaill && (
              <span className="error">{t('This field is required')}</span>
            )}
          </div>
          <div className="input-box">
            <label>{t('Your Message')}</label>
            <input
              id="mesage"
              type="text"
              className="field"
              placeholder={t('Enter your message')}
              {...register("mesage", {
                required: t('This field is required'),
                minLength: {
                  value: 20,
                  message: t('Message must be at least 20 characters long'),
                },
              })}
            />
            {errors.mesage && (
              <span className="error">{errors.mesage.message}</span>
            )}
          </div>
          <div className="input-box">
            <label>{t('Country')}</label>
            <select
              id="country"
              className="field"
              {...register("country", { required: true })}
            >
              <option value="">{t('Select a country')}</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="error">{t('This field is required')}</span>
            )}
          </div>

          <button onClick={notify} type="submit">{t('Send Message')}</button>
          <ToastContainer/>
        </form>

        <div className="language-switcher">
          <button className="lngbtn" onClick={() => changeLanguage('en')}>English</button>
          <button className="lngbtn" onClick={() => changeLanguage('tr')}>Türkçe</button>
        </div>
      </div>
    </div>
  );

 
}

export default Contact;
