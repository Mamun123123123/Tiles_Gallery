"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setOpen(false);
  };

  return (
    <div className="border-b px-2">
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between py-3">

        <div className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
          />
          <h3 className="font-black text-lg">Tiles Gallery</h3>
        </div>

        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link href={"/"}>Home</Link>
          <Link href={"/all-tiles"}>All Tiles</Link>
          {user && <Link href={"/profile"}>Profile</Link>}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          {!user && (
            <Link href={"/signin"} className="text-sm bg-slate-500 text-white font-bold p-2 border rounded-2xl ">
              Login
            </Link>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                size="sm"
                className="bg-red-500 text-white"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </nav>

      {open && (
        <div className="sm:hidden flex flex-col gap-3 px-4 pb-4 text-sm">
          <Link onClick={() => setOpen(false)} href={"/"}>Home</Link>
          <Link onClick={() => setOpen(false)} href={"/all-tiles"}>All Tiles</Link>
          {user && (
            <Link onClick={() => setOpen(false)} href={"/profile"}>
              Profile
            </Link>
          )}

          {!user && (
            <Link onClick={() => setOpen(false)} href={"/signin"}>
              Login
            </Link>
          )}

          {user && (
            <Button
              onClick={handleSignOut}
              size="sm"
              className="bg-red-500 text-white w-fit"
            >
              Logout
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;