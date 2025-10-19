import Image from "next/image";

export default function Footer() {
    return (
        <footer className="z-50 fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full py-2 shadow-md">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://discord.gg/TuxUpbwe"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                Join our community on discord →
            </a>
        </footer>
    );
}
