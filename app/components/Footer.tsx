import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const socialMedias = [
        {
            name: "github",
            url: "https://github.com/gui-sc",
        },
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/guilherme-coelho-72136520a/",
        },
        {
            name: "email",
            url: "mailto:gui.silveiracoelho@gmail.com"
        }
    ]

    return (
        <footer className="footer">
            <div className="w-full h-20 flex justify-center gap-5 items-center dark:bg-white dark:bg-opacity-15">
                {socialMedias.map((media, index) => (
                    <Link key={index} href={media.url} target="_blank" rel="noreferrer">
                        <Image
                            alt={`${media.name} logo`}
                            width={30}
                            height={30}
                            src={`/${media.name}.png`}
                        />
                    </Link>
                ))}
            </div>
        </footer>
    );
}