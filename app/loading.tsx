import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2 size={32} />
    </div>
  );
}
