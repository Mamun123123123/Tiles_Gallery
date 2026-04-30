"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md border mt-5 p-6 flex flex-col items-center gap-4 rounded-2xl shadow-lg">

        <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
          <Avatar.Image
            alt="user"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-bold">
            {user?.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 break-all">
            {user?.email}
          </p>
        </div>

        <UpdateUserModal />

      </Card>
    </div>
  );
};

export default ProfilePage;