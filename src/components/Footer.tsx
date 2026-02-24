const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-earth text-center">
      <p className="font-display text-xs tracking-[0.15em] uppercase text-stone-light mb-2">
        Martin Matthews · Stonecutter · Storyteller
      </p>
      <p className="font-body text-sm text-stone">
        © {new Date().getFullYear()} Stories in Stone · Kilkenny, Ireland
      </p>
      <p className="font-body text-xs text-stone mt-2">
        Part of Ireland's Ancient East
      </p>
    </footer>
  );
};

export default Footer;
