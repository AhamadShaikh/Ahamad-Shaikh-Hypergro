export interface Creator {
    name: string;
    id: string;
    handle: string;
    pic: string;
  }
  
  export interface Comment {
    count: number;
    commentingAllowed: boolean;
  }
  
  export interface Reaction {
    count: number;
    voted: boolean;
  }
  
  export interface Submission {
    title: string;
    description: string;
    mediaUrl: string;
    thumbnail: string;
    hyperlink: string;
    placeholderUrl: string;
  }
  
  export interface Post {
    postId: string;
    creator: Creator;
    comment: Comment;
    reaction: Reaction;
    submission: Submission;
  }
  