import { useMediaQuery } from "react-responsive";

/**
 * Responsive media for mobile (small devices)
 * @return {boolean} flag to detect whether client is on mobile
 */
export function useMobile(){
    return useMediaQuery({maxWidth: 767})
}

/**
 * Responsive media for tablet (medium devices)
 * @return {boolean} flag to detect whether client is on tablet
 */
export function useTablet(){
    return useMediaQuery({maxWidth: 991})
}

/**
 * Responsive media for laptop (large devices)
 * @return {boolean} flag to detect whether client is on laptop
 */
export function useLaptop(){
    return useMediaQuery({maxWidth: 1199})
}

/**
 * Responsive media for large laptop (extra large devices)
 * @return {boolean} flag to detect whether client is on laptop
 */
export function useLargeLaptop(){
    return useMediaQuery({minWidth: 1200}) 
}