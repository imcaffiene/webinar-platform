import DashboardNavBar from "@/components/modules/dashboard/DashboardNavBar";
import DashBoardSidebar from "@/components/modules/dashboard/DashBoardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface Props {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashBoardSidebar />
      <main className="flex flex-col h-screen w-screen bg-mutated">
        <DashboardNavBar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashBoardLayout;