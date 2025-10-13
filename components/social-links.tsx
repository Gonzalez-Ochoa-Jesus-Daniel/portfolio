import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/tuusuario",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tuusuario",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/tuusuario",
    icon: Twitter,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/tuusuario",
    icon: Instagram,
  },
];

export function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialLinks.map((link) => (
        <li key={link.name} className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-primary focus-visible:text-primary transition-colors"
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${link.name} (opens in a new tab)`}
            title={link.name}
          >
            <span className="sr-only">{link.name}</span>
            <link.icon className="h-6 w-6 fill-current" />
          </a>
        </li>
      ))}
    </ul>
  );
}
