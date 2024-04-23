# NODE_BACKEND_SERVER

This repository contains the backend API for a E-commerce coupon site System built using Node.js, Express, and MongoDB.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/manikantakatakam/NODE_BACKEND_SERVER
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
- Define the following environment variables in the .env file:
  - PORT: Port number for the server (e.g., 4000)
  - MONGODB_URI: MongoDB connection URI

4. Start the server:
   
```bash
npm run serve
```
The server should now be running at `http://localhost:<port>`

## API Endpoints

- `GET /api/data`: Get all data about merchants
- `POST /api/createMerchant`: Create a new Merchant
- `PUT /api/add-offer/:merchantName`: Add a new offer using merchant name
- `PUT /api/UpdateOffer/:offerId`: Update existing offer using Offer ID
- `DELETE /api/deleteOffer/:offerId`: Delete a offer using offer ID
  
## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

