import Image from 'next/image';

interface DevfolioButtonProps {
  hackathonSlug: string;
  buttonTheme?: "light" | "dark";
  className?: string;
}

export const DevfolioButton = ({
  hackathonSlug,
  buttonTheme = "light",
  className = "",
}: DevfolioButtonProps) => {
  return (
    <a
      href={`https://devfolio.co/external-apply/${hackathonSlug}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-6 py-2 text-white font-semibold rounded-lg hover:opacity-80 transition ${className}`}
    >
      <Image 
        src="/devfolio.png" 
        alt="Devfolio" 
        width={240} 
        height={240} 
        layout="intrinsic" 
      />
    </a>
  );
};
