import React from 'react';
import { LottieLoading } from 'components/lottie';

export function Loading() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <LottieLoading></LottieLoading>
        </div>
    );
}