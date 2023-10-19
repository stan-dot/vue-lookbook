export default {
  head: {
    title: 'Luxury Lookbook',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Explore our luxury fashion lookbook featuring exquisite designs and high-quality materials.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}

  return {
    script: [
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": this.product.name,
          "description": this.product.description,
          "image": this.product.image,
          "brand": "Your Luxury Brand",
          // Additional properties...
        }
      }
    ]
  };
}
