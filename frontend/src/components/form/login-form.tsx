import { Button } from "../ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Cat } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "../../styles/form.css";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm overflow-hidden p -0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {/* Title */}
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="flex gap-2 text-center">
                  <CardTitle className="text-xl">Smart Bus System </CardTitle>
                  <Cat />
                </h1>
                <CardDescription className="text-muted-foreground text-xs italic text-balance">
                  Login to your account
                </CardDescription>
              </div>

              {/* CONTENT */}
              <div className="grid gap-3 w-full max-w-sm item-center ">
                <Label htmlFor="email" className="text-xs">
                  Email
                </Label>
                <Input
                  type="email"
                  placeholder="mail@gmail.com"
                  id="email"
                  required
                />
              </div>

              <div className="grid gap-3 w-full max-w-sm item-center">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-xs underline-offset-2 hover:underline italic"
                  >
                    Forgot your password ?
                  </a>
                </div>
                <Input type="password" id="password" required />
              </div>

              <Button type="submit">Login</Button>

              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Button className="btn-login">
                  <FaFacebook />
                </Button>
                <Button className="btn-login">
                  <FaGoogle />
                </Button>
                <Button className="btn-login">
                  <FaGithub />
                </Button>
              </div>

              <div className="text-center text-sm italic">
                    Don&apos;t have an account? 
                    <a href="#" className="underline underline-offset-4">Sign up</a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
                <img src="/img/SmartBusSystem.jpeg" alt="SmartBusSystem" className="absolute w-full h-full object-fit" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
