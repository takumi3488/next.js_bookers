import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          fontWeight="fontWeightBold"
          marginTop="30px"
        >
          Signed in as {session.user.name} <br />
          <Button onClick={() => signOut()} variant="outlined" color="error">
            Sign out
          </Button>
        </Typography>

        <Link href="/books">
        <Typography
          component="h4"
          variant="h4"
          align="center"
          marginTop="30px"
          fontWeight="fontWeightBold"
        >
          <a>Click Here</a>
        </Typography>
      </Link>
      </>
    );
  }
  return (
    <>
      <Typography
        component="h4"
        variant="h4"
        align="center"
        fontWeight="fontWeightBold"
        marginTop="30px"
      >
        Not signed in <br />
        <Button onClick={() => signIn()} variant="outlined" color="primary">
          Sign in
        </Button>
      </Typography>
    </>
  );
}
