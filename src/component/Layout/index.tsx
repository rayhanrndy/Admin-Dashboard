import Sidebar from "@/component/sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
