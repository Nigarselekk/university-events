import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createEvent } from '../services/eventService';

const EventCreationPage = () => {
  const initialValues = {
    name: '',
    date: '',
    location: '',
    description: '',
    organizer: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Event name is required'),
    date: Yup.date().required('Event date is required'),
    location: Yup.string().required('Event location is required'),
    description: Yup.string().required('Event description is required'),
    organizer: Yup.string().required('Event organizer is required'),
  });


  const handleFormSubmit = async (formData) => {
    try {
     // console.log('FormData:', formData);
      const response = await fetch('http://localhost:3001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log('Event created successfully:', data);
        // Redirect to the event listing page after successful event creation
        // You may use the react-router-dom history for redirection if needed
        window.location.href = '/';
      } else {
        // Handle error response
        console.error('Error creating event:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while creating the event:', error);
      
    }
  };
  


  return (
    <div>
      <h1  class = "create-event" >Create Event</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form class = "create-event" >
          <div class = "eventFeatures " >
            <label  htmlFor="name">Event Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div class = "eventFeatures ">
            <label htmlFor="date">Event Date:</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div class = "eventFeatures ">
            <label htmlFor="location">Event Location:</label>
            <Field type="text" id="location" name="location" />
            <ErrorMessage name="location" component="div" className="error" />
          </div>

          <div class = "eventFeatures ">
            <label htmlFor="description">Event Description:</label>
            <Field as="textarea" id="description" name="description" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div class = "eventFeatures "> 
            <label htmlFor="organizer">Event Organizer:</label>
            <Field type="text" id="organizer" name="organizer" />
            <ErrorMessage name="organizer" component="div" className="error" />
          </div>

          <button class = "btn-delete" type="submit" >Create Event</button>

        </Form>
      </Formik>
    </div>
  );
};

export default EventCreationPage;