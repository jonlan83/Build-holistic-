# Build Holistic - Artist Portfolio & Shop

A beautiful, immersive website for a professional artist inspired by psychedelic experiences and personal growth through creative expression.

## 🍄 Project Vision

This site celebrates an artist whose creative journey was opened and inspired by transformative experiences. The goal is to:
- **Showcase** stunning artwork in immersive gallery experiences
- **Tell the story** of personal growth through creative expression
- **Build community** around holistic and psychedelic-inspired art
- **Enable sales** of original work and prints
- **Inspire** both the artist and her audience through authentic storytelling
- **Celebrate milestones** and boost creative confidence

## 🎨 Features

### Gallery & Portfolio
- Immersive, animated gallery grid with responsive design
- Individual artwork pages with detailed descriptions
- Behind-the-scenes creative process content
- Artist story and journey narrative

### E-Commerce
- Product catalog with original works and prints
- Shopping cart and checkout (Stripe integration)
- Commission inquiry system
- Order management dashboard

### Community & Inspiration
- Blog section for creative insights
- Email newsletter signup
- Social media integration
- Testimonials and collector stories

### Artist Dashboard
- Content management system for gallery uploads
- Inventory and sales tracking
- Email subscriber management
- Analytics and insights

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (React) + TypeScript
- **Styling**: Tailwind CSS + Framer Motion (animations)
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **E-Commerce**: Stripe API
- **CMS**: Headless CMS (Contentful or Sanity)
- **Hosting**: Vercel (frontend) + Railway/Supabase (backend)

## 📁 Project Structure

```
Build-holistic-/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   │   ├── page.tsx        # Homepage
│   │   ├── gallery/        # Gallery pages
│   │   ├── shop/           # Shop pages
│   │   ├── about/          # About/story page
│   │   └── blog/           # Blog pages
│   ├── components/         # Reusable React components
│   ├── public/            # Static assets
│   └── styles/            # Global styles & Tailwind config
├── backend/               # Node.js/Express API
│   ├── routes/           # API endpoints
│   ├── models/           # Database models
│   ├── controllers/      # Business logic
│   └── middleware/       # Auth, validation
├── database/            # SQL migrations & schemas
├── docs/               # Documentation
└── .github/            # GitHub workflows & configs

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- Stripe account (for payments)

### Installation

1. Clone the repository
```bash
git clone https://github.com/jonlan83/Build-holistic-.git
cd Build-holistic-
```

2. Setup frontend
```bash
cd frontend
npm install
npm run dev
```

3. Setup backend
```bash
cd backend
npm install
npm run dev
```

## 📋 Development Roadmap

### Phase 1: MVP (Foundation)
- [ ] Homepage with hero section
- [ ] About/Artist story page
- [ ] Basic gallery with 5-10 artworks
- [ ] Contact form
- [ ] Responsive design

### Phase 2: E-Commerce
- [ ] Product catalog system
- [ ] Stripe integration
- [ ] Shopping cart
- [ ] Checkout process
- [ ] Order confirmation emails

### Phase 3: Community & Content
- [ ] Blog system
- [ ] Newsletter signup
- [ ] Social media feeds
- [ ] Testimonials section
- [ ] Behind-the-scenes gallery

### Phase 4: Artist Tools
- [ ] Admin dashboard
- [ ] Content management
- [ ] Sales analytics
- [ ] Inventory tracking

## 🎭 Design Inspiration

The visual aesthetic should reflect:
- Psychedelic and organic color palettes
- Flowing, organic shapes and animations
- Holistic and spiritual symbolism
- Immersive gallery experiences
- Growth and transformation themes

## 📝 Contributing

This is a personal project for a professional artist. Contributions should focus on:
- Feature implementation
- Bug fixes
- Performance optimization
- Accessibility improvements

## 📄 License

[Add appropriate license]

## 📧 Contact

For inquiries about the artist or commissioning work, visit the website.

---

**Built with ❤️ for a holistic artist journey**
