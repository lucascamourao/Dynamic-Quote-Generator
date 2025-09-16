# Dynamic Quote Generator

A simple and interactive single-page application (SPA) that fetches and displays quotes asynchronously. This project showcases dynamic content updates, professional animations, and status notifications, all built with vanilla JavaScript and popular third-party libraries.

![Project Demo](https://user-images.githubusercontent.com/username/repo/demo.gif)
*(Note: You should replace the link above with a real screenshot or a GIF of your project in action.)*

## 🌟 Features

-   **One-Click Quote Fetching:** Get a new random quote with a single button click.
-   **Asynchronous Data Simulation:** Uses a custom `Promise` to simulate a network request with a 1-2 second delay, mimicking a real-world API call.
-   **Smooth Animations:** New quotes are revealed with a fluid entry animation, powered by GSAP.
-   **Toast Notifications:** Instant, non-intrusive user feedback for actions like "Fetching new quote..." using Toastify-JS.
-   **Single-Page Application (SPA) Experience:** The content updates dynamically without ever reloading the browser page.

## 🛠️ Technologies & Concepts

This project is a great showcase of modern front-end development techniques using:

-   **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
-   **Animations:** [**GSAP (GreenSock Animation Platform)**](https://gsap.com/) for high-performance animations.
-   **Notifications:** [**Toastify-JS**](https://github.com/apvarun/toastify-js) for creating elegant toast notifications.
-   **Key JavaScript Concepts:**
    -   Asynchronous JavaScript (`async/await`)
    -   Creating `Promises` from scratch
    -   Advanced DOM Manipulation
    -   Event Listeners (`addEventListener`)
    -   Integrating third-party libraries via CDN

## 📂 Project Structure

The project is organized into four main files:

```plaintext
quote-generator/
│
├── index.html       # The main HTML structure of the page
├── style.css        # All styles for layout and appearance
├── app.js           # Core application logic and event handling
└── quotes.js        # A simple module exporting an array of quotes
```

-   **`index.html`**: Contains the basic page structure, including the quote display area and the button. It's responsible for importing all necessary CSS and JavaScript files (including libraries from a CDN).
-   **`style.css`**: Provides the styling to center the content, create the card layout, and ensure the application is visually appealing.
-   **`app.js`**: The brain of the application. It handles the button's click event, calls the async function to fetch data, manipulates the DOM to update the quote, and triggers the animations and notifications.
-   **`quotes.js`**: A simple data source that exports a JavaScript array of quote strings.

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/quote-generator.git](https://github.com/your-username/quote-generator.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd quote-generator
    ```

3.  **Open the `index.html` file in your browser:**
    You can do this by double-clicking the file in your file explorer or by using a live server extension in your code editor (like VS Code's Live Server).

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
