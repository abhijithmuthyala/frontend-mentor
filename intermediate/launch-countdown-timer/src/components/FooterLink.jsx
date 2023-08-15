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
      className={`block w-6 aspect-square ${icons[iconName]} bg-cover bg-no-repeat`}
      aria-label={siteName}
    ></a>
  );
}
