
# Sentinel Sports

Sentinel Sports is a web application designed for sports fans to place bets on live sports matches. The app displays upcoming matches, allows users to select a team and place a bet, and shows the history of placed bets. The website offers a dynamic experience where users can interact with live sports events and bet on their favorite teams.

## Table of Contents 
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [API Setup](#api-setup)
6. [How to Use](#how-to-use)
7. [Contribution](#contribution)
8. [License](#license)
9. [Contact](#contact)
## Features

- **Live Sports Betting**: Place bets on live sports matches.
- **Upcoming Matches**: View details of upcoming sports matches.
- **Bet History**: Track all bets placed by the user.
- **Search Functionality**: Search for matches or players.
- **Responsive Design**: The website is designed to be responsive on both desktop and mobile devices.

## Technologies Used

- **HTML5**: The markup language used for creating the structure of the website.
- **CSS3**: For styling the application and making it responsive.
- **JavaScript**: To manage dynamic content, user interactions, and form handling.
- **Bootstrap**: Used for the layout and responsive design.
- **Font Awesome**: For icons and user interface enhancements.
- **JSON API**: Used for fetching live data (sports matches) for betting.
  
## Project Structure

- `index.html`: The main entry page of the website.
- `styles.css`: The custom styles for the application.
- `scripts.js`: The JavaScript code handling functionality such as betting, display of matches, etc.
- `matches.json` (or API endpoint): Contains the list of upcoming sports matches that users can place bets on.

## Installation

To run the project locally, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sentinel-sports.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd sentinel-sports
   ```

3. **Start the project**: 
   If you have a local server set up (like using `live-server` or `http-server`), simply run it within the project directory:
   ```bash
   live-server
   ```

4. **Open in your browser**: 
   The application should now be running on `http://localhost:8080` (or the port defined by your server).

## API Setup

If you are using a local API to serve the matches (e.g., using a mock API or a backend server), make sure the `matches.json` or API endpoint is available and the following API endpoint is accessible from the frontend:
```bash
http://localhost:3000/matches
```

## How to Use

1. **Placing a Bet**:
   - Browse through the **Upcoming Matches** section to see the available matches.
   - Select a match, choose your team, and enter the bet amount.
   - Click the "Place Bet" button to place your bet.

2. **View Bet History**:
   - After placing a bet, the bet details will be stored and displayed in the **Bet History** section.

3. **Search for Matches**:
   - Use the search bar to search for specific matches or teams by name.

## Contribution

Feel free to fork this repository and make improvements! If you would like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Contact

For any inquiries, you can contact the project owner:

- **George Maina Kairu**
- **Email**: gmaina424@gmail.com
- **Website**: [KairuMaina-dev.netlify.app](https://KairuMaina-dev.netlify.app)
```

