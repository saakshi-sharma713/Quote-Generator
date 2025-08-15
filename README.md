<h1>📜 Quote Generator</h1>
A simple and elegant Quote Generator built with React that fetches random quotes from an external API and displays them instantly.

<h2>🚀 Features</h2>
Fetches random quotes using the qapi.vercel.app API

Clean and responsive UI

Ability to get a new quote at the click of a button

Built with React and Fetch API

## 🛠 Tech Stack
- **React** – Component-based UI
- **Tailwind CSS** – Styling and responsiveness
- **JavaScript (ES6+)**
- **fetch Api** - For making api request
---

<h2>🔗 API Source</h2>
Quotes are fetched from: 
https://quoteslate.vercel.app/api/quotes?page=1&limit=20

<h2>💡 How It Works</h2>
The app uses Fetch API inside a React component to call the quote API.

The fetched JSON response is parsed to extract the quote and author.

The state is updated, and the UI re-renders with the new quote.


<h2>📦 Installation & Setup</h2>
Clone the repository

```bash
git clone https://github.com/your-username/quote-generator.git
cd quote-generator

##Install dependencies

npm install
Run the project

## Run the Server

npm run dev
Open in browser
Visit http://localhost:5173 (or the port shown in your terminal).
