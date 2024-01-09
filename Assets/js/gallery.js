const galleryContainer = document.getElementById("dinny-gallery");

const dinnyGalleryArray = [
  "Dinny-01.jpg",
  "Dinny-02.jpg",
  "Dinny-03.jpg",
  "Dinny-04.jpg",
  "Dinny-05.jpg",
  "Dinny-06.jpg",
  "Dinny-07.jpg",
  "Dinny-08.jpg",
  "Dinny-09.jpg",
];

const baseUrl = "./Assets/images/GFX/";

const galleryFigure = document.createElement("figure");
galleryFigure.classList.add("gallery-figure");

const createGallery = () => {
  dinnyGalleryArray.forEach((img, index) => {
    const galleryImageFigure = document.createElement("figure");
    galleryImageFigure.classList.add("image-figure");
    const galleryImage = document.createElement("img");
    const galleryImageSrc = baseUrl + img;
    galleryImage.src = galleryImageSrc;

    galleryImageFigure.appendChild(galleryImage);

    const galleryHeaderArray = [
      "Gallery One",
      "Gallery Two",
      "Gallery Three",
      "Gallery Four",
      "Gallery Five",
      "Gallery Six",
      "Gallery Seven",
      "Gallery Eight",
      "Gallery Nine",
    ];

    const galleryImageFigcap = document.createElement("figcaption");
    galleryImageFigcap.classList.add("gallery-figcap");
    const figCapHeader = document.createElement("header");
    const figCapHeaderText = document.createElement("h3");
    figCapHeaderText.textContent = galleryHeaderArray[index];

    figCapHeader.appendChild(figCapHeaderText);

    const figCapTextOne = document.createElement("p");
    figCapTextOne.textContent =
      "Hic alias laborum nesciunt ipsa, quidem aut fugit similique beatae, vero ullam eum suscipit assumenda fugiat pariatur optio repudiandae laboriosam eos expedita.";

    const figCapTextTwo = document.createElement("p");
    figCapTextTwo.textContent =
      "Dolor nesciunt architecto harum vero? Eos labore iste illo, dignissimos odio voluptates pariatur eum aliquam";

    const figCapFooter = document.createElement("footer");
    const figCapFooterText = document.createElement("a");
    figCapFooterText.textContent = "Order:";

    figCapFooter.appendChild(figCapFooterText);

    const appendChildren = (parent, elements) => {
      elements.forEach((element) => {
        parent.appendChild(element);
      });
    };
    appendChildren(galleryImageFigcap, [
      figCapHeader,
      figCapTextOne,
      figCapTextTwo,
      figCapFooter,
    ]);

    galleryImageFigure.appendChild(galleryImageFigcap);

    galleryFigure.appendChild(galleryImageFigure);
  });
};

galleryContainer.appendChild(galleryFigure);

window.addEventListener("load", createGallery);
