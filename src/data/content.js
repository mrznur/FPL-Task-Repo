export const navigationItems = [
  { label: 'Women-only', href: '#about' },
  { label: 'Yoga', href: '#programmes' },
  { label: 'Personal training', href: '#programmes', hasDropdown: true },
  { label: 'Success stories', href: '#success-stories' },
  { label: 'About', href: '#about' },
]

export const aboutContent = {
  title: 'About',
  accentTitle: 'Tuffcore',
  description: `At TUFFCORE FITNESS, we're redefining what it means to be strong. We are a women-only fitness community based in Oxford, built to support real women at every stage of their journey — whether you're just starting out or leveling up. It's not about being perfect. It's about showing up, working hard, and becoming the strongest version of YOU.`,
  ctaLabel: 'Book a free call',
  cards: [
    { title: 'Small group training', image: 'aboutTraining', alt: 'Woman strength training in the TUFFCORE gym' },
    { title: 'Women-only environment', image: 'aboutEnvironment', alt: 'Women training in the TUFFCORE gym' },
    { title: 'Expert coaches', image: 'aboutCoaches', alt: 'TUFFCORE coach helping a client' },
    { title: 'Community events', image: 'aboutCommunity', alt: 'Women celebrating together at a community fitness event' },
  ],
}

export const programmesContent = {
  heading: 'Programmes',
  subtitle: 'Explore our range of women-only fitness programmes, Transform your Fitness journey!',
  cards: [
    { title: 'Personal Training', subtitle: 'Women Only small group personal training', image: 'progPersonal' },
    { title: 'HIIT', subtitle: 'High-Intensity Interval Training Workout', image: 'progHiit' },
    { title: 'Yoga', subtitle: 'Women Only small group yoga sessions', image: 'progYoga' },
    { title: 'Community Events', subtitle: 'Join our exclusive women-only fitness events', image: 'progCommunity' },
  ],
}

export const reviewsContent = {
  eyebrow: 'Client Reviews',
  heading: 'What members say',
  reviews: [
    {
      id: 1,
      text: `I started my strength & conditioning journey with Igor at TUFFCORE in 2019, and coming back after a long break has been nothing short of incredible! In just two weeks, I already feel stronger, happier, and so excited to be on this journey again. Igor is an exceptional coach who truly cares about his clients.`,
      name: 'Dona Jones',
      location: 'Oxford, UK',
    },
    {
      id: 2,
      text: `I had been considering joining a gym but was worried about being left on my own and possibly injuring myself due to inexperience. After some research, I found Tuffcore Fitness, a women-only group. Igor was incredibly welcoming and gave me the confidence I needed to get started on my fitness journey.`,
      name: 'Sangeetha Prasath',
      location: 'Oxford, UK',
    },
    {
      id: 3,
      text: `Awesome training environment with encouraging and supportive coaches to help you along your fitness journey. They meet you where you are at every level.`,
      name: 'Trevelyn Smith',
      location: 'Oxford, UK',
    },
    {
      id: 4,
      text: `The community here is unlike anything I've experienced. Everyone is so supportive and the coaches really push you to be your best self. Absolutely love it and would recommend to anyone looking for a women-only fitness space in Oxford.`,
      name: 'Sarah Mitchell',
      location: 'Oxford, UK',
    },
    {
      id: 5,
      text: `Best decision I ever made joining TUFFCORE. The small group sessions mean you get personal attention while still having that team energy. Highly recommend to all women looking to get fit and feel strong.`,
      name: 'Emma Clarke',
      location: 'Oxford, UK',
    },
  ],
}

export const successStoriesContent = {
  heading: 'We are more',
  headingAccent: 'than just a gym',
  description: `We take responsibility of your Transformation as our client's SUCCESS is our SUCCESS. Here's some of the achievements we've celebrated with our community. We're focused on helping you to make those big positive changes that will transform your life in so many ways.`,
  stories: [
    { id: 1, thumb: 'ig1' },
    { id: 2, thumb: 'ig2' },
    { id: 3, thumb: 'ig3' },
    { id: 4, thumb: 'ig4' },
    { id: 5, thumb: 'ig5' },
    { id: 6, thumb: 'ig6' },
  ],
}
