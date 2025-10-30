# 🎬 x402 Payment Platform

A modern **movie streaming demo** built with seamless **x402 payment integration**.  
Users can easily unlock and watch premium video content through secure, on-chain payments powered by **x402**.

This project demonstrates a complete payment flow — from checkout to video access — with both backend and frontend designed for clarity, performance, and security.

---

## 🚀 Features Overview

### 🖥 Backend
- Lightweight **Express.js** server using `x402-express` middleware  
- **Paywalled route** to restrict premium video access  
- **Secure transaction verification** through x402 API  
- Integrated with **Base Sepolia testnet** for development and testing  
- Clean, modular structure for quick customization  

### 💎 Frontend
- **Sleek, gradient-based UI** with fluid animations  
- **Fully responsive design**, optimized for all screen sizes  
- **Real-time payment flow** with progress indicators  
- **Premium player interface** that unlocks content post-payment  
- **Consistent navigation bar** featuring x402 brand elements  
- **Elegant footer** with socials, quick links, and resources  
- **Font Awesome icons** for visual enhancement  
- **SEO-friendly meta tags** (OpenGraph + Twitter Cards)  
- **Custom favicon** and clean layout for brand identity  

---

## ⚙️ Prerequisites

- Node.js **v22+**  
- EVM-compatible wallet with **Base Sepolia USDC**

---

## 🧩 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/michalstefanow/solana-x402-payment.git
   cd solana-x402-payment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Rename `.env.local` → `.env`
   - Add your details:
     ```bash
     WALLET_ADDRESS=your_ethereum_wallet_address
     NODE_ENV=development
     PORT=402
     ```

4. **Fund your wallet (Base Sepolia)**
   - Visit [https://faucet.circle.com/](https://faucet.circle.com/)
   - Select *Base Sepolia*
   - Request **test USDC**

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the app**
   - Visit [http://localhost:402](http://localhost:402)

---

## 🔐 How Payment Flow Works

1. The server applies `x402-express` middleware on the `/authenticate` route.  
2. When a visitor tries to access premium content, they must complete payment through the x402 gateway.  
3. After a successful transaction, they’re redirected to `/video-content`, where the exclusive video is served securely.  

---

## 🌐 Live Demo

👉 [x402 Demo](https://x402.moonsat.space/)

---

## 🧠 Customization Guide

- **Change video price:** Edit the `price` variable in `api/index.js`.  
- **Replace video file:** Update the video source path in `public/video-content.html`.  
- **Deploy to Base Mainnet:**  
  - Adjust the network configuration in `api/index.js`.  
  - Use valid CDP API keys and the appropriate facilitator.

---

## 📞 Contact

**Telegram:** [@MoonEagle](https://t.me/mooneagle1_1)
