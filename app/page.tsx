import Image from "next/image";
import Body from "./Body/page";
import Photos from "./Photos/page";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div>
      <Body/>
    </div>
  );
}
