import DashBoardSidebar from "@/components/pages/dashboard/DashBoardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface Props {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashBoardSidebar />
      <main className="flex flex-col h-screen w-screen bg-mutated">
        {children}
      </main>
    </SidebarProvider>
  );
};
export default DashBoardLayout;