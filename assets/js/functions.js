let currentFilterTag;

const setFilterTag = (tagElement) => {
  // Toggle border styling around element
  if (currentFilterTag) {
    currentFilterTag.classList.remove("filterButtonSelected");
  }

  // Show all
  if (tagElement) {
    currentFilterTag = tagElement;
    currentFilterTag.classList.add("filterButtonSelected");
  }

  // Filter elements (Tiles)
  let articles = $(".tiles>article")
  articles.show();

  if (tagElement.id !== "resetFilter") {
    // TODO: Optimize filtering function. Add transitions on hide
    let filterBy = tagElement.innerHTML;
    articles.filter(`:not(:contains('${filterBy}'))`).hide();
  }

}

$(".filterButton").click((e) => {
  setFilterTag(e.currentTarget);
});

// Set Show All as the one selected initially
$(setFilterTag($("#resetFilter")[0]));

