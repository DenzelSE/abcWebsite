'use client';

import React, { useState } from "react";
import { forms } from "@/data/index";
import ParticleBackground from "./particles"; 
import SlideIn from "../animations/slide-in";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Calendar, Mail, MapPin, Phone, Loader2, CheckCircle, XCircle } from "lucide-react";
import SocialLinks from "../social-links";

interface AlertState {
  message: string;
  type: 'success' | 'error' | '';
  visible: boolean;
}

interface FormDataState {
  [key: string]: string;
}

interface FormField {
    name: string;
    type: 'select' | 'textarea' | 'text' | 'email' | 'tel';
    placeholder: string;
    required?: boolean;
    options?: string[];
}

interface FormsData {
    [key: string]: {
        text: string;
        fields: FormField[];
    };
}

const Collaborate: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string>("researcher");
  const [formData, setFormData] = useState<FormDataState>({});
  const [alert, setAlert] = useState<AlertState>({ message: "", type: "", visible: false });
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleButtonClick = (key: string): void => {
    if (activeForm === key) {
      setShowForm(!showForm);
    } else {
      setActiveForm(key);
      setShowForm(true);
    }
    setFormData({});
    setFormErrors({});
    setIsInitialLoad(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const typedForms = forms as FormsData;
    const currentForm = typedForms[activeForm];
    const errors: { [key: string]: string } = {};

    currentForm.fields.forEach((field: FormField) => {
      if (field.required && !formData[field.name]?.trim()) {
        errors[field.name] = 'This field is required';
      }
      
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          errors[field.name] = 'Please enter a valid email address';
        }
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) {
      setAlert({
        message: "Please fill in all required fields correctly.",
        type: "error",
        visible: true,
      });
      return;
    }

    setIsSubmitting(true);
    const typedForms = forms as FormsData;
    
    // Prepare form data with additional info
    const submissionData = {
      formType: activeForm,
      submissionDate: new Date().toISOString(),
      formName: typedForms[activeForm]?.text || activeForm,
      ...formData,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setAlert({
          message: "Thank you for reaching out! We've received your submission and will contact you soon.",
          type: "success",
          visible: true,
        });
        // Reset form on successful submission
        setFormData({});
        setFormErrors({});
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setAlert({ message: "", type: "", visible: false });
        }, 5000);
      } else {
        setAlert({
          message: result.error || "Failed to submit form. Please try again.",
          type: "error",
          visible: true,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({
        message: "Network error. Please check your connection and try again.",
        type: "error",
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonLabels = {
    developer: "Hire a Developer",
    researcher: "Work with a Researcher",
    partner: "Partner with Us",
    cohort26: "Join Cohort 2026",

  };

  const typedForms = forms as FormsData;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-black/90 via-black/70 to-black/50 justify-start text-white px-4 sm:px-8 py-8 transition-all duration-700">
      {/* Main container - Stack on mobile, side by side on desktop */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="w-full lg:flex-1">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                <span className="text-white px-2 py-1">Work</span>
                <span className="text-white px-2 py-1">With</span>
                <span className="text-white px-2 py-1">Us</span>
              </h2>

              <SlideIn direction="left">
                <Card className="w-full max-w-md mx-auto lg:mx-0">
                  <CardHeader>
                    <CardTitle className="font-mono text-xl sm:text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col gap-4">
                      {[
                        {
                          icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                          title: "Headquarters",
                          description: "Johannesburg, South Africa",
                        },
                        {
                          icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                          title: "Email",
                          description: "africablockchainclub@gmail.com",
                        },
                        {
                          icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                          title: "Phone",
                          description: "+27 11 123 4567",
                        },
                        {
                          icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                          title: "Weekly Meetups",
                          description: "Every Saturday, 11:00 AM SAST",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-stretch gap-3 sm:gap-4">
                          {/* Icon */}
                          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-amber-500 flex-shrink-0">
                            {item.icon}
                          </div>

                          {/* Text container stretched */}
                          <div className="flex flex-col justify-center flex-1">
                            <h4 className="font-semibold text-sm sm:text-base text-white">{item.title}</h4>
                            <p className="text-gray-200 text-sm sm:text-base break-all">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Follow us */}
                    <div className="pt-4 sm:pt-6">
                      <h4 className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base text-white text-center">
                        Follow Us
                      </h4>
                      <div className="flex justify-center gap-4">
                        <SocialLinks />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideIn>
            </div>
          </div>

          {/* Right Column - Form Section */}
          <div className="w-full lg:flex-1 flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center justify-center z-10">
              {/* Instructions */}
              <p className="text-lg sm:text-xl font-semibold mb-6 text-center">
                <span className="inline-block text-white px-2 py-1">
                  Choose an option below to get started.
                </span>
              </p>

              {/* Buttons  */}
<div className="flex flex-col gap-2 w-72 z-10">
  {Object.keys(typedForms).map((key: string) => {
    const isActive = activeForm === key;
    const isResearcher = key === "researcher";
    
    const baseClass = "px-4 sm:px-2 py-3 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base";
    const extraClass = isActive || (isInitialLoad && isResearcher)
      ? "bg-amber-600 shadow-md shadow-amber-500 text-white"
      : "bg-[#1B1B1B] text-gray-300";

    return (
      <button
        key={key}
        onClick={() => handleButtonClick(key)}
        className={`${baseClass} ${extraClass} w-full text-center`}
        type="button"
      >
        {buttonLabels[key as keyof typeof buttonLabels]}
      </button>
    );
  })}
</div>
              {/* Form */}
              <ParticleBackground className="mx-0 mt-18" />
              <div className={`mt-4 sm:mt-6 w-full max-w-md transition-all duration-700 ease-in-out overflow-hidden ${
                showForm ? "opacity-100 scale-100 max-h-[2000px]" : "opacity-0 scale-95 max-h-0"
              }`}>
                {showForm && activeForm && typedForms[activeForm] && (
                  <div className="p-4 sm:p-6 rounded-2xl border border-[#F4F4F4] bg-black/40">
                    <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
                      {typedForms[activeForm]?.text}
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {typedForms[activeForm]?.fields.map((field: FormField) => (
                        <div key={field.name}>
                          {field.type === "select" ? (
                            <div>
                              <select
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                className={`w-full p-3 bg-gray-800 text-white rounded-lg text-sm sm:text-base border ${
                                  formErrors[field.name] ? 'border-red-500' : 'border-gray-700'
                                }`}
                                required={field.required}
                              >
                                <option value="" disabled>
                                  {field.placeholder}
                                </option>
                                {field.options?.map((option: string) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                              {formErrors[field.name] && (
                                <p className="text-red-400 text-xs mt-1">{formErrors[field.name]}</p>
                              )}
                            </div>
                          ) : field.type === "textarea" ? (
                            <div>
                              <textarea
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className={`w-full p-3 bg-gray-800 text-white rounded-lg h-32 text-sm sm:text-base border ${
                                  formErrors[field.name] ? 'border-red-500' : 'border-gray-700'
                                }`}
                                rows={4}
                                required={field.required}
                              />
                              {formErrors[field.name] && (
                                <p className="text-red-400 text-xs mt-1">{formErrors[field.name]}</p>
                              )}
                            </div>
                          ) : (
                            <div>
                              <input
                                name={field.name}
                                type={field.type}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className={`w-full p-3 bg-gray-800 text-white rounded-lg text-sm sm:text-base border ${
                                  formErrors[field.name] ? 'border-red-500' : 'border-gray-700'
                                }`}
                                required={field.required}
                              />
                              {formErrors[field.name] && (
                                <p className="text-red-400 text-xs mt-1">{formErrors[field.name]}</p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-lg font-semibold transition-all text-sm sm:text-base flex items-center justify-center gap-2 ${
                          isSubmitting 
                            ? 'bg-amber-700 cursor-not-allowed' 
                            : 'bg-amber-600 hover:bg-amber-500'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Submit Request'
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert */}
      {alert.visible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className={`px-6 py-4 rounded-lg shadow-lg text-center w-full max-w-sm ${
            alert.type === "success" ? "bg-emerald-900 border border-emerald-700" : "bg-red-900 border border-red-700"
          }`}>
            <div className="flex items-center justify-center gap-3 mb-3">
              {alert.type === "success" ? (
                <CheckCircle className="h-6 w-6 text-emerald-400" />
              ) : (
                <XCircle className="h-6 w-6 text-red-400" />
              )}
              <p className="text-sm sm:text-base font-medium">{alert.message}</p>
            </div>
            <button
              className="mt-3 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 text-sm sm:text-base font-medium"
              onClick={() => setAlert({ ...alert, visible: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 

export default Collaborate;