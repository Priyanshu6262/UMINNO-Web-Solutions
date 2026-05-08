// Services data
export const services = [
  {
    id: 1,
    icon: 'ShoppingCart',
    title: 'E-Commerce Websites',
    description: 'Full-featured online stores with payment gateway, product management, and inventory tracking.',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.4)',
  },
  {
    id: 2,
    icon: 'Store',
    title: 'Shop Management Systems',
    description: 'Complete POS and inventory management systems to streamline your retail operations.',
    color: 'from-blue-500 to-cyan-600',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  {
    id: 3,
    icon: 'Building2',
    title: 'Business Websites',
    description: 'Professional corporate websites that establish credibility and attract clients.',
    color: 'from-indigo-500 to-violet-600',
    glow: 'rgba(99, 102, 241, 0.4)',
  },
  {
    id: 4,
    icon: 'UserSquare',
    title: 'Portfolio Websites',
    description: 'Stunning personal portfolios that showcase your skills and projects effectively.',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.4)',
  },
  {
    id: 5,
    icon: 'Smartphone',
    title: 'Android Applications',
    description: 'High-performance native Android apps for your business with modern UI/UX.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.4)',
  },
  {
    id: 6,
    icon: 'LayoutDashboard',
    title: 'Custom Admin Panels',
    description: 'Powerful admin dashboards with analytics, user management, and full data control.',
    color: 'from-orange-500 to-amber-600',
    glow: 'rgba(249, 115, 22, 0.4)',
  },
];

// Web plans data
export const webPlans = [
  {
    id: 1,
    name: 'Starter Plan',
    price: '₹3,999*',
    description: 'Perfect for small businesses and startups',
    badge: null,
    features: [
      { text: '5 Pages', included: true },
      { text: '5 Days Delivery', included: true },
      { text: 'Mobile Responsive Design', included: true },
      { text: 'Contact Form', included: true },
      { text: '2 Revisions', included: true },
      { text: 'Hosting Support', included: true },
      { text: 'Free SSL Security Certificate', included: true },
      { text: 'Show Your Business on Google', included: true },
    ],
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
  {
    id: 2,
    name: 'Business Plan',
    price: '₹8,999*',
    description: 'Ideal for growing businesses',
    badge: 'Most Popular',
    features: [
      { text: '10 Pages', included: true },
      { text: '10 Days Delivery', included: true },
      { text: 'Basic Admin Features', included: true },
      { text: 'Mobile Responsive Design', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Hosting Support', included: true },
      { text: 'Free SSL Security Certificate', included: true },
      { text: 'Show Your Business on Google', included: true },
      { text: 'Basic SEO Optimization', included: true },
      { text: '5 Revisions', included: true },
    ],
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.4)',
  },
  {
    id: 3,
    name: 'Premium Plan',
    price: '₹19,999*',
    description: 'For enterprises & high-end businesses',
    badge: null,
    features: [
      { text: 'Unlimited Pages', included: true },
      { text: 'Custom Timeline', included: true },
      { text: 'Full Custom Dashboard', included: true },
      { text: 'Advanced Admin Panel', included: true },
      { text: 'Mobile Responsive Design', included: true },
      { text: 'Contact Form', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: 'Priority Hosting Support', included: true },
      { text: '10 Revisions', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Payment Gateway Integration', included: true },
    ],
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.4)',
  },
];

// Android plans data
export const androidPlans = [
  {
    id: 1,
    name: 'Starter App',
    price: '₹14,999',
    description: 'Simple yet powerful app for small businesses',
    badge: null,
    features: [
      { text: '5 Screens', included: true },
      { text: '15 Days Delivery', included: true },
      { text: 'Basic Admin Panel', included: true },
      { text: 'Firebase Authentication', included: true },
      { text: 'Push Notifications', included: true },
      { text: 'Offline Support', included: false },
      { text: 'API Integration', included: false },
      { text: 'Payment Gateway', included: false },
      { text: 'Analytics Dashboard', included: false },
    ],
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.3)',
  },
  {
    id: 2,
    name: 'Business App',
    price: '₹29,999',
    description: 'Feature-rich app for growing businesses',
    badge: 'Most Popular',
    features: [
      { text: '15 Screens', included: true },
      { text: '25 Days Delivery', included: true },
      { text: 'Advanced Admin Panel', included: true },
      { text: 'Firebase Suite', included: true },
      { text: 'Push Notifications', included: true },
      { text: 'Offline Support', included: true },
      { text: 'REST API Integration', included: true },
      { text: 'Payment Gateway', included: false },
      { text: 'Analytics Dashboard', included: false },
    ],
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.4)',
  },
  {
    id: 3,
    name: 'Premium App',
    price: '₹59,999',
    description: 'Enterprise-grade app with all features',
    badge: 'Best Value',
    features: [
      { text: 'Unlimited Screens', included: true },
      { text: 'Custom Timeline', included: true },
      { text: 'Full Admin Dashboard', included: true },
      { text: 'Complete Firebase Suite', included: true },
      { text: 'Smart Notifications', included: true },
      { text: 'Full Offline Support', included: true },
      { text: 'Custom API Integration', included: true },
      { text: 'Payment Gateway', included: true },
      { text: 'Advanced Analytics', included: true },
    ],
    color: 'from-orange-500 to-amber-600',
    glow: 'rgba(249, 115, 22, 0.4)',
  },
];

// Terms data
export const terms = [
  {
    id: 1,
    icon: 'CreditCard',
    title: 'Payment Policy',
    description: '25% advance payment is required before work begins. The remaining 75% is due upon project completion and delivery.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    icon: 'FileText',
    title: 'Content Responsibility',
    description: 'Clients must provide all necessary content, images, and materials on time. Delays in content may affect project delivery timelines.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    icon: 'PlusCircle',
    title: 'Extra Features',
    description: 'Additional features or significant changes requested after project start may incur extra charges. All additions will be quoted before implementation.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: 4,
    icon: 'Clock',
    title: 'Delivery Timeline',
    description: 'Delivery time depends on project complexity and scope. Final timelines are agreed upon before project commencement.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 5,
    icon: 'XCircle',
    title: 'Refund Policy',
    description: 'No refunds will be issued once project work has commenced. We ensure satisfaction through revisions within the agreed scope.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 6,
    icon: 'Headphones',
    title: 'Post-Delivery Support',
    description: 'Free support is available for 30 days after project delivery. Extended support packages are available upon request.',
    color: 'from-orange-500 to-amber-600',
  },
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Owner, TechShop Delhi',
    avatar: 'RS',
    review: 'UMINNO built our e-commerce platform in just 8 days! The quality exceeded expectations. Our sales doubled within the first month.',
    rating: 5,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Founder, StyleHub',
    avatar: 'PP',
    review: 'The team at UMINNO is incredibly professional. They delivered our fashion app on time with all features perfectly implemented.',
    rating: 5,
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'CEO, StartupX',
    avatar: 'VS',
    review: 'Outstanding work! The premium website they built for us has attracted numerous enterprise clients. Highly recommend UMINNO.',
    rating: 5,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 4,
    name: 'Anjali Mehta',
    role: 'Restaurant Owner',
    avatar: 'AM',
    review: 'Our restaurant management system is flawless. The admin panel is intuitive and the app works perfectly. Great team!',
    rating: 5,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 5,
    name: 'Arjun Kapoor',
    role: 'Freelancer & Designer',
    avatar: 'AK',
    review: 'The portfolio website UMINNO created for me landed me 3 high-value clients in the first week. Absolutely amazing work!',
    rating: 5,
    color: 'from-orange-500 to-amber-600',
  },
];

// FAQ data
export const faqs = [
  {
    id: 1,
    question: 'How long does it take to build a website?',
    answer: 'Delivery time depends on the plan and complexity. Basic websites take 5 days, Standard takes 10 days, and Premium projects have custom timelines. We always confirm the exact timeline before starting.',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, Bank Transfer, Paytm, PhonePe, and other digital payment methods. A 25% advance is required to start the project, with the balance due upon completion.',
  },
  {
    id: 3,
    question: 'Do you provide website hosting?',
    answer: 'Yes, we provide hosting guidance and support. We can set up your website on top hosting providers and help with domain registration. Hosting costs are separate from development costs.',
  },
  {
    id: 4,
    question: 'Can I request changes after delivery?',
    answer: 'Yes! Each plan includes a fixed number of revisions. After that period, additional changes are handled as separate maintenance packages. We ensure you are completely satisfied before final delivery.',
  },
  {
    id: 5,
    question: 'Do you build custom features not listed in plans?',
    answer: 'Absolutely! We specialize in custom development. Any additional feature requested beyond the standard plan will be quoted separately and implemented to your specifications.',
  },
  {
    id: 6,
    question: 'What technologies do you use?',
    answer: 'We use React, Next.js, Node.js, MongoDB, Firebase for web, and React Native / Java for Android development. We always choose the best technology stack for your specific project needs.',
  },
];

