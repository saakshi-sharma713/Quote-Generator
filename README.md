<h1>📜 Quote Generator</h1>
A simple and elegant Quote Generator built with React that fetches random quotes from an external API and displays them instantly.

🚀 Features
Fetches random quotes using the qapi.vercel.app API

Clean and responsive UI

Ability to get a new quote at the click of a button

Built with React and Fetch API

🛠️ Tech Stack
React – Frontend framework

Fetch API – For making API requests

CSS – For styling

📦 Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/quote-generator.git
cd quote-generator
Install dependencies

bash
Copy
Edit
npm install
Run the project

bash
Copy
Edit
npm run dev
Open in browser
Visit http://localhost:5173 (or the port shown in your terminal).

🔗 API Source
Quotes are fetched from:
https://qapi.vercel.app/api/random

Example API Response:

json
Copy
Edit
{
  "quote": "The best way to predict the future is to invent it.",
  "author": "Alan Kay"
}
📷 Screenshots
(Add your project screenshots here)

💡 How It Works
The app uses Fetch API inside a React component to call the quote API.

The fetched JSON response is parsed to extract the quote and author.

The state is updated, and the UI re-renders with the new quote.
