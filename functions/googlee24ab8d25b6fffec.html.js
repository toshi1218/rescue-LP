export const onRequestGet = () => {
  return new Response(
    'google-site-verification: googlee24ab8d25b6fffec.html',
    {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
      },
    },
  );
};
