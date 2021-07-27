import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocRow({ id, fileName, date }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700"
    >
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate cursor-pointer">
        {fileName}
      </p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
    </div>
  );
}
export default DocRow;
