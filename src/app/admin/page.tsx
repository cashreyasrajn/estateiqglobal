import { forbidden } from "next/navigation";

export default function AdminPage() {
  // Demo route to verify the custom 403 page renders.
  forbidden();
}
