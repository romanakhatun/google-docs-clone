import Head from "next/head";
import Header from "../components/Header";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function Home() {
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

          <div>
            {/* <Icon name="plus" size="6xl" color="blue" /> */}

            <Button
              color="gray"
              buttonType="outline"
              size="sm"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="h-20 w-20 border-0 md:ml-20"
            >
              <Icon name="plus" size="3xl" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
