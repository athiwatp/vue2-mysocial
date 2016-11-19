export const authMock = (username) => {
  return {username, token:'faketoken'}
}

export const profileMock = [
  {
    username: 'jaynarol',
    name: 'Jaynarol Nova',
    image: '/static/imgs/friends/guy-3.jpg',
    following: 312,
    followers: 599,
    mefollow: false,
    posts: 16,
  }, {
    username: 'jefer',
    name: 'Jefer Smitch',
    image: '/static/imgs/friends/guy-2.jpg',
    following: 12,
    followers: 9,
    mefollow: true,
    posts: 453,
  }, {
    username: 'kodia',
    name: 'Kodia Nonoma',
    image: '/static/imgs/friends/guy-9.jpg',
    following: 125,
    followers: 9,
    mefollow: true,
    posts: 29,
  }, {
    username: 'aliss',
    name: 'Aliss Avenue',
    image: '/static/imgs/friends/woman-1.jpg',
    following: 4,
    followers: 9956,
    mefollow: false,
    posts: 536,
  }, {
    username: 'dokey',
    name: 'Dokey Surface',
    image: '/static/imgs/friends/child-1.jpg',
    following: 2,
    followers: 4,
    mefollow: false,
    posts: 1,
  }, {
    username: 'ashe',
    name: 'Ashe Romanop',
    image: '/static/imgs/friends/woman-2.jpg',
    following: 546,
    followers: 456456,
    mefollow: true,
    isme: false,
    posts: 45,
  }, {
    username: 'jonh',
    name: 'Jonh Umblura',
    image: '/static/imgs/friends/guy-8.jpg',
    following: 355,
    followers: 4,
    mefollow: true,
    posts: 54,
  }
]


export const friendMock = [
  {username: 'jefer', name: 'Jefer Smitch', image: '/static/imgs/friends/guy-2.jpg', mefollow: true, followme: false},
  {username: 'kodia', name: 'Kodia Nonoma', image: '/static/imgs/friends/guy-9.jpg', mefollow: true, followme: true},
  {username: 'aliss', name: 'Aliss Avenue', image: '/static/imgs/friends/woman-1.jpg', mefollow: false, followme: true},
  {username: 'dokey', name: 'Dokey Surface', image: '/static/imgs/friends/child-1.jpg', mefollow: false, followme: true},
  {username: 'ashe', name: 'Ashe Romanop', image: '/static/imgs/friends/woman-2.jpg', mefollow: true, followme: true},
  {username: 'jonh', name: 'Jonh Umblura', image: '/static/imgs/friends/guy-8.jpg', mefollow: true, followme: true},
]