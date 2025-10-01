import Link from "next/link";
export default function HomePage() {
  return (   
    <main>
      <div className="flex flex-col justify-center items-center h-screen">
          <h1>Wellcome to HomePage</h1>
        {/* ----Login---- */}
        <Link href= "/login" className="text-blue-500">Login</Link>
        {/* ----Dashboard---- */}

      </div>
        
    </main>
  );
}
