import Head from "next/head";
import Header from "../components/Header";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { signIn, signOut, useSession } from "next-auth/client";
import Login from "../components/Login";

export default function Home() {
  const [session, loading] = useSession();

  if (!session) return <Login />;

  return (
    <>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              size="sm"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="h-20 w-20 border-0 md:ml-20"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>

          <div className="relative w-40 h-52 border-2 cursor-pointer hover:border-blue-700">
            <img src="/images/plus.png" alt="" />
          </div>
          <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto py-8">
          <div className="flex items-center justify-between pb-5 text-sm text-gray-700">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </>
  );
}
