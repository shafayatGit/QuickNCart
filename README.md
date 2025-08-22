# 🛒 QuickNCart

## ⚡️ https://quickncart.vercel.app/

QuickNCart is a **Next.js** based e-commerce web application with **NextAuth** for authentication and **MongoDB** as the backend database.  
It allows users to log in using Google credentials and manage products through a dashboard.

---

## 🚀 Features
- 🔐 **Google Authentication** using NextAuth
- 📦 **Product Management**
  - Add new products from the dashboard
  - View product details
- 🌐 **Modern UI**
  - Responsive design
  - Navigation bar & footer
- 📊 **MongoDB Integration** for product storage
- ⚡ Built with **Next.js 13 (App Router)**

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 13, React, Tailwind CSS
- **Authentication:** NextAuth.js (Google provider)
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Vercel

---

## 📂 Project Structure
├── Components/ # Shared UI components (Navbar, Footer, Product client, etc.)
├── lib/ # Database connection & auth utilities
├── mock/ # Mock product data (for testing)
├── public/ # Static assets
├── src/
│ └── app/
│ ├── api/ # API routes (NextAuth, Products CRUD)
│ ├── dashboard/ # Dashboard pages (Add products)
│ ├── login/ # Login page
│ ├── products/ # Product listing & detail pages
│ └── layout.js # Root layout
├── .env.local # Environment variables

yaml
Copy
Edit

---

## ⚙️ Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/shafayatGit/QuickNCart.git
cd QuickNCart
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Configure Environment Variables
Create a .env.local file in the root directory and add:

env
Copy
Edit
MONGODB_URI=your-mongodb-uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
4. Run Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

📸 Screenshots (Optional)
Add some screenshots of your app UI here for better presentation.

🚀 Deployment
This project is optimized for deployment on Vercel:

bash
Copy
Edit
vercel
📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Md.Shafayat Hossain
