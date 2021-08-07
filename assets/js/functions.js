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
  let articles = $(".tiles>article");

  if (tagElement.id === "resetFilter") {
    articles.show();
    return;
  }

  articles.hide();
  let filterBy = tagElement.innerHTML;
  articles.find('.tags li').filter(function() {
    return $(this).html() === filterBy
  })
  .parents('article').show()
}

$(".filterButton").click((e) => {
  setFilterTag(e.currentTarget);
});

// Set Show All as the one selected initially
$(setFilterTag($("#resetFilter")[0]));

