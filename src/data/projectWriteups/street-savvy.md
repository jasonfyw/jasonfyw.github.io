street-savvy tailors recommendations to users for restaurants and other points of interest in Toronto using a recommendation engine that is dynamically updated based on the user's choices.

The Google Places API was used to collect data from over 1300 locations. NLP models from the Cohere API were used to extract keywords and categorical data for each location that the recommendation engine can use.

This project was developed in collaboration with my teammates as a submission to UofTHacks X.

## Tech stack

### Frontend

- **ReactJS** with Typescript and ChakraUI

### Backend

- **Python (Flask)** for the RESTful API
- **Firestore** for storing user profiles and location data

### Resources

- **Google Places API** for location data aggregation
- **Cohere API** for location keyword and feature extraction