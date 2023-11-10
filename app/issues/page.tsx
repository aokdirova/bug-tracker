import { FC } from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface IssuesPageProps {}

const IssuesPage: FC<IssuesPageProps> = ({}) => {
  return (
    <Button>
      <Link href='/issues/new'>New Issue</Link>
    </Button>
  );
};

export default IssuesPage;
