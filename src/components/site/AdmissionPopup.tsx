import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import admissionImage from "@/assets/AdmissionOpen.jpeg";

export function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('admission-popup-shown');

    if (!hasShownPopup) {
      // Show popup after a small delay when the website loads
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('admission-popup-shown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 bg-white rounded-lg shadow-2xl">
        {/* Close X button - positioned at top right, more visible */}
        <DialogClose
          className="absolute -right-3 -top-3 z-20 rounded-full bg-red-500 hover:bg-red-600 p-3 text-white shadow-lg transition-all duration-200 hover:scale-110 border-2 border-white"
          onClick={handleClose}
          aria-label="Close admission popup"
        >
          <X className="h-5 w-5" />
        </DialogClose>

        {/* Admission Image Container */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={admissionImage}
            alt="Admission Open - Ashrith Group of Institutions"
            className="w-full h-auto object-cover rounded-lg"
            loading="eager"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}