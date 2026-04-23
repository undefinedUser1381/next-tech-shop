import HeaderTop from "./HeaderTop/HeaderTop";
import NavigationLinks from "./NavigationLinks/NavigationLinks";

export default function Header() {
  return (
    <div className="fixed z-20 top-0 left-0 right-0 bg-white text-center">
      <div className="flex p-4 md:px-1 lg:px-5 w-full lg:w-[80%] 2xl:w-[75%] mx-auto items-center gap-5 justify-center h-auto md:h-36 flex-col">
        <HeaderTop />
        <NavigationLinks />
      </div>
    </div>
  );
}
