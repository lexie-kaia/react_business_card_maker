class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 't3bof7jo');

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/demyeeuyt/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );

    return response.json();
  }
}

export default ImageUploader;
