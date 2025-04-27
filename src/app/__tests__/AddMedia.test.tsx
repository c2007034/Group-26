import { handleAddMedia } from "../utils/addMedia";
describe('handleAddMedia', () => {
  const mockCloseModal = jest.fn();
  const mockFetchBooks = jest.fn();

  const newMedia = {
    name: "Test Media",
    genre: "Action",
    publishedate: "2025-01-01",
    mediatype: "Book",
    userid: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('should call fetch API and handle success', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({}),
    }) as any;

    await handleAddMedia(newMedia, mockCloseModal, mockFetchBooks);

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:4000/api/addmedia",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(newMedia),
      })
    );

    expect(mockCloseModal).toHaveBeenCalled();
    expect(mockFetchBooks).toHaveBeenCalled();
  });


});