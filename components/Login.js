import Button from "@material-tailwind/react/Button";
import { signIn, signOut, useSession } from "next-auth/client";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img width="300" height="550" src="/images/docs.png" alt="docs" />
      <Button
        className="w-44 mt-10"
        ripple="light"
        color="blue"
        buttonType="filled"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}
export default Login;
