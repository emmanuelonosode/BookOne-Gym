
export interface ClassInfo {
    name: string;
    category: 'Strength' | 'Cardio' | 'Yoga' | 'HIIT';
    instructor: string;
    availability: string;
    videoPreview: string;
}

export interface Testimonial {
    name: string;
    story: string;
    beforeImg: string;
    afterImg: string;
}

export interface MembershipPlan {
    name: string;
    price: string;
    features: string[];
    isPopular: boolean;
}

export interface Trainer {
    name: string;
    specialization: string;
    imageUrl: string;
}
