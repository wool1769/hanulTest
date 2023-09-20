'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/list/1');
  }, []);

  // 실제로는 홈 페이지에 어떤 내용도 렌더링하지 않아도 됩니다.

  return null;
}