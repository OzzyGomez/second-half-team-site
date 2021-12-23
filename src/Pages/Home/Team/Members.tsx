export type MemberLinkType = 'twitch' | 'youtube';

export interface MemberLink {
  type: MemberLinkType;
  url: string;
}

export interface Member {
  name: string;
  image: string;
  title: string;
  links: MemberLink[]
}

const Members: Member[] = [
  {
    name: 'Vision',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/OzzyGomez'
      }
    ]
  },
  {
    name: 'Beezy',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/beeezy420'
      }
    ]
  },
  {
    name: 'Wongderful',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/wongderful'
      }
    ]
  },
  {
    name: 'MrTrevino',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/mrtrevinoo'
      }
    ]
  },
  {
    name: 'AstralSGA',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/astralsga'
      }
    ]
  },
  {
    name: 'GhvstFreak',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/ghvstfreak'
      }
    ]
  },
  {
    name: 'Trou',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/trou_trou_'
      }
    ]
  },
  {
    name: 'GreatestDisciple',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/greatestdisciple'
      }
    ]
  }
];

export default Members;