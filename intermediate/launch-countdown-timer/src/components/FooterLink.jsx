const icons = {
  facebook: "bg-[url(/images/icon-facebook.svg)]",
  instagram: "bg-[url(/images/icon-instagram.svg)]",
  pinterest: "bg-[url(/images/icon-pinterest.svg)]",
};

export default function FooterLink({ iconName, url, siteName }) {
  return (
    <a
      href={url}
      target="_blank"
      className={`block w-6 aspect-square ${icons[iconName]} bg-cover bg-no-repeat hover:invert-[55%] hover:sepia-[25%] hover:saturate-[5084%] hover:hue-rotate-[311deg] hover:brightness-[103%] hover:contrast-[97%]`}
      aria-label={siteName}
    ></a>
  );
}

// Hover styles calculated from https://isotropic.co/tool/hex-color-to-css-filter/
