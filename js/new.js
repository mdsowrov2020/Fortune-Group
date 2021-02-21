$('.awr_gallery').magnificPopup({
  type: 'image',
  image: {
    titleSrc: 'title',
    // this tells the script which attribute has your caption
  },
  delegate: 'a',
  gallery: { enabled: true },
});

$('.csr_gallery').magnificPopup({
  type: 'image',
  image: {
    titleSrc: 'title',
    // this tells the script which attribute has your caption
  },
  delegate: 'a',
  gallery: { enabled: true },
});

AOS.init();
