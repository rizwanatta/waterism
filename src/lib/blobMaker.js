// help to make a blob of a uri path

// code from chatGPT for blob convertion
const imgToBlob = async (uri) => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.responseType = "blob";
    const blobPromise = new Promise((resolve, reject) => {
      xhr.onload = () => {
        const blob = xhr.response;
        resolve(blob);
      };
      xhr.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    });
    xhr.send();
    const blob = await blobPromise;
    return blob;
  } catch (error) {
    console.error(error);
  }
};

export { imgToBlob };
