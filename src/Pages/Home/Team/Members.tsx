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
    name: 'Ozzy Gomez',
    image: 'https://via.placeholder.com/300x300',
    title: 'Player',
    links: [
      {
        type: 'twitch',
        url: 'https://www.twitch.tv/OzzyGomez'
      }
    ]
  }
];

export default Members;