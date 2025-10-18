# Twitt - Twitter Video Downloader

A fast, free, and easy-to-use Twitter/X video downloader built with Next.js. Download videos in HD quality instantly without registration.

## Features

- ⚡ **Lightning Fast** - Download videos in seconds with optimized servers
- 🎬 **Multiple Formats** - Support for 480p, 720p, 1080p, and more
- 🔒 **Secure & Private** - End-to-end encryption, no data logging
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🌙 **Dark Mode** - Beautiful light and dark theme support
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🚀 **SEO Optimized** - Structured data and meta tags for search engines

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Typography**: Google Cardó font
- **Icons**: Custom SVG icons with stroke-width: 1
- **Animations**: CSS animations with Tailwind utilities
- **Analytics**: Vercel Analytics integration
- **Type Safety**: TypeScript

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles and design tokens
│   ├── robots.ts               # SEO robots configuration
│   ├── sitemap.xml/route.tsx   # Dynamic sitemap generation
│   ├── api/
│   │   └── download-video/     # Video download API endpoint
│   ├── about/page.tsx          # About page
│   ├── features/page.tsx       # Features page
│   ├── reviews/page.tsx        # User reviews page
│   ├── contact/page.tsx        # Contact form page
│   ├── privacy/page.tsx        # Privacy policy page
│   └── terms/page.tsx          # Terms of service page
├── components/
│   ├── header.tsx              # Navigation header with theme toggle
│   ├── tool-section.tsx        # Main video downloader tool
│   ├── features-section.tsx    # Features showcase
│   ├── reviews-section.tsx     # User reviews carousel
│   ├── footer.tsx              # Footer with links
│   ├── animated-hero.tsx       # Animated hero section
│   ├── theme-provider.tsx      # Dark mode context provider
│   ├── structured-data.tsx     # JSON-LD schema markup
│   ├── svg-icons.tsx           # Custom SVG icon library
│   └── ui/                     # shadcn/ui components
├── public/
│   ├── .well-known/
│   │   └── security.txt        # Security contact information
│   └── [images]                # Static assets
└── lib/
    └── utils.ts                # Utility functions
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/twitt-downloader.git
cd twitt-downloader
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

See `.env.example` for all available environment variables. Key variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL for SEO and redirects
- `TWITTER_VIDEO_API_KEY` - API key for Twitter video downloader service (optional for demo)

## API Endpoints

### POST /api/download-video

Download a Twitter/X video.

**Request:**
\`\`\`json
{
  "url": "https://x.com/username/status/123456789",
  "quality": "high"
}
\`\`\`

**Response:**
\`\`\`json
{
  "url": "https://example.com/video.mp4",
  "title": "Video Title",
  "thumbnail": "https://example.com/thumbnail.jpg",
  "duration": 45,
  "quality": "1080p"
}
\`\`\`

**Error Handling:**
- 400: Invalid URL or missing parameters
- 429: Rate limit exceeded (30 requests per minute)
- 500: Server error

## Design System

### Colors

The design uses a minimalist color system with semantic tokens:

- **Primary**: Main brand color for interactive elements
- **Background**: Page background
- **Foreground**: Text color
- **Card**: Card backgrounds
- **Muted**: Secondary text and borders
- **Destructive**: Error states

### Typography

- **Font Family**: Google Cardó (primary), system fonts (fallback)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight with 1.4-1.6 line height

### Spacing

Uses Tailwind's spacing scale (4px base unit):
- `p-4` = 16px padding
- `gap-6` = 24px gap
- `mb-8` = 32px margin-bottom

## Features

### Header
- Animated "Twitt" logo with hover effects
- Dark/Light mode toggle
- Responsive navigation menu
- Mobile sidebar for small screens

### Tool Section
- URL input with validation
- Quality selection dropdown
- Loading animations with spinner
- Error handling with alerts
- Results display with download options

### Features Section
- Expandable feature cards
- Hover animations
- Icon animations

### Reviews Section
- User testimonials carousel
- Star ratings
- Avatar display

### Footer
- Company links
- Legal links (Privacy, Terms)
- Social media links
- Copyright information

## SEO Features

- ✅ Meta tags on all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap generation
- ✅ robots.txt configuration
- ✅ Canonical URLs
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Code splitting with dynamic imports
- Caching headers on API responses
- Rate limiting on API endpoints

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Focus visible states
- Semantic HTML elements

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly buttons and inputs
- Optimized layouts for all screen sizes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with one click

### Docker

\`\`\`bash
docker build -t twitt-downloader .
docker run -p 3000:3000 twitt-downloader
\`\`\`

### Self-Hosted

\`\`\`bash
npm run build
npm start
\`\`\`

## Development

### Code Style

- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting

### Testing

\`\`\`bash
npm run lint
\`\`\`

### Building

\`\`\`bash
npm run build
\`\`\`

## License

MIT License - see LICENSE file for details

## Support

For support, email support@twitt.com or open an issue on GitHub.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

### v0.1.0 (Initial Release)
- Initial release with core features
- Dark mode support
- Responsive design
- SEO optimization
- API integration ready
