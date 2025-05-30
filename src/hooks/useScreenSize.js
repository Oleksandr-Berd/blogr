import { useMediaQuery } from "hooks-ts"

export const useScreenSize = () => {
const isDesktop = useMediaQuery("(min-width:1280px)")
const isTablet = useMediaQuery("(min-width: 768px)")
const isMobile = useMediaQuery("(max-width: 767px)")
const isMixMobileTable = useMediaQuery("(max-width: 1279px)")

return {isDesktop, isTablet, isMobile, isMixMobileTable}
}