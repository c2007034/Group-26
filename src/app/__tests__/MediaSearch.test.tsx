import { filterMedia, Media } from "../utils/search";

const mockMedia: Media[] = [
  { id: 1, name: "The Great Gatsby", genre: "Classic", publishedate: "1925", mediatype: "Book" },
  { id: 2, name: "Inception", genre: "Sci-Fi", publishedate: "2010", mediatype: "Movie" },
  { id: 3, name: "1984", genre: "Dystopian", publishedate: "1949", mediatype: "Book" },
];

describe("filterMedia", () => {
    it("filters by media name", () => {
    const result = filterMedia(mockMedia, "gatsby");
    expect(result).toEqual([
      { id: 1, name: "The Great Gatsby", genre: "Classic", publishedate: "1925", mediatype: "Book" },
    ]);
  });
  
  it("returns an empty array if no matches found", () => {
    const result = filterMedia(mockMedia, "unknown");
    expect(result).toEqual([]);
  });
});