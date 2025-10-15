import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { BellDotIcon, Settings } from "lucide-react";
import Link from "next/link";

export const TopBar = ({role}: {role: string}) => {
  return (
    <div className=" h-full flex items-center bg-white p-8 shadow">
      <div className="w-full flex justify-between">
          <div>
            <p>{role.toUpperCase()} DASHBOARD</p>
            <p className="text-muted-foreground">Wellcome back, {role.toUpperCase()}</p>
          </div>

          <div className="flex gap-8 items-center justify-end">
            <BellDotIcon />
            <Settings />
            <Avatar className="w-10 h-10">
                <AvatarImage src={"/avt/admin.png"}></AvatarImage>
            </Avatar>
          </div>
      </div>
    </div>
  );
}
