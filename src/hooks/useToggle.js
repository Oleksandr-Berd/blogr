
import { useState } from "react"

export const useToggle = () => {
    const [isShare, setIsShare] = useState(false)

    const openShare = () => setIsShare(true)
    const closeShare = () => setIsShare(false)
    const toggleShare = () => setIsShare(!isShare)

    return {openShare, closeShare, isShare, toggleShare}
}