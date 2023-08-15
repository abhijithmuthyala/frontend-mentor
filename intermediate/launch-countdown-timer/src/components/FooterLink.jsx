const iconNames = ["facebook", "instagram", "pinterest"];
const icons = {};
iconNames.forEach((name) => {
  icons[name] = `bg-[url(/images/icon-${name}.svg)]`;
});

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
