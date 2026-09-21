export interface Teacher {
  id: string;
  name: string;
  title: string;
  badge: string;
  category: 'male' | 'female';
  bio: string;
  specialties: string[];
  image: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  durationMinutes: number;
  subtitle: string;
  targetAge: string;
  description: string;
  isPopular?: boolean;
  featuredTag?: string;
  prices: {
    oneChild: number;
    twoSiblings: number;
    threeSiblings: number;
  };
  features: string[];
}

export interface ClassSample {
  id: string;
  title: string;
  categoryBadge: string;
  categoryType: 'boys' | 'girls' | 'interactive';
  teacherName: string;
  studentAge: string;
  description: string;
  highlightTag: string;
  image: string;
  videoUrl: string;
  videoPreviewUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  relation: string;
  childName: string;
  childAge: string;
  childAvatar: string;
  gender: 'boy' | 'girl';
  country: string;
  countryFlag: string;
  city: string;
  milestone: string;
  rating: number;
  text: string;
  verified: boolean;
  date: string;
}

export interface BookingFormData {
  childName: string;
  age: string;
  gender: 'boy' | 'girl' | '';
  teacherPreference: 'male' | 'female' | 'any';
  level: string;
  country: string;
  phone: string;
  preferredTime: string;
  notes?: string;
}