// Stats data
export const stats = [
  { id: 1, value: 50, suffix: '+', label: 'Projects Delivered' },
  { id: 2, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { id: 3, value: 30, suffix: '+', label: 'Happy Clients' },
  { id: 4, value: 2, suffix: '+', label: 'Years Experience' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'plans', label: 'Plans' },
  { id: 'projects', label: 'Our Projects' },
  { id: 'terms', label: 'Terms & Conditions' },
];

// Projects data
export const projectsData = [
  {
    id: 1,
    title: 'Embroidery By Sana',
    description: 'A premium custom embroidery portfolio and booking platform with an elegant modern design.',
    image: '/embroidery.png',
    image2: '/embroidery_2.png',
    url: 'https://www.embroiderybysana.live/',
    categories: ['E-Commerce', 'Business'],
    review: {
      name: 'Shabnam Nisha',
      role: 'Founder',
      text: 'UMINNO perfectly captured the essence of my brand. The website is stunning, fast, and has significantly increased my online bookings. The attention to detail is remarkable!',
      rating: 5,
    }
  },
  {
    id: 2,
    title: 'FootFlex',
    description: 'A dynamic e-commerce store for footwear, featuring seamless checkout and product filtering.',
    image: '/footflex.png',
    image2: '/footflex_2.png',
    url: '#',
    categories: ['E-Commerce', 'Business'],
    review: {
      name: 'Priyanshu Kumar',
      role: 'CEO, FootFlex',
      text: 'The e-commerce platform built by UMINNO is incredible. Our conversion rates went up by 40% in just two months. The user interface is so smooth and modern.',
      rating: 5,
    }
  },
  {
    id: 3,
    title: 'FitClub',
    description: 'A comprehensive fitness platform for tracking workouts, diets, and gym membership management.',
    image: '/fitclub.png',
    image2: '/fitclub_2.png',
    url: 'https://fitclubwithpriyanshu.pages.dev',
    categories: ['Web App', 'Fitness'],
    review: {
      name: 'Vishal Rajput',
      role: 'Gym Owner',
      text: 'FitClub is exactly what we needed. The dashboard makes managing members a breeze, and our clients love the interactive features. Outstanding service!',
      rating: 5,
    }
  },
  {
    id: 4,
    title: 'SHOPPER',
    description: 'A modern, high-performance shopping application with advanced search and user profiles.',
    image: '/shopper.png',
    image2: '/shopper_2.png',
    url: 'https://ecommerce-42v.pages.dev',
    categories: ['E-Commerce'],
    review: {
      name: 'Harsita Sharma',
      role: 'Retail Manager',
      text: 'We are thrilled with the SHOPPER platform. It handles high traffic effortlessly, and the design is top-notch. UMINNO truly delivered beyond expectations.',
      rating: 5,
    }
  },
  {
    id: 5,
    title: 'Future Project',
    description: 'A revolutionary upcoming project focusing on real-time data analytics and AI integration.',
    image: '/project-placeholder.png',
    url: '#',
    categories: ['Upcoming', 'AI'],
    review: {
      name: 'Priya Desai',
      role: 'Product Lead',
      text: 'Working with UMINNO has been a game-changer. Their technical expertise and design sensibilities are unmatched in the industry.',
      rating: 5,
    }
  },
  {
    id: 6,
    title: 'Future Project',
    description: 'An innovative upcoming application aimed at transforming the digital landscape.',
    image: '/project-placeholder.png',
    url: '#',
    categories: ['Upcoming'],
    review: {
      name: 'Vikram Patel',
      role: 'Tech Entrepreneur',
      text: 'The level of professionalism and quality of work from UMINNO is exceptional. I highly recommend them for any complex web development needs.',
      rating: 5,
    }
  },
  {
    id: 7,
    title: 'Future Project',
    description: 'A state-of-the-art upcoming platform offering seamless integration and user experience.',
    image: '/project-placeholder.png',
    url: '#',
    categories: ['Upcoming'],
    review: {
      name: 'Anjali Verma',
      role: 'Marketing Director',
      text: 'UMINNO brought our vision to life with precision and creativity. The final product exceeded all our expectations.',
      rating: 5,
    }
  },
  {
    id: 8,
    title: 'Future Project',
    description: 'An upcoming cutting-edge solution designed for scalability and performance.',
    image: '/project-placeholder.png',
    url: '#',
    categories: ['Upcoming'],
    review: {
      name: 'Rohan Gupta',
      role: 'Operations Head',
      text: 'Excellent communication and flawless execution. UMINNO is a reliable partner for any serious tech venture.',
      rating: 5,
    }
  },
  {
    id: 9,
    title: 'Future Project',
    description: 'An upcoming enterprise-grade platform ensuring robust security and high availability.',
    image: '/project-placeholder.png',
    url: '#',
    categories: ['Upcoming', 'Enterprise'],
    review: {
      name: 'Sneha Kapoor',
      role: 'Chief Strategy Officer',
      text: 'The team at UMINNO is highly skilled and dedicated. They delivered a highly secure and scalable platform right on schedule.',
      rating: 5,
    }
  },
  {
    id: 10,
    title: 'Future Project',
    description: 'An upcoming next-generation application redefining user engagement and interactivity.',
    image: '/project-placeholder.png',
    url: '#',
    categories: ['Upcoming'],
    review: {
      name: 'Karan Malhotra',
      role: 'Creative Director',
      text: 'Absolutely fantastic work! UMINNO combines technical brilliance with an incredible eye for design.',
      rating: 5,
    }
  }
];
