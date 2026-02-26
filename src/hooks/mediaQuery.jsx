import { useMediaQuery } from "react-responsive";

/**
 * Responsive media for mobile (small devices)
 * @return {boolean} flag to detect whether client is on a small device
 */
export function useMobile(){
    return useMediaQuery({maxWidth: 767})
}

/**
 * Responsive media for tablet (medium devices)
 * @return {boolean} flag to detect whether client is on a medium device
 */
export function useTablet(){
    return useMediaQuery({maxWidth: 991})
}

/**
 * Responsive media for laptop (large devices)
 * @return {boolean} flag to detect whether client is on a large device
 */
export function useLaptop(){
    return useMediaQuery({maxWidth: 1199})
}

/**
 * Responsive media for large laptop (extra large devices)
 * @return {boolean} flag to detect whether client is on an extra large device
 */
export function useLargeLaptop(){
    return useMediaQuery({minWidth: 1200}) 
}