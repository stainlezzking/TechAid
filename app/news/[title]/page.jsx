"use client"
import { useParams } from 'next/navigation'
import Navbar from "@/components/Navbar";
import Search from "@/components/search";
import Link from "next/link";
import Image from "@/public/image (1).png"
import { useRouter } from "next/navigation";

const News = function() {
  const {} = useParams()
    return(
       <h1>hello world</h1>
    );
}

export default News;