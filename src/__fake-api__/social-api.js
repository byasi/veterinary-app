import { subHours, subMinutes } from 'date-fns';

const now = new Date();

class SocialApi {
  getProfile() {
    const profile = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
      bio: 'Product Designer',
      connectedStatus: 'not_connected',
      cover: '/static/mock-images/social/cover_1.jpg',
      currentCity: 'Bucharest',
      currentJobCompany: 'Devias IO',
      currentJobTitle: 'Product Designer',
      email: 'anika.visser@devias.io',
      name: 'Anika Visser',
      originCity: 'Rm. Valcea',
      previousJobCompany: 'Focus Aesthetic Dynamics',
      previousJobTitle: 'UX Designer',
      profileProgress: 50,
      quote: 'Everyone thinks of changing the world, but no one thinks of changing himself.'
    };

    return Promise.resolve(profile);
  }

  getConnections() {
    const connections = [
      {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
        commonConnections: 10,
        name: 'Carson Darrin',
        status: 'rejected'
      },
      {
        id: '5e887b209c28ac3dd97f6db5',
        avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
        commonConnections: 8,
        name: 'Fran Perez',
        status: 'pending'
      },
      {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
        commonConnections: 5,
        name: 'Miron Vitold',
        status: 'not_connected'
      },
      {
        id: '5e887a1fbefd7938eea9c981',
        avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
        commonConnections: 1,
        name: 'Penjani Inyene',
        status: 'connected'
      }
    ];

    return Promise.resolve(connections);
  }

  getPosts() {
    const posts = [
      {
        id: '5e887faca2b7a1ddce01221a',
        author: {
          id: '5e86809283e28b96d2d38537',
          avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
          name: 'Anika Visser'
        },
        comments: [
          {
            id: '5e887fc17162ba254da30771',
            author: {
              id: '5e887b7602bdbc4dbb234b27',
              avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
              name: 'Jie Yan Song'
            },
            createdAt: subHours(now, 3).getTime(),
            message: 'Could use some more statistics, but that’s me haha'
          },
          {
            id: '5e887fc759bebe8d5d54a2e5',
            author: {
              id: '5e887a1fbefd7938eea9c981',
              avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
              name: 'Penjani Inyene'
            },
            createdAt: subHours(now, 2).getTime(),
            message: 'Hmm, honestly this looks nice but I would change the shadow though'
          }
        ],
        createdAt: subHours(now, 4).getTime(),
        isLiked: true,
        likes: 24,
        media: '/static/mock-images/social/post_1.png',
        message: 'Just made this overview screen for a project, what-cha thinkin?'
      },
      {
        id: '5e887faf03e78a5359765636',
        author: {
          id: '5e86809283e28b96d2d38537',
          avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
          name: 'Anika Visser'
        },
        comments: [
          {
            id: '5e887fde4992eca63b9e9ef5',
            author: {
              id: '5e8877da9a65442b11551975',
              avatar: '/static/mock-images/avatars/avatar-iulia_albu.png',
              name: 'Iulia Albu'
            },
            createdAt: subHours(now, 3).getTime(),
            message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?'
          },
          {
            id: '5e887feb11b7add1ebfcca78',
            author: {
              id: '5e887b209c28ac3dd97f6db5',
              avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
              name: 'Fran Perez'
            },
            createdAt: subHours(now, 2).getTime(),
            message: 'Oh... so sentimental'
          }
        ],
        createdAt: subHours(now, 7).getTime(),
        isLiked: false,
        likes: 65,
        message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.'
      }
    ];

    return Promise.resolve(posts);
  }

  getFeed() {
    const posts = [
      {
        id: '5e887fa38598b6fe61667757',
        author: {
          id: '5e88792be2d4cfb4bf0971d9',
          avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
          name: 'Siegbert Gottfried'
        },
        comments: [
          {
            id: '5e887fb6c648772b52f860a8',
            author: {
              id: '5e8680e60cba5019c5ca6fda',
              avatar: '/static/mock-images/avatars/avatar-nasimiyu_danai.png',
              name: 'Nasimiyu Danai'
            },
            createdAt: subHours(now, 3).getTime(),
            message: 'I\'ve been using Angular for the past 3 years'
          }
        ],
        createdAt: subMinutes(now, 16).getTime(),
        isLiked: true,
        likes: 1,
        message: 'Hey guys! What\'s your favorite framework?'
      },
      {
        id: '5e887faca2b7a1ddce01221a',
        author: {
          id: '5e86809283e28b96d2d38537',
          avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
          name: 'Anika Visser'
        },
        comments: [
          {
            id: '5e887fc17162ba254da30771',
            author: {
              id: '5e887b7602bdbc4dbb234b27',
              avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
              name: 'Jie Yan Song'
            },
            createdAt: subHours(now, 3).getTime(),
            message: 'Could use some more statistics, but that’s me haha'
          },
          {
            id: '5e887fc759bebe8d5d54a2e5',
            author: {
              id: '5e887a1fbefd7938eea9c981',
              avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
              name: 'Penjani Inyene'
            },
            createdAt: subHours(now, 2).getTime(),
            message: 'Hmm, honestly this looks nice but I would change the shadow though'
          }
        ],
        createdAt: subHours(now, 4).getTime(),
        isLiked: true,
        likes: 24,
        media: '/static/mock-images/social/post_1.png',
        message: 'Just made this overview screen for a project, what-cha thinkin?'
      },
      {
        id: '5e887faf03e78a5359765636',
        author: {
          id: '5e86809283e28b96d2d38537',
          avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
          name: 'Anika Visser'
        },
        comments: [
          {
            id: '5e887fde4992eca63b9e9ef5',
            author: {
              id: '5e8877da9a65442b11551975',
              avatar: '/static/mock-images/avatars/avatar-iulia_albu.png',
              name: 'Iulia Albu'
            },
            createdAt: subHours(now, 3).getTime(),
            message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?'
          },
          {
            id: '5e887feb11b7add1ebfcca78',
            author: {
              id: '5e887b209c28ac3dd97f6db5',
              avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
              name: 'Fran Perez'
            },
            createdAt: subHours(now, 2).getTime(),
            message: 'Oh... so sentimental'
          }
        ],
        createdAt: subHours(now, 7).getTime(),
        isLiked: false,
        likes: 65,
        message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.'
      }
    ];

    return Promise.resolve(posts);
  }
}

export const socialApi = new SocialApi();
