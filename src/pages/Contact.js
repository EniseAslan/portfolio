import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Contact() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryNames = response.data.map(
          (country) => country.name.common+"a"
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

  return (
    <div className="main">
      <div className="contactcard">
        <form onSubmit={handleSubmit(formSubmit)}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              id="fullname"
              type="text"
              className="field"
              placeholder="Enter your name"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              id="emaill"
              type="email"
              className="field"
              placeholder="Enter your email"
              {...register("emaill", { required: true })}
            />
            {errors.emaill && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <input
              id="mesage"
              type="text"
              className="field"
              placeholder="Enter your name"
              {...register("mesage", {
                required: "This field is required",
                minLength: {
                  value: 20,
                  message: "Message must be at least 20 characters long",
                },
              })}
            />
            {errors.mesage && (
              <span className="error">{errors.mesage.message}</span>
            )}
          </div>
          <div className="input-box">
            <label>Country</label>
            <select
              id="country"
              className="field"
              {...register("country", { required: true })}
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="error">This field is required</span>
            )}
          </div>

          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
