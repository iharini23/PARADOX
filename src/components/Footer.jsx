import { MessageCircle } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.457 3.48 1.328 5.004L2 22l5.132-1.346c1.47.8 3.12 1.222 4.866 1.226h.004c5.504 0 9.988-4.48 9.988-9.988C22 4.482 17.518 2 12.012 2zm0 17.416h-.002c-1.562-.002-3.096-.42-4.436-1.21l-.318-.19-3.3 1.15.894-3.412-.208-.332c-.868-1.38-1.326-2.978-1.326-4.636 0-4.836 3.936-8.772 8.772-8.772 2.342.002 4.544.914 6.2 2.574 1.656 1.66 2.566 3.864 2.566 6.196.002 4.838-3.934 8.776-8.766 8.776z" />
  </svg>
);

export default function Footer() {
  return (
    <footer>
      {/* "GOT A QUERY?" Section */}
      <div className="bg-[#e5e1da] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl bg-[#f5f3ef] border border-black/5 py-16 px-6 text-center rounded-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-black mb-8">
            GOT A QUERY?
          </h2>
          <div className="flex justify-center">
            <a
              href="https://wa.me/918072042580"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-bold uppercase text-base sm:text-lg border-2 border-black px-6 py-3.5 rounded-none shadow-[4px_4px_0px_#000000] hover:shadow-[0px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200"
            >
              <span className="inline-flex items-center justify-center p-1 border border-black mr-3 bg-black text-white">
                <WhatsAppIcon className="w-4.5 h-4.5" />
              </span>
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      {/* Black Bottom Copyright Bar */}
      <div className="bg-black py-6 text-center border-t border-neutral-900">
        <p className="text-xs sm:text-sm text-neutral-500 font-medium">
          Copyright &copy; {new Date().getFullYear()} | PARADOX
        </p>
      </div>
    </footer>
  );
}