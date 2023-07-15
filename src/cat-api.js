import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      Authoryzation: {
        'x-api-key':
          'live_AvPRAkYLSVPZ9A5NMDi8cFP82268FFvjjM4d5cJjxIvI0vjhlvNpXXPW4gL8hqwI',
      },
    },
  }).then(response => {
    if (!response.ok) {
      Notify.failure(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        Authoryzation: {
          'x-api-key':
            'live_AvPRAkYLSVPZ9A5NMDi8cFP82268FFvjjM4d5cJjxIvI0vjhlvNpXXPW4gL8hqwI',
        },
      },
    }
  ).then(response => {
    if (!response.ok) {
      Notify.failure(response.status);
    }
    return response.json();
  });
}