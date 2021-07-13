export interface SiteInfoInterface {
  name: string;
  author: Author;
  url: string;
  socialLinks?: SocialLinksInterface;
}

interface AuthorInterface {
  name: string;
  socialLinks?: SocialLinksInterface;
}

export interface SocialLinksInterface {
  twitter?: string;
  linkedIn?: string;
  gitHub?: string;
  stackOverflow?: string;
}
