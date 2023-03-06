twitter-geo-sentiment is a web app built with a ReactJS interface connected to a RESTful Flask API to analyse the sentiment of collected geo-tagged tweets, providing data visualisation based upon the collated data.

The Twitter Search API is used to collect the most recent tweets based on given keywords by location. A naive-bayes sentiment classifier trained on tweets determines the sentiment of individual tweets, which are then aggregated to provide a mean sentiment for a region. A React frontend receives all this and provides data visualisations illustrating sentiment regarding a specific topic across states or countries.

This project was part of the submission for my IB Computer Science Internal Assessment.

## Tech stack

### Frontend

- **ReactJS** styled with styled-components and Bootstrap

### Backend

- **Python (Flask)** for the API
- **Scikit-learn** and **NLTK** for training the sentiment analysis model
- **MongoDB** for storing query history
- **Twitter API** for data