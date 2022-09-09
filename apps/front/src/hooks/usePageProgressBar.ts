import { startLoader, stopLoader } from 'lib/nprogess';
import Router from 'next/router';
import { useEffect } from 'react';

export function usePageProgressBar() {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const start = () => {
      timer = setTimeout(() => startLoader(), 50);
    }

    const end = () => {
      clearTimeout(timer);
      stopLoader();
    }

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
      clearTimeout(timer);
    }
  }, [])
}