import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const PaypalButton = () => {
  return (
    <Link
      href="https://www.paypal.me/ACompin/650"
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonVariants({
        size: "sm",
        variant: "outline",
      })} mt-4`}
    >
      Payer maintenant
    </Link>
  );
};
