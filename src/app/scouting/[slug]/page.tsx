"use client"
// redirect to /scouting as soon as the page loads
// <Redirect to="/scouting" />

import { useEffect } from "react";
import Router, { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/scouting");
    }, []);

    return null;
};

export default page;