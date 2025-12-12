import SystemCare from "@/components/MatrixSystemCare/SystemCare";
import OnsiteSupport from "@/components/MatrixSystemCare/OnsiteSupport";
import AmcService from "@/components/MatrixSystemCare/AmcService";

export const metadata = {
  title: "Matrix System Care – Repairs & Support",
  description: "Mobile, laptop repair, onsite support, and AMC services.",
};

export default function SystemCarePage() {
  return (
    <>
      <SystemCare />
      <OnsiteSupport />
      <AmcService />
    </>
  );
}
