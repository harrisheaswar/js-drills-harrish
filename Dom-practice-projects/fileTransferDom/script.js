let bodyContent = document.querySelector(".body-content");

let leftList = document.querySelector(".left-set");
let rightList = document.querySelector(".right-set");
let transferButtons = document.querySelector(".buttons");

let checkedLeft = [];
let checkedRight = [];

leftList.addEventListener("click", (e) => {
  let transferSingleToRightBtn = document.querySelector(".transfer-right");
  transferSingleToRightBtn.disabled = true;

  if (leftList.children.length != 0) {
    Array.from(leftList.children).forEach((child) => {
      let checkbox = child.firstElementChild;

      if (checkbox.checked) {
        checkedLeft.push(checkbox.parentElement);
        transferSingleToRightBtn.disabled = false;
      }
    });
  }
});

transferButtons.addEventListener("click", (e) => {
  let leftItemsParent = document.querySelector(".left-set");
  let rightItemsParent = document.querySelector(".right-set");
  if (e.target.classList.contains("transfer-all-right")) {
    transferAllToRight(leftItemsParent);
  } else if (e.target.classList.contains("transfer-all-left")) {
    transferAllToLeft(rightItemsParent);
  } else if (e.target.classList.contains("transfer-right")) {
    transferToRight();
  } else if (e.target.classList.contains("transfer-left")) {
    transferToLeft();
  }
});

rightList.addEventListener("click", (e) => {
  let transferSingleToLeftBtn = document.querySelector(".transfer-left");
  transferSingleToLeftBtn.disabled = true;

  if (rightList.children.length != 0) {
    Array.from(rightList.children).forEach((child) => {
      let checkbox = child.firstElementChild;

      if (checkbox.checked) {
        checkedRight.push(checkbox.parentElement);
        transferSingleToLeftBtn.disabled = false;
      }
    });
  }
});

function transferAllToRight(itemListParent) {
  let itemsArr = itemListParent.children;
  checkedLeft = [];
  let rightItemsParent = document.querySelector(".right-set");
  if (itemsArr.length != 0) {
    Array.from(itemsArr).forEach((item) => {
      console.log(item.tagName);
      rightItemsParent.append(item);

      let ifChecked = item.firstElementChild;
      if (ifChecked.checked) {
        ifChecked.checked = false;
      }
    });
  }
  let transferSingleToRightBtn = document.querySelector(".transfer-right");
  transferSingleToRightBtn.disabled = true;
}

function transferAllToLeft(itemListParent) {
  let itemsArr = itemListParent.children;
  checkedRight = [];
  let leftItemsParent = document.querySelector(".left-set");
  if (itemsArr.length != 0) {
    Array.from(itemsArr).forEach((item) => {
      console.log(item.tagName);
      leftItemsParent.append(item);

      let ifChecked = item.firstElementChild;
      if (ifChecked.checked) {
        ifChecked.checked = false;
      }
    });
  }
  let transferSingleToLeftBtn = document.querySelector(".transfer-left");
  transferSingleToLeftBtn.disabled = true;
}

function transferToRight() {
  let rightItemsParent = document.querySelector(".right-set");

  checkedLeft.forEach((item) => {
    item.firstElementChild.checked = false;
    rightItemsParent.append(item);
  });
  checkedLeft = [];
}

function transferToLeft() {
  let leftItemsParent = document.querySelector(".left-set");

  checkedRight.forEach((item) => {
    item.firstElementChild.checked = false;
    leftItemsParent.append(item);
  });
  checkedRight = [];
}
