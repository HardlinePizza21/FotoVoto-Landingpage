import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-landing-page border-t border-[#2D3748] py-3 px-0 sm:py-4 sm:px-6">
      <div className=" mx-2 md:mx-10 flex flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
        <p className="text-gray-letters text-xs md:text-sm font-medium">
          © 2026 FotoVoto
        </p>
        
        <div className="flex flex-row gap-4 md:gap-6">
          <Link
            href="/privacy-policy"
            className="text-gray-letters text-xs md:text-sm hover:text-orange-letters transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-gray-letters text-xs md:text-sm hover:text-orange-letters transition-colors"
          >
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}