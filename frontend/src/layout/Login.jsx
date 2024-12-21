import React, { useState } from "react";
import axios from "axios";
import picture1 from "../assets/images/picture1.jpg";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const countries = [
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+20", label: "Egypt (+20)" },
  { value: "+91", label: "India (+91)" },
  { value: "+33", label: "France (+33)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+86", label: "China (+86)" },
  { value: "+7", label: "Russia (+7)" },
  { value: "+27", label: "South Africa (+27)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+55", label: "Brazil (+55)" },
  { value: "+1", label: "Canada (+1)" },
  { value: "+52", label: "Mexico (+52)" },
  { value: "+31", label: "Netherlands (+31)" },
  { value: "+64", label: "New Zealand (+64)" },
  { value: "+507", label: "Panama (+507)" },
];

function Login() {
  const [selectedCountry, setSelectedCountry] = useState("+20");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://example.com/api/register", {
        ...formData,
        phoneNumber: `${selectedCountry}${phoneNumber}`,
      });
      console.log("Registration successful:", response.data);
      navigate("/success");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="relative">
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/2">
            <img
              src={picture1}
              alt="Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Create Your Account
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-1/2"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-1/2"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleInputChange}
              />

              <Select
                options={countries}
                defaultValue={countries.find((c) => c.value === "+20")}
                onChange={handleCountryChange}
                placeholder="Select Your Country"
              />

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={selectedCountry}
                  readOnly
                  className="input input-bordered w-1/4 text-center"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-3/4"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleInputChange}
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />

              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInputChange}
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInputChange}
                  />
                  <span>Female</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Enter
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
