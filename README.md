# Fotovoto Landing Page

## Overview

This repository contains the source code for the Fotovoto marketing and verification landing page. This project serves as the official web presence for the Fotovoto application, primarily for business verification purposes (Twilio, WhatsApp Business) and as a distribution point for mobile application downloads.

**Note**: This repository is currently in the setup phase. The specific technology stack and architecture are currently under review.

## Quick Links

- **Documentation**: [Koda Project Documentation](https://github.com/Beachy-Apps/koda-docs)

## Development Workflow

### 1. Issue Management
- Check GitHub Project for assigned issues.
- Follow the established branching strategy.
- Use conventional commit messages.
- Link pull requests to relevant issues.

### 2. Development
- Create feature branches: `feat/ISSUE_NUMBER-description` or `fix/ISSUE_NUMBER-description`.
- Follow the project's coding standards.
- Ensure all static assets are optimized.
- Implement responsive design principles (Mobile First).

### 3. Testing and Validation
- Validate HTML/CSS structure.
- Verify responsiveness across different device sizes.
- Check accessibility compliance.
- Run any configured unit or snapshot tests.

### 4. Code Review and Deployment
- Create pull requests with detailed descriptions of visual changes.
- Request code review.

**Note**: The workflow will be strictly enforced once the CI/CD pipelines are established.

## Documentation

### Project Documentation
- [Standards and Guidelines](https://github.com/Beachy-Apps/koda-docs/tree/main/5.%20Standards)
- [Project Requirements](https://github.com/Beachy-Apps/koda-docs/tree/main/2.%20Requirements)

### Repository Documentation (Future)
- Component library documentation.
- Deployment procedures.
- Troubleshooting guides.

## Best Practices

### Code Quality
- Follow Clean Code principles.
- Maintain a consistent file structure.
- Use semantic HTML.
- Document complex logic or styling workarounds.

### Performance
- Optimize images and media assets.
- Minimize bundle sizes.
- Ensure fast initial load times.

### Security
- Avoid exposing sensitive keys in the client-side code.
- Follow security standards defined in the main Koda documentation.

## Support

- **Documentation**: Refer to the `koda-docs` repository for system-wide standards.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

