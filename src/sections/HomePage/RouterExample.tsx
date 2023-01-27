import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const RouterExample = () => {
  const router = useRouter();
  const [isLoaded, setIsLoded] = useState(false);

  const routerObjects = Object.keys(router);
  // const { pathname, query, asPath, basePath, locale, defaultLocale, isReady, isPreview } = router;

  // Use effect to delay sending to client. Mismatch ssr/csr
  useEffect(() => {
    if (router.isReady) {
      setIsLoded(true);
    }
  }, []);

  if (!isLoaded) {
    return null;
  }
  return (
    <div>
      <h3>useRouter object</h3>
      <ul>
        {routerObjects.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default RouterExample;
