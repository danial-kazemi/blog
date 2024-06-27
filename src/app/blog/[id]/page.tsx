'use client'
import { usePathname } from "next/navigation";
export default function PostPage({
    params }:
    {params: {
        id: string
        }
    }
) {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <>
        <h2 className="text-lg">Post Page</h2>
        <p>post ID: {params.id}</p>
    </>
  )
}

