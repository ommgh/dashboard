# NEX-MCF

A Versatile Tool for Amazon MCF

## Prerequisites

- Node.js (version 18.x or later)
- npm or Yarn
- Amazon Marketplace Account

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ommgh/dashboard.git
cd nex-mcf
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the project root and add the following environment variables:

```
AUTH_SECRET=your_auth_secret
DATABASE_URL=your_database_connection_string
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RESEND_API_KEY=your_resend_api_key
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. Running the Application

Development Mode:

```bash
npm run dev
```

Production Build:

```bash
npm run build
npm run start
```

## Features

- Next.js App Router
- Authentication (GitHub, Google)
- Database Integration
- Email Services
- AI-Powered Insights

## Tech Stack

- Next.js
- React
- TypeScript
- Prisma
- NextAuth
- Resend
- Google Gemini API

## License

This project is licensed under the MIT License

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.
