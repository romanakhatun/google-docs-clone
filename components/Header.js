import { useSession } from "next-auth/client";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  const [session] = useSession();

  return (
    <div className="sticky m-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        size="sm"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h2 className="ml-2 text-gray-700 text-2xl">Docs</h2>

      <div className="mx-5 flex flex-grow items-center p-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md md:mx-20">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow text-base bg-transparent px-5 outline-none"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        size="sm"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0 md:ml-20"
      >
        <Icon name="apps" size="3xl" />
      </Button>

      <img
        loading="lazy"
        className="cursor-pointer rounded-full ml-2 h-12 w-12"
        src={session?.user?.image}
        alt={session?.user?.name}
      />
    </div>
  );
}
export default Header;
