export interface Media {
    id: number;
    name: string;
    genre: string;
    publishedate: string;
    mediatype: string;
  }
  
  export function filterMedia(books: Media[], searchQuery: string): Media[] {
    const query = searchQuery.toLowerCase();
    return books.filter((media) =>
      media.name.toLowerCase().includes(query) ||
      media.genre.toLowerCase().includes(query) ||
      media.mediatype.toLowerCase().includes(query) ||
      media.publishedate.toLowerCase().includes(query)
    );
  }
  