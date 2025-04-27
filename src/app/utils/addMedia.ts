export const handleAddMedia = async (
    newMedia: { name: string; genre: string; publishedate: string; mediatype: string; userid: number },
    closeModal: () => void,
    fetchBooks: () => void
  ) => {
    try {
      const response = await fetch("http://localhost:4000/api/addmedia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMedia),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        closeModal();
        fetchBooks();
      } else {
        alert("Error adding media: " + data.error);
      }
    } catch (error) {
      console.error("Error adding media:", error);
    }
  };
  