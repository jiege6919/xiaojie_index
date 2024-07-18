document.onkeydown = function (e) {
  if (e.key === "F12") {
    e.preventDefault();
  }
};

document.body.oncontextmenu = function (e) {
  e.preventDefault();
};

function toggleClass(selector, className) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    element.classList.toggle(className);
  });
}

document.addEventListener("DOMContentLoaded", function () {

  const switchCheckbox = document.getElementById("myonoffswitch");
  /*夜间自动打开暗色主题
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >= 18 || currentHour < 6) {
        switchCheckbox.checked = false;
        changeTheme(1);
    }
  */

  // switchCheckbox.addEventListener("change", function () {
  //   if (themeState == "Light") {
  //     changeTheme("Blue");
  //   } else if (themeState == "Dark") {
  //     changeTheme("Light");
  //   } else if (themeState == "Blue") {
  //     changeTheme("Dark");
  //   }
  // });

  var projectItems = document.querySelectorAll(".projectItem");

  function checkProjectItems() {
    for (var i = 0; i < projectItems.length; i++) {
      var projectItem = projectItems[i];
      var projectItemTop = projectItem.getBoundingClientRect().top;

      if (projectItemTop < window.innerHeight * 1.05) {
        projectItem.classList.add("fade-in-visible");
      }
    }
  }

  window.addEventListener("scroll", checkProjectItems);
  window.addEventListener("resize", checkProjectItems);

  checkProjectItems();

  var pageLoading = document.querySelector("#PageLoading");
  var center = document.getElementById("PageLoading-zyyo-center");
  setTimeout(function () {
    pageLoading.style.opacity = "0";
    center.style.height = "400px";
    center.style.width = "400px";
    center.style.opacity = "0";
    pageLoading.style.backgroundSize = "200%";
  }, 530);

});

function wx(imageURL) {
  toggleClass(".tc", "active");
  toggleClass(".tc-main", "active");

  var tcMainElement = document.querySelector(".tc-img");
  if (imageURL) {
    tcMainElement.src = imageURL;
  }
}


