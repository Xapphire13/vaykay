"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Default() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    router.replace(`./${params.id}/numbers`);
  }, [params.id, router]);

  return null;
}
