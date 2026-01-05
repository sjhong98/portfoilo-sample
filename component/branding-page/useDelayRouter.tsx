'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { SetIsLoadingContext } from '@/context/contextStore';

export default function useDelayRouter() {
  const router = useRouter();
  const setIsLoading = useContext(SetIsLoadingContext);

  const push = (link: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(link);
      setIsLoading(false);
    }, 700);
  };

  const replace = (link: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.replace(link);
      setIsLoading(false);
    }, 700);
  };

  const refresh = () => {
    router.refresh();
  };

  return {
    push,
    replace,
    refresh,
  };
}
