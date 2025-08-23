# App Backoffice

A simple backoffice application built with **Laravel 12** + **React (Inertia.js + TypeScript + TailwindCSS + TinyMCE)**.  
Includes authentication, CRUD posts, and WYSIWYG editor.

---

## 🚀 Installation

### 1. Clone Repository
```bash
git clone https://github.com/ArdyWin/App-Backoffice.git
cd App-Backoffice
```
### 2. Install PHP Dependencies
```bash
composer install
```
### 3. Install Node Dependencies
```bash
npm install
```
### 4. Copy Environment File
```bash
cp .env.example .env
```
### 5. Generate App Key
```bash
php artisan key:generate
```
### 6. Configure Database
Edit .env and set your database credentials:

```makefile
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=app_backoffice
DB_USERNAME=root
DB_PASSWORD=
```
### 7. Run Migrations & Seeder
```bash
php artisan migrate --seed
```
Seeder will create default admin user:

```yaml
email: admin@gmail.com
password: #admin1234
```
### 8. Build Frontend
For development:

```bash
npm run dev
```
For production:
```bash
npm run build
```
### 9. Run Server
```bash
php artisan serve
```
Now open: http://127.0.0.1:8000
---

### 🛠 Tech Stack

| Technology  | Description                          |
|-------------|--------------------------------------|
| 🐘 PHP 8.4  | Required runtime for Laravel 12       |
| 🟢 Laravel  | Backend API & Authentication          |
| ⚛️ React    | Frontend with Inertia.js + TypeScript |
| 🎨 TailwindCSS | Utility-first CSS framework        |
| 📝 TinyMCE  | WYSIWYG editor for post body          |
| 🗄️ MySQL    | Relational Database                   |

---
### 👤 Default Admin Login
```yaml
Email: admin@gmail.com
Password: #admin1234
```
## 📌 Features

- 🔑 **Authentication**
  - Login only (Register disabled, admin seeded via seeder)
- 📝 **Post Management (CRUD)**
  - Create, Read, Update, Delete posts
- 🎨 **WYSIWYG Editor**
  - Rich text editor with **TinyMCE**

---
### 🌐 API Endpoints

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/posts`       | Fetch all posts        |
| GET    | `/api/posts/{id}`  | Fetch single post detail |

yaml

---
