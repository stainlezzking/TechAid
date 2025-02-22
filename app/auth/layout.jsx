import Logo from "@/public/logo.png";
import AuthLoginLogo from "@/svgs/auth-login-logo";
import Image from "next/image";
export default function AuthLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-[543px] max-w-[38%] bg-primaryBlue min-h-screen flex items-center justify-center">
        <div className="space-y-9">
          <Image src={Logo.src} alt="The Tech aid Logo" className="mx-auto" width={225} height={225} />
          <div className="text-center flex justify-center">
            <AuthLoginLogo />
          </div>
        </div>
      </div>
      <div className="grow min-h-screen flex items-center">
        <div className="max-w-[438px] mx-auto w-full">{children}</div>
      </div>
    </div>
  );
}
