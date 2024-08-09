import dynamic from "next/dynamic";

const Map = dynamic(
  () => {
    return import("./Map");
  },
  { ssr: false }
);

export default function MapPage() {
  return <Map />;
}
