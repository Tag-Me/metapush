if (document.location.href === 'https://www.taggingguru.com/my-team') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Contributors | Tagging Guru Team Unite';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('errror updating title', err);
    });
}

if (document.location.href === 'https://www.taggingguru.com/') {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function() {
      document.title = 'Tagging Guru | Homepage | Meta Push Update';
      console.log('Updated title');
    })
    .catch(function(err) {
      console.error('errror updating title', err);
    });
}
