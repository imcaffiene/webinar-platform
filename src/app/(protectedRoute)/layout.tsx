import { onAuthenticate } from "@/actions/auth";
import Header from "@/components/ReusableComponents/LayoutComponents/Header";
import Sidebar from "@/components/ReusableComponents/LayoutComponents/Sidebar";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const userExist = await onAuthenticate();

  if (!userExist.user) {
    redirect("/sign-in");
  }
  return (
    <div className="flex w-full min-h-screen">

      <Sidebar />
      <div className="flex flex-col w-full h-screen overflow-auto px-4 scrollbar-hide container mx-auto">
        <Header user={userExist.user} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
