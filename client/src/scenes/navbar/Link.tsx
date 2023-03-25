import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: ( value: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
// lowerCasePage is equal to the name of the page prop passed in but its lower cased with all spaces removed so the id is #pagename for the anchor link to work
  const lowerCasePage = page.toLowerCase().replace(/ /g, "")

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;