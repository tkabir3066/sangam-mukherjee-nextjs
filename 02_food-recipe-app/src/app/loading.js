import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="w-full bg-black min-h-screen">
      <Skeleton />
    </div>
  );
}

export default Loading;
