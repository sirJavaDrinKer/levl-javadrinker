import Image from "next/image";

export default function Footer() {
    return (
        <footer className="z-50 fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full py-2 shadow-md space-x-2">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://discord.gg/invite/tKRXVxYDgC"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/discord.svg"
                    alt="Discord icon"
                    width={20}
                    height={20}
                />
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.youtube.com/@lowelovalorantleague"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/youtube.svg"
                    alt="YouTube icon"
                    width={24}
                    height={24}
                />
            </a>
        </footer>
    );
}
