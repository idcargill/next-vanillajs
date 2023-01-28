import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const RouterExample = ({ className }: any) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const routerObjects = Object.keys(router);
  // const { pathname, query, asPath, basePath, locale, defaultLocale, isReady, isPreview } = router;

  // Use effect to delay sending to client. Mismatch ssr/csr
  useEffect(() => {
    if (router.isReady) {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return null;
  }
  return (
    <div className={className}>
      <h3>useRouter object</h3>
      <ul>
        {routerObjects.map((item, idx) => (
          <li key={idx} style={{ listStyle: 'none' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouterExample;
