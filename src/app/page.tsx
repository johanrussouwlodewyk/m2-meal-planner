import { Button } from "@/components/ui/button";
import db from "@/lib/db";

export default async function Home() {
  const user = await db.user.findFirst();
  return (
    <>
      <Button>Click me</Button>
    </>
  );
}
// change
