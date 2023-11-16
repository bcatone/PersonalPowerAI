import { useEffect, useState } from "react";

const useInfoTooltipPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const closePopupByEscape = (evt) => {
            if (evt.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', closePopupByEscape);
            return () => {
                document.removeEventListener('keydown', closePopupByEscape);
            };
        }
    }, [isOpen]);

    const closePopupByOverlay = (event) => {
        if (event.target === event.currentTarget) {
            setIsOpen(false);
        }
    };

    return {
        isOpen,
        setIsOpen,
        isSuccess,
        setIsSuccess,
        closePopupByOverlay
    };
};

export default useInfoTooltipPopup;