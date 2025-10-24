
import { ClassInfo, Testimonial, MembershipPlan, Trainer } from './types';

export const CLASSES_DATA: ClassInfo[] = [
    { name: "Olympic Weightlifting", category: 'Strength', instructor: "Alex Ray", availability: "12/15 spots", videoPreview: "https://picsum.photos/seed/class1/600/400" },
    { name: "Endurance Run Club", category: 'Cardio', instructor: "Mia Wong", availability: "8/20 spots", videoPreview: "https://picsum.photos/seed/class2/600/400" },
    { name: "Vinyasa Flow", category: 'Yoga', instructor: "Leo Chen", availability: "Full", videoPreview: "https://picsum.photos/seed/class3/600/400" },
    { name: "Total Body Inferno", category: 'HIIT', instructor: "Sara Khan", availability: "5/15 spots", videoPreview: "https://picsum.photos/seed/class4/600/400" },
    { name: "Powerbuilding 101", category: 'Strength', instructor: "Alex Ray", availability: "10/15 spots", videoPreview: "https://picsum.photos/seed/class5/600/400" },
    { name: "Cycle & Sync", category: 'Cardio', instructor: "Mia Wong", availability: "3/20 spots", videoPreview: "https://picsum.photos/seed/class6/600/400" },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { name: "John D.", story: "Lost 50lbs and gained a new life. The trainers here are world-class.", beforeImg: "https://picsum.photos/seed/johnbefore/400/600", afterImg: "https://picsum.photos/seed/johnafter/400/600" },
    { name: "Emily R.", story: "I've never felt stronger or more confident. The community is so supportive.", beforeImg: "https://picsum.photos/seed/emilybefore/400/600", afterImg: "https://picsum.photos/seed/emilyafter/400/600" },
    { name: "Michael B.", story: "From couch potato to marathon runner in 6 months. It's possible here.", beforeImg: "https://picsum.photos/seed/mikebefore/400/600", afterImg: "https://picsum.photos/seed/mikeafter/400/600" },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
    { 
        name: "Basic", 
        price: "79", 
        features: ["Off-peak hours access", "1 class per week", "Basic locker room"],
        isPopular: false 
    },
    { 
        name: "Premium", 
        price: "129", 
        features: ["24/7 gym access", "Unlimited classes", "Nutritionist consultation", "Premium locker room", "2 guest passes/month"],
        isPopular: true 
    },
    { 
        name: "Elite", 
        price: "199", 
        features: ["All Premium benefits", "1 personal training session/month", "Priority booking", "Massage chair access", "Towel service"],
        isPopular: false 
    },
];

export const TRAINERS_DATA: Trainer[] = [
    { name: "Alex Ray", specialization: "Strength & Conditioning", imageUrl: "https://picsum.photos/seed/trainer1/500/500" },
    { name: "Mia Wong", specialization: "Cardio & Endurance", imageUrl: "https://picsum.photos/seed/trainer2/500/500" },
    { name: "Leo Chen", specialization: "Yoga & Mobility", imageUrl: "https://picsum.photos/seed/trainer3/500/500" },
    { name: "Sara Khan", specialization: "HIIT & Functional Fitness", imageUrl: "https://picsum.photos/seed/trainer4/500/500" },
];

export const STATS_DATA = [
    { name: 'Jan', attendance: 400 },
    { name: 'Feb', attendance: 300 },
    { name: 'Mar', attendance: 500 },
    { name: 'Apr', attendance: 450 },
    { name: 'May', attendance: 600 },
    { name: 'Jun', attendance: 700 },
];
