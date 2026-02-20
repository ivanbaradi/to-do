import { useMediaQuery } from "react-responsive";

/**
 * Responsive media for mobile
 * @return {boolean} flag to detect whether client is on mobile
 */
export function useMobile(){
    return useMediaQuery({maxWidth: 767})
}

/**
 * Responsive media for tablet
 * @return {boolean} flag to detect whether client is on tablet
 */
export function useTablet(){
    return useMediaQuery({maxWidth: 991})
}

/**
 * Responsive media for laptop
 * @return {boolean} flag to detect whether client is on laptop
 */
export function useLaptop(){
    return useMediaQuery({maxWidth: 1199})
}