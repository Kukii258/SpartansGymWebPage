# 🏋️ Spartans Gym — Web Platform for Strength & Community

Welcome to **Spartans Gym**, the official website and management platform built for the powerhouse gym in **Križevci, Croatia**. Whether you're a fitness fanatic, a casual lifter, or someone just getting started, Spartans Gym brings the iron to the internet with a modern, responsive, and dynamic experience.

---

## 🚀 Project Overview

Spartans Gym is a full-stack web application built using:

- 🎨 **HTML/CSS** — For clean, modern, and responsive layouts
- 🧠 **JavaScript** — For interactive elements and seamless user experience
- 🐍 **Django** — Robust backend to handle dynamic content, member management, scheduling, and more

---

## 🛠 Features

- ✅ **Landing Page** – Showcasing the gym’s vibe, location, mission, and high-impact visuals
- ✅ **Class Schedules** – Easily view daily/weekly workout class timetables
- ✅ **Membership Plans** – Overview of pricing, benefits, and sign-up options
- ✅ **Trainer Bios** – Meet the certified warriors behind the gains
- ✅ **Admin Panel** – For staff to manage classes, members, and announcements

---

## 🧱 Tech Stack

| Frontend       | Backend       | Other Tools        |
|----------------|---------------|--------------------|
| HTML5          | Django (Python) | Postgres (default)   |
| CSS3 (Flex/Grid) | Django Admin  | Git + GitHub       |
| JavaScript (Vanilla) | Django Templates | VSCode, Postman   |

---


## 🔧 Installation

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/Kukii258/SpartansGymWebPage.git
cd spartans-gym

# Create a virtual environment
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Run the server
python manage.py runserver
