# Deployment Guide

## Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add the following variables:
     - `NEXT_PUBLIC_SITE_URL`: Your production URL
     - `TWITTER_VIDEO_API_KEY`: Your API key

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site is now live!

## Self-Hosted Deployment

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps:

1. **Build the application**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start the server**
   \`\`\`bash
   npm start
   \`\`\`

3. **Configure reverse proxy** (nginx example)
   \`\`\`nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

4. **Set up SSL** (using Let's Encrypt)
   \`\`\`bash
   sudo certbot --nginx -d yourdomain.com
   \`\`\`

## Docker Deployment

### Build Docker Image
\`\`\`bash
docker build -t twitt-downloader:latest .
\`\`\`

### Run Container
\`\`\`bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  -e TWITTER_VIDEO_API_KEY=your_api_key \
  twitt-downloader:latest
\`\`\`

### Docker Compose
\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_SITE_URL: https://yourdomain.com
      TWITTER_VIDEO_API_KEY: ${TWITTER_VIDEO_API_KEY}
    restart: unless-stopped
\`\`\`

## Environment Variables

### Required
- `NEXT_PUBLIC_SITE_URL` - Your production URL

### Optional
- `TWITTER_VIDEO_API_KEY` - API key for video downloads
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` - Vercel Analytics ID

## Performance Optimization

1. **Enable Caching**
   - Set appropriate Cache-Control headers
   - Use CDN for static assets

2. **Monitor Performance**
   - Use Vercel Analytics
   - Monitor API response times
   - Track Core Web Vitals

3. **Database Optimization** (if using)
   - Add indexes on frequently queried columns
   - Use connection pooling

## Security Checklist

- [ ] Set strong API keys
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Set security headers
- [ ] Enable rate limiting
- [ ] Regular security updates
- [ ] Monitor for suspicious activity

## Troubleshooting

### Build Fails
\`\`\`bash
# Clear cache and rebuild
rm -rf .next
npm run build
\`\`\`

### Port Already in Use
\`\`\`bash
# Use different port
PORT=3001 npm start
\`\`\`

### Environment Variables Not Loading
- Ensure `.env.local` is in root directory
- Restart development server
- Check variable names (must start with `NEXT_PUBLIC_` for client-side)

## Support

For deployment issues, check:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- GitHub Issues
