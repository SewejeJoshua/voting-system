 
---

# 🗳️ Voting CLI App

A lightweight JavaScript command-line application that enables users to vote for candidates through browser prompts. The admin adds candidate names, users cast votes, and the winner is automatically determined and displayed in the console. Built entirely with vanilla JavaScript for quick interaction in any browser or terminal.

---

## ✨ Features

* 🧑‍💼 Admin adds candidates via prompt
* 🗳️ Users vote interactively using simple prompts
* 📊 Automatic vote tally and result display
* 👑 Declares the winner with the highest vote
* ⚡ Lightweight and runs entirely in JavaScript

---

## 🛠 Installation

Follow these steps to set up and run the project on your local machine:

### Clone the Repository

```bash
git clone https://github.com/SewejeJoshua/voting-system.git
cd voting-system
```

---

## 🚀 Usage

You can run this voting app:

* via a **web browser** 

---

###  Run in the Browser

1. Open the `index.js` file in your browser.
2. Open the **Developer Console** (`F12` or right-click → *Inspect* → *Console*).
3. Paste or run the code directly in the console.
4. The app will prompt for candidate names and voting input.

---

```bash
node index.js
```

> *Note: Make sure you're using a prompt-compatible Node.js setup (e.g., `readline-sync`, `prompt-sync`, or similar).*

---

## 💡 Example Output

```
Enter candidate names (comma-separated): Alice,Bob,Charlie

Voter 1, cast your vote: Bob  
Voter 2, cast your vote: Alice  
Voter 3, cast your vote: Bob  

📊 Results:
Alice - 1 vote  
Bob - 2 votes  
Charlie - 0 votes

👑 Winner: Bob
```

---

## 📝 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more details.

---

## 👨🏽‍💻 Author

**Seweje Joshua**
GitHub: [@SewejeJoshua](https://github.com/SewejeJoshua) 
