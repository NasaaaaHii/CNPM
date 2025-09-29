"use client";

import { Button } from "@/components/ui/button";
import { toast} from "sonner";
import { BellRing } from "lucide-react";

export const Test = () => {
  return (
    <>  
        <Button variant="secondary" size="icon" className="size-8" onClick={() => toast.success('Event has been created')}>
          <BellRing />
        </Button>
    </>
  );
};
