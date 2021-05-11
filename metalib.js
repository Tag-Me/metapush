const host = window.location.hostname;
const route = encodeURIComponent(window.location.pathname);

const supabaseUrl = 'https://kcyuajymdxnbqcoblgvg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTU1Nzg4OSwiZXhwIjoxOTM1MTMzODg5fQ.Ft2TTnR6tTrtlqLJrh56bluS4C4JFtFHuK4d-oWn1c8';

fetch(`${supabaseUrl}/rest/v1/seo_data?select=meta_title&hostname=eq.${host}&route=eq.${route}`, {
  headers: {
      'Accept': 'application/json',
      'apikey': supabaseKey,
      'authorization': `Bearer ${supabaseKey}`
  },
  method: 'GET',
  mode: 'cors'
})
.then(function(fetchResult) {
  return fetchResult.json();
})
.then(function(results) {
  if (fetchResult.ok) {
    const metaResult = results && results.length && results[0];
    if (metaResult && metaResult.meta_title) {
        document.title = metaResult.meta_title;
    }
  } else {
      console.error(results);
  }
})
.catch(function(err) {
  console.error('Error updating title', err);
});
