export type Topic = {
  id: number;
  topicTitle: string;
  body: string;
  htmlBody: string;
  htmlFooter: string;
  createdAt: number;
  commentsCount: number;
  forum: Forum;
  user: User;
  type: string;
  linkedID: number;
  linkedType: string;
  linked: Linked;
  viewed: boolean;
  lastCommentViewed: boolean;
  event: string;
  episode: number;
};

export type Forum = {
  id: number;
  position: number;
  name: string;
  permalink: string;
  url: string;
};

export type Linked = {
  id: number;
  name: string;
  russian: string;
  image: LinkedImage;
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodesAired: number;
  airedOn: Date;
  releasedOn: Date;
};

export type LinkedImage = {
  original: string;
  preview: string;
  x96: string;
  x48: string;
};

export type User = {
  id: number;
  nickname: string;
  avatar: string;
  image: UserImage;
  lastOnlineAt: Date;
  url: string;
};

export type UserImage = {
  x160: string;
  x148: string;
  x80: string;
  x64: string;
  x48: string;
  x32: string;
  x16: string;
};
