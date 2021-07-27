import React from "react";
import { db } from "../../firebase";
import { useRouter } from "next/dist/client/router";
import { useSession, getSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import Icon from "@material-tailwind/react/Icon";
import Login from "../../components/Login";
import TextEditor from "../../components/TextEditor";

function Doc() {
  const [session] = useSession();
  if (!session) return <Login />;

  const router = useRouter();
  const { id } = router.query;

  const [snapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  return (
    <>
      <header className="flex justify-between items-center p-3 pb-1">
        <span className="cursor-pointer" onClick={() => router.push("/")}>
          <Icon name="description" size="5xl" color="blue" />
        </span>

        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.fileName}</h2>
        </div>
      </header>

      <TextEditor />
    </>
  );
}
export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
