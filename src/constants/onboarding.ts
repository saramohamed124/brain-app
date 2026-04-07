import { ImageSourcePropType } from 'react-native';

export interface OnboardingSlide {
    id: string;
    title: string;
    image: ImageSourcePropType;
    backgroundColor: string;
}

export const ONBOARDING_DATA: OnboardingSlide[] = [
    {
        id: '1',
        title: 'المعلومة عندك.. حولها لإجابة صحيحة',
        image: require('@/assets/images/onboarding/onboarding1.png'),
        backgroundColor: '#ffffff',
    },
    {
        id: '2',
        title: 'فكر بتركيز.. واكتشف الحل خطوة بخطوة',
        image: require('@/assets/images/onboarding/onboarding2.png'),
        backgroundColor: '#ffffff',
    },
];