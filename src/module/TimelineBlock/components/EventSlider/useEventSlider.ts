import { useMediaQuery } from '@/shared/hook/useMediaQuery';
import { useState } from 'react';

export function useEventSlider({ swiperRef }: any) {
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const isMobile = useMediaQuery('(max-width: 768px)');

	const goNext = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
		}
	};

	const goPrev = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const handleSlideChange = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			setIsBeginning(swiperRef.current.swiper.isBeginning);
			setIsEnd(swiperRef.current.swiper.isEnd);
		}
	};

	return { isBeginning, isEnd, isMobile, goNext, goPrev, handleSlideChange };
}
