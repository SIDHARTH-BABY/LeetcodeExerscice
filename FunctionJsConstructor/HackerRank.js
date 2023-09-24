class Size {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  class Image {
    constructor(url, size) {
      this.url = url;
      this.size = size;
    }
  
    getUrl() {
      return this.url;
    }
  
    setUrl(url) {
      this.url = url;
    }
  
    setSize(width, height) {
      this.size.width = width;
      this.size.height = height;
    }
  
    getSize() {
      return this.size;
    }
  
    cloneImage() {
      return new Image(this.url, new Size(this.size.width, this.size.height));
    }
  }
  
  // Example usage:
  const size = new Size(300, 200);
  const image = new Image('https://example.com/image.jpg', size);
  
  console.log('Original URL:', image.getUrl());
  console.log('Original Size:', image.getSize());
  
  image.setUrl('https://example.com/updated-image.jpg');
  image.setSize(400, 300);
  
  console.log('Updated URL:', image.getUrl());
  console.log('Updated Size:', image.getSize());
  
  const clonedImage = image.cloneImage();
  console.log('Cloned URL:', clonedImage.getUrl());
  console.log('Cloned Size:', clonedImage.getSize());