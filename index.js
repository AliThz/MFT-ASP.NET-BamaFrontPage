function ShowCase(Case) {
    console.log("in ShowCase");
    var node = document.getElementById("contentarea");
    node.querySelectorAll('*').forEach(n => n.remove());

    var elements = document.getElementsByClassName("hide-content");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    if (Case.id === "showcase-shortcut") {
        ShowShortcutContent();

    } else if (Case.id === "showcase-brand") {
        ShowBrandContent();

    } else if (Case.id === "showcase-chassis") {
        ShowChassisContent();

    } else if (Case.id === "showcase-price") {
        ShowPriceContent();

    } else if (Case.id === "custom-x") {
        ShowMainImage();
    }
}

function ShowShortcutContent() {

    var hideContent = document.createElement('a');
    hideContent.href = "#";
    hideContent.className = "text-secondary text-decoration-none bg-white hide-content";
    hideContent.id = "custom-x";

    var hideContentIcon = document.createElement('i');
    hideContentIcon.className = "bi bi-x";

    hideContent.appendChild(hideContentIcon);
    document.getElementById("showcase-shortcut-div").appendChild(hideContent);

    hideContent.onclick = function() { ShowCase(hideContent) };


    var shortcutContainer = document.createElement('div');
    shortcutContainer.className = "container";
    shortcutContainer.id = "showcase-shortcut-content";
    document.getElementById("contentarea").appendChild(shortcutContainer);

    var shortcutRow = document.createElement('div');
    shortcutRow.className = "row g-4";
    shortcutContainer.appendChild(shortcutRow);

    var shortcutH5 = document.createElement('h5');
    shortcutH5.className = "mb-5 text-secondary";
    shortcutH5.innerHTML = "از میانبر های زیر انتخاب کنید:"
    shortcutRow.appendChild(shortcutH5);



    var shortcutFirstItem = document.createElement('div');
    shortcutFirstItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutFirstItem);

    var shortcutFirstItemA = document.createElement('a');
    shortcutFirstItemA.href = "#";
    shortcutFirstItem.appendChild(shortcutFirstItemA);

    var shortcutFirstItemCard = document.createElement('div');
    shortcutFirstItemCard.className = "card bg-ligh";
    shortcutFirstItemA.appendChild(shortcutFirstItemCard);

    var shortcutFirstItemCardBody = document.createElement('div');
    shortcutFirstItemCardBody.className = "card-body text-center";
    shortcutFirstItemCard.appendChild(shortcutFirstItemCardBody);

    var shortcutFirstItemCardBodyIcon = document.createElement('i');
    shortcutFirstItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutFirstItemCardBody.appendChild(shortcutFirstItemCardBodyIcon);

    var shortcutFirstItemCardBodyH6 = document.createElement('h6');
    shortcutFirstItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutFirstItemCardBodyH6.innerHTML = "صفر";
    shortcutFirstItemCardBodyIcon.appendChild(shortcutFirstItemCardBodyH6);


    var shortcutSecondItem = document.createElement('div');
    shortcutSecondItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSecondItem);

    var shortcutSecondItemA = document.createElement('a');
    shortcutSecondItemA.href = "#";
    shortcutSecondItem.appendChild(shortcutSecondItemA);

    var shortcutSecondItemCard = document.createElement('div');
    shortcutSecondItemCard.className = "card bg-ligh";
    shortcutSecondItemA.appendChild(shortcutSecondItemCard);

    var shortcutSecondItemCardBody = document.createElement('div');
    shortcutSecondItemCardBody.className = "card-body text-center";
    shortcutSecondItemCard.appendChild(shortcutSecondItemCardBody);

    var shortcutSecondItemCardBodyIcon = document.createElement('i');
    shortcutSecondItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSecondItemCardBody.appendChild(shortcutSecondItemCardBodyIcon);

    var shortcutSecondItemCardBodyH6 = document.createElement('h6');
    shortcutSecondItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSecondItemCardBodyH6.innerHTML = "کم مصرف";
    shortcutSecondItemCardBodyIcon.appendChild(shortcutSecondItemCardBodyH6);


    var shortcutThirdItem = document.createElement('div');
    shortcutThirdItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutThirdItem);

    var shortcutThirdItemA = document.createElement('a');
    shortcutThirdItemA.href = "#";
    shortcutThirdItem.appendChild(shortcutThirdItemA);

    var shortcutThirdItemCard = document.createElement('div');
    shortcutThirdItemCard.className = "card bg-ligh";
    shortcutThirdItemA.appendChild(shortcutThirdItemCard);

    var shortcutThirdItemCardBody = document.createElement('div');
    shortcutThirdItemCardBody.className = "card-body text-center";
    shortcutThirdItemCard.appendChild(shortcutThirdItemCardBody);

    var shortcutThirdItemCardBodyIcon = document.createElement('i');
    shortcutThirdItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutThirdItemCardBody.appendChild(shortcutThirdItemCardBodyIcon);

    var shortcutThirdItemCardBodyH6 = document.createElement('h6');
    shortcutThirdItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutThirdItemCardBodyH6.innerHTML = "اقتصادی";
    shortcutThirdItemCardBodyIcon.appendChild(shortcutThirdItemCardBodyH6);


    var shortcutForthItem = document.createElement('div');
    shortcutForthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutForthItem);

    var shortcutForthItemA = document.createElement('a');
    shortcutForthItemA.href = "#";
    shortcutForthItem.appendChild(shortcutForthItemA);

    var shortcutForthItemCard = document.createElement('div');
    shortcutForthItemCard.className = "card bg-ligh";
    shortcutForthItemA.appendChild(shortcutForthItemCard);

    var shortcutForthItemCardBody = document.createElement('div');
    shortcutForthItemCardBody.className = "card-body text-center";
    shortcutForthItemCard.appendChild(shortcutForthItemCardBody);

    var shortcutForthItemCardBodyIcon = document.createElement('i');
    shortcutForthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutForthItemCardBody.appendChild(shortcutForthItemCardBodyIcon);

    var shortcutForthItemCardBodyH6 = document.createElement('h6');
    shortcutForthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutForthItemCardBodyH6.innerHTML = "آفرود";
    shortcutForthItemCardBodyIcon.appendChild(shortcutForthItemCardBodyH6);


    var shortcutFifthItem = document.createElement('div');
    shortcutFifthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutFifthItem);

    var shortcutFifthItemA = document.createElement('a');
    shortcutFifthItemA.href = "#";
    shortcutFifthItem.appendChild(shortcutFifthItemA);

    var shortcutFifthItemCard = document.createElement('div');
    shortcutFifthItemCard.className = "card bg-ligh";
    shortcutFifthItemA.appendChild(shortcutFifthItemCard);

    var shortcutFifthItemCardBody = document.createElement('div');
    shortcutFifthItemCardBody.className = "card-body text-center";
    shortcutFifthItemCard.appendChild(shortcutFifthItemCardBody);

    var shortcutFifthItemCardBodyIcon = document.createElement('i');
    shortcutFifthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutFifthItemCardBody.appendChild(shortcutFifthItemCardBodyIcon);

    var shortcutFifthItemCardBodyH6 = document.createElement('h6');
    shortcutFifthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutFifthItemCardBodyH6.innerHTML = "هیبرید";
    shortcutFifthItemCardBodyIcon.appendChild(shortcutFifthItemCardBodyH6);


    var shortcutSixthItem = document.createElement('div');
    shortcutSixthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSixthItem);

    var shortcutSixthItemA = document.createElement('a');
    shortcutSixthItemA.href = "#";
    shortcutSixthItem.appendChild(shortcutSixthItemA);

    var shortcutSixthItemCard = document.createElement('div');
    shortcutSixthItemCard.className = "card bg-ligh";
    shortcutSixthItemA.appendChild(shortcutSixthItemCard);

    var shortcutSixthItemCardBody = document.createElement('div');
    shortcutSixthItemCardBody.className = "card-body text-center";
    shortcutSixthItemCard.appendChild(shortcutSixthItemCardBody);

    var shortcutSixthItemCardBodyIcon = document.createElement('i');
    shortcutSixthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSixthItemCardBody.appendChild(shortcutSixthItemCardBodyIcon);

    var shortcutSixthItemCardBodyH6 = document.createElement('h6');
    shortcutSixthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSixthItemCardBodyH6.innerHTML = "اقساطی";
    shortcutSixthItemCardBodyIcon.appendChild(shortcutSixthItemCardBodyH6);


    var shortcutSeventhItem = document.createElement('div');
    shortcutSeventhItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSeventhItem);

    var shortcutSeventhItemA = document.createElement('a');
    shortcutSeventhItemA.href = "#";
    shortcutSeventhItem.appendChild(shortcutSeventhItemA);

    var shortcutSeventhItemCard = document.createElement('div');
    shortcutSeventhItemCard.className = "card bg-ligh";
    shortcutSeventhItemA.appendChild(shortcutSeventhItemCard);

    var shortcutSeventhItemCardBody = document.createElement('div');
    shortcutSeventhItemCardBody.className = "card-body text-center";
    shortcutSeventhItemCard.appendChild(shortcutSeventhItemCardBody);

    var shortcutSeventhItemCardBodyIcon = document.createElement('i');
    shortcutSeventhItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSeventhItemCardBody.appendChild(shortcutSeventhItemCardBodyIcon);

    var shortcutSeventhItemCardBodyH6 = document.createElement('h6');
    shortcutSeventhItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSeventhItemCardBodyH6.innerHTML = "8 سیلندر";
    shortcutSeventhItemCardBodyIcon.appendChild(shortcutSeventhItemCardBodyH6);


    var shortcutEighthItem = document.createElement('div');
    shortcutEighthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutEighthItem);

    var shortcutEighthItemA = document.createElement('a');
    shortcutEighthItemA.href = "#";
    shortcutEighthItem.appendChild(shortcutEighthItemA);

    var shortcutEighthItemCard = document.createElement('div');
    shortcutEighthItemCard.className = "card bg-ligh";
    shortcutEighthItemA.appendChild(shortcutEighthItemCard);

    var shortcutEighthItemCardBody = document.createElement('div');
    shortcutEighthItemCardBody.className = "card-body text-center";
    shortcutEighthItemCard.appendChild(shortcutEighthItemCardBody);

    var shortcutEighthItemCardBodyIcon = document.createElement('i');
    shortcutEighthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutEighthItemCardBody.appendChild(shortcutEighthItemCardBodyIcon);

    var shortcutEighthItemCardBodyH6 = document.createElement('h6');
    shortcutEighthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutEighthItemCardBodyH6.innerHTML = "...";
    shortcutEighthItemCardBodyIcon.appendChild(shortcutEighthItemCardBodyH6);
}

function ShowBrandContent() {
    var hideContent = document.createElement('a');
    hideContent.href = "#";
    hideContent.className = "text-secondary text-decoration-none bg-white hide-content";
    hideContent.id = "custom-x";

    var hideContentIcon = document.createElement('i');
    hideContentIcon.className = "bi bi-x";

    hideContent.appendChild(hideContentIcon);
    document.getElementById("showcase-brand-div").appendChild(hideContent);

    hideContent.onclick = function() { ShowCase(hideContent) };

    var shortcutContainer = document.createElement('div');
    shortcutContainer.className = "container";
    shortcutContainer.id = "showcase-brand-content";
    document.getElementById("contentarea").appendChild(shortcutContainer);

    var shortcutRow = document.createElement('div');
    shortcutRow.className = "row g-4";
    shortcutContainer.appendChild(shortcutRow);



    var shortcutFirstItem = document.createElement('div');
    shortcutFirstItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutFirstItem);

    var shortcutFirstItemA = document.createElement('a');
    shortcutFirstItemA.href = "#";
    shortcutFirstItem.appendChild(shortcutFirstItemA);

    var shortcutFirstItemCard = document.createElement('div');
    shortcutFirstItemCard.className = "card bg-ligh";
    shortcutFirstItemA.appendChild(shortcutFirstItemCard);

    var shortcutFirstItemCardBody = document.createElement('div');
    shortcutFirstItemCardBody.className = "card-body text-center";
    shortcutFirstItemCard.appendChild(shortcutFirstItemCardBody);

    var shortcutFirstItemCardBodyIcon = document.createElement('i');
    shortcutFirstItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutFirstItemCardBody.appendChild(shortcutFirstItemCardBodyIcon);

    var shortcutFirstItemCardBodyH6 = document.createElement('h6');
    shortcutFirstItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutFirstItemCardBodyH6.innerHTML = "آئودی";
    shortcutFirstItemCardBodyIcon.appendChild(shortcutFirstItemCardBodyH6);


    var shortcutSecondItem = document.createElement('div');
    shortcutSecondItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSecondItem);

    var shortcutSecondItemA = document.createElement('a');
    shortcutSecondItemA.href = "#";
    shortcutSecondItem.appendChild(shortcutSecondItemA);

    var shortcutSecondItemCard = document.createElement('div');
    shortcutSecondItemCard.className = "card bg-ligh";
    shortcutSecondItemA.appendChild(shortcutSecondItemCard);

    var shortcutSecondItemCardBody = document.createElement('div');
    shortcutSecondItemCardBody.className = "card-body text-center";
    shortcutSecondItemCard.appendChild(shortcutSecondItemCardBody);

    var shortcutSecondItemCardBodyIcon = document.createElement('i');
    shortcutSecondItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSecondItemCardBody.appendChild(shortcutSecondItemCardBodyIcon);

    var shortcutSecondItemCardBodyH6 = document.createElement('h6');
    shortcutSecondItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSecondItemCardBodyH6.innerHTML = "ام وی ام";
    shortcutSecondItemCardBodyIcon.appendChild(shortcutSecondItemCardBodyH6);


    var shortcutThirdItem = document.createElement('div');
    shortcutThirdItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutThirdItem);

    var shortcutThirdItemA = document.createElement('a');
    shortcutThirdItemA.href = "#";
    shortcutThirdItem.appendChild(shortcutThirdItemA);

    var shortcutThirdItemCard = document.createElement('div');
    shortcutThirdItemCard.className = "card bg-ligh";
    shortcutThirdItemA.appendChild(shortcutThirdItemCard);

    var shortcutThirdItemCardBody = document.createElement('div');
    shortcutThirdItemCardBody.className = "card-body text-center";
    shortcutThirdItemCard.appendChild(shortcutThirdItemCardBody);

    var shortcutThirdItemCardBodyIcon = document.createElement('i');
    shortcutThirdItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutThirdItemCardBody.appendChild(shortcutThirdItemCardBodyIcon);

    var shortcutThirdItemCardBodyH6 = document.createElement('h6');
    shortcutThirdItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutThirdItemCardBodyH6.innerHTML = "بنز";
    shortcutThirdItemCardBodyIcon.appendChild(shortcutThirdItemCardBodyH6);


    var shortcutForthItem = document.createElement('div');
    shortcutForthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutForthItem);

    var shortcutForthItemA = document.createElement('a');
    shortcutForthItemA.href = "#";
    shortcutForthItem.appendChild(shortcutForthItemA);

    var shortcutForthItemCard = document.createElement('div');
    shortcutForthItemCard.className = "card bg-ligh";
    shortcutForthItemA.appendChild(shortcutForthItemCard);

    var shortcutForthItemCardBody = document.createElement('div');
    shortcutForthItemCardBody.className = "card-body text-center";
    shortcutForthItemCard.appendChild(shortcutForthItemCardBody);

    var shortcutForthItemCardBodyIcon = document.createElement('i');
    shortcutForthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutForthItemCardBody.appendChild(shortcutForthItemCardBodyIcon);

    var shortcutForthItemCardBodyH6 = document.createElement('h6');
    shortcutForthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutForthItemCardBodyH6.innerHTML = "برلیانس";
    shortcutForthItemCardBodyIcon.appendChild(shortcutForthItemCardBodyH6);


    var shortcutFifthItem = document.createElement('div');
    shortcutFifthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutFifthItem);

    var shortcutFifthItemA = document.createElement('a');
    shortcutFifthItemA.href = "#";
    shortcutFifthItem.appendChild(shortcutFifthItemA);

    var shortcutFifthItemCard = document.createElement('div');
    shortcutFifthItemCard.className = "card bg-ligh";
    shortcutFifthItemA.appendChild(shortcutFifthItemCard);

    var shortcutFifthItemCardBody = document.createElement('div');
    shortcutFifthItemCardBody.className = "card-body text-center";
    shortcutFifthItemCard.appendChild(shortcutFifthItemCardBody);

    var shortcutFifthItemCardBodyIcon = document.createElement('i');
    shortcutFifthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutFifthItemCardBody.appendChild(shortcutFifthItemCardBodyIcon);

    var shortcutFifthItemCardBodyH6 = document.createElement('h6');
    shortcutFifthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutFifthItemCardBodyH6.innerHTML = "بی ام و";
    shortcutFifthItemCardBodyIcon.appendChild(shortcutFifthItemCardBodyH6);


    var shortcutSixthItem = document.createElement('div');
    shortcutSixthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSixthItem);

    var shortcutSixthItemA = document.createElement('a');
    shortcutSixthItemA.href = "#";
    shortcutSixthItem.appendChild(shortcutSixthItemA);

    var shortcutSixthItemCard = document.createElement('div');
    shortcutSixthItemCard.className = "card bg-ligh";
    shortcutSixthItemA.appendChild(shortcutSixthItemCard);

    var shortcutSixthItemCardBody = document.createElement('div');
    shortcutSixthItemCardBody.className = "card-body text-center";
    shortcutSixthItemCard.appendChild(shortcutSixthItemCardBody);

    var shortcutSixthItemCardBodyIcon = document.createElement('i');
    shortcutSixthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSixthItemCardBody.appendChild(shortcutSixthItemCardBodyIcon);

    var shortcutSixthItemCardBodyH6 = document.createElement('h6');
    shortcutSixthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSixthItemCardBodyH6.innerHTML = "نویوتا";
    shortcutSixthItemCardBodyIcon.appendChild(shortcutSixthItemCardBodyH6);


    var shortcutSeventhItem = document.createElement('div');
    shortcutSeventhItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSeventhItem);

    var shortcutSeventhItemA = document.createElement('a');
    shortcutSeventhItemA.href = "#";
    shortcutSeventhItem.appendChild(shortcutSeventhItemA);

    var shortcutSeventhItemCard = document.createElement('div');
    shortcutSeventhItemCard.className = "card bg-ligh";
    shortcutSeventhItemA.appendChild(shortcutSeventhItemCard);

    var shortcutSeventhItemCardBody = document.createElement('div');
    shortcutSeventhItemCardBody.className = "card-body text-center";
    shortcutSeventhItemCard.appendChild(shortcutSeventhItemCardBody);

    var shortcutSeventhItemCardBodyIcon = document.createElement('i');
    shortcutSeventhItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSeventhItemCardBody.appendChild(shortcutSeventhItemCardBodyIcon);

    var shortcutSeventhItemCardBodyH6 = document.createElement('h6');
    shortcutSeventhItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSeventhItemCardBodyH6.innerHTML = "پورشه";
    shortcutSeventhItemCardBodyIcon.appendChild(shortcutSeventhItemCardBodyH6);


    var shortcutEighthItem = document.createElement('div');
    shortcutEighthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutEighthItem);

    var shortcutEighthItemA = document.createElement('a');
    shortcutEighthItemA.href = "#";
    shortcutEighthItem.appendChild(shortcutEighthItemA);

    var shortcutEighthItemCard = document.createElement('div');
    shortcutEighthItemCard.className = "card bg-ligh";
    shortcutEighthItemA.appendChild(shortcutEighthItemCard);

    var shortcutEighthItemCardBody = document.createElement('div');
    shortcutEighthItemCardBody.className = "card-body text-center";
    shortcutEighthItemCard.appendChild(shortcutEighthItemCardBody);

    var shortcutEighthItemCardBodyIcon = document.createElement('i');
    shortcutEighthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutEighthItemCardBody.appendChild(shortcutEighthItemCardBodyIcon);

    var shortcutEighthItemCardBodyH6 = document.createElement('h6');
    shortcutEighthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutEighthItemCardBodyH6.innerHTML = "...";
    shortcutEighthItemCardBodyIcon.appendChild(shortcutEighthItemCardBodyH6);
}

function ShowChassisContent() {
    var hideContent = document.createElement('a');
    hideContent.href = "#";
    hideContent.className = "text-secondary text-decoration-none bg-white hide-content";
    hideContent.id = "custom-x";

    var hideContentIcon = document.createElement('i');
    hideContentIcon.className = "bi bi-x";

    hideContent.appendChild(hideContentIcon);
    document.getElementById("showcase-chassis-div").appendChild(hideContent);

    hideContent.onclick = function() { ShowCase(hideContent) };

    var shortcutContainer = document.createElement('div');
    shortcutContainer.className = "container";
    shortcutContainer.id = "showcase-chassis-content";
    document.getElementById("contentarea").appendChild(shortcutContainer);

    var shortcutRow = document.createElement('div');
    shortcutRow.className = "row g-4";
    shortcutContainer.appendChild(shortcutRow);



    var shortcutFirstItem = document.createElement('div');
    shortcutFirstItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutFirstItem);

    var shortcutFirstItemA = document.createElement('a');
    shortcutFirstItemA.href = "#";
    shortcutFirstItem.appendChild(shortcutFirstItemA);

    var shortcutFirstItemCard = document.createElement('div');
    shortcutFirstItemCard.className = "card bg-ligh";
    shortcutFirstItemA.appendChild(shortcutFirstItemCard);

    var shortcutFirstItemCardBody = document.createElement('div');
    shortcutFirstItemCardBody.className = "card-body text-center";
    shortcutFirstItemCard.appendChild(shortcutFirstItemCardBody);

    var shortcutFirstItemCardBodyIcon = document.createElement('i');
    shortcutFirstItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutFirstItemCardBody.appendChild(shortcutFirstItemCardBodyIcon);

    var shortcutFirstItemCardBodyH6 = document.createElement('h6');
    shortcutFirstItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutFirstItemCardBodyH6.innerHTML = "سدان";
    shortcutFirstItemCardBodyIcon.appendChild(shortcutFirstItemCardBodyH6);


    var shortcutSecondItem = document.createElement('div');
    shortcutSecondItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSecondItem);

    var shortcutSecondItemA = document.createElement('a');
    shortcutSecondItemA.href = "#";
    shortcutSecondItem.appendChild(shortcutSecondItemA);

    var shortcutSecondItemCard = document.createElement('div');
    shortcutSecondItemCard.className = "card bg-ligh";
    shortcutSecondItemA.appendChild(shortcutSecondItemCard);

    var shortcutSecondItemCardBody = document.createElement('div');
    shortcutSecondItemCardBody.className = "card-body text-center";
    shortcutSecondItemCard.appendChild(shortcutSecondItemCardBody);

    var shortcutSecondItemCardBodyIcon = document.createElement('i');
    shortcutSecondItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSecondItemCardBody.appendChild(shortcutSecondItemCardBodyIcon);

    var shortcutSecondItemCardBodyH6 = document.createElement('h6');
    shortcutSecondItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSecondItemCardBodyH6.innerHTML = "شاسی بلند";
    shortcutSecondItemCardBodyIcon.appendChild(shortcutSecondItemCardBodyH6);


    var shortcutThirdItem = document.createElement('div');
    shortcutThirdItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutThirdItem);

    var shortcutThirdItemA = document.createElement('a');
    shortcutThirdItemA.href = "#";
    shortcutThirdItem.appendChild(shortcutThirdItemA);

    var shortcutThirdItemCard = document.createElement('div');
    shortcutThirdItemCard.className = "card bg-ligh";
    shortcutThirdItemA.appendChild(shortcutThirdItemCard);

    var shortcutThirdItemCardBody = document.createElement('div');
    shortcutThirdItemCardBody.className = "card-body text-center";
    shortcutThirdItemCard.appendChild(shortcutThirdItemCardBody);

    var shortcutThirdItemCardBodyIcon = document.createElement('i');
    shortcutThirdItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutThirdItemCardBody.appendChild(shortcutThirdItemCardBodyIcon);

    var shortcutThirdItemCardBodyH6 = document.createElement('h6');
    shortcutThirdItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutThirdItemCardBodyH6.innerHTML = "کروک";
    shortcutThirdItemCardBodyIcon.appendChild(shortcutThirdItemCardBodyH6);


    var shortcutForthItem = document.createElement('div');
    shortcutForthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutForthItem);

    var shortcutForthItemA = document.createElement('a');
    shortcutForthItemA.href = "#";
    shortcutForthItem.appendChild(shortcutForthItemA);

    var shortcutForthItemCard = document.createElement('div');
    shortcutForthItemCard.className = "card bg-ligh";
    shortcutForthItemA.appendChild(shortcutForthItemCard);

    var shortcutForthItemCardBody = document.createElement('div');
    shortcutForthItemCardBody.className = "card-body text-center";
    shortcutForthItemCard.appendChild(shortcutForthItemCardBody);

    var shortcutForthItemCardBodyIcon = document.createElement('i');
    shortcutForthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutForthItemCardBody.appendChild(shortcutForthItemCardBodyIcon);

    var shortcutForthItemCardBodyH6 = document.createElement('h6');
    shortcutForthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutForthItemCardBodyH6.innerHTML = "کوپه";
    shortcutForthItemCardBodyIcon.appendChild(shortcutForthItemCardBodyH6);


    var shortcutFifthItem = document.createElement('div');
    shortcutFifthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutFifthItem);

    var shortcutFifthItemA = document.createElement('a');
    shortcutFifthItemA.href = "#";
    shortcutFifthItem.appendChild(shortcutFifthItemA);

    var shortcutFifthItemCard = document.createElement('div');
    shortcutFifthItemCard.className = "card bg-ligh";
    shortcutFifthItemA.appendChild(shortcutFifthItemCard);

    var shortcutFifthItemCardBody = document.createElement('div');
    shortcutFifthItemCardBody.className = "card-body text-center";
    shortcutFifthItemCard.appendChild(shortcutFifthItemCardBody);

    var shortcutFifthItemCardBodyIcon = document.createElement('i');
    shortcutFifthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutFifthItemCardBody.appendChild(shortcutFifthItemCardBodyIcon);

    var shortcutFifthItemCardBodyH6 = document.createElement('h6');
    shortcutFifthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutFifthItemCardBodyH6.innerHTML = "وانت";
    shortcutFifthItemCardBodyIcon.appendChild(shortcutFifthItemCardBodyH6);


    var shortcutSixthItem = document.createElement('div');
    shortcutSixthItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSixthItem);

    var shortcutSixthItemA = document.createElement('a');
    shortcutSixthItemA.href = "#";
    shortcutSixthItem.appendChild(shortcutSixthItemA);

    var shortcutSixthItemCard = document.createElement('div');
    shortcutSixthItemCard.className = "card bg-ligh";
    shortcutSixthItemA.appendChild(shortcutSixthItemCard);

    var shortcutSixthItemCardBody = document.createElement('div');
    shortcutSixthItemCardBody.className = "card-body text-center";
    shortcutSixthItemCard.appendChild(shortcutSixthItemCardBody);

    var shortcutSixthItemCardBodyIcon = document.createElement('i');
    shortcutSixthItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSixthItemCardBody.appendChild(shortcutSixthItemCardBodyIcon);

    var shortcutSixthItemCardBodyH6 = document.createElement('h6');
    shortcutSixthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSixthItemCardBodyH6.innerHTML = "ون";
    shortcutSixthItemCardBodyIcon.appendChild(shortcutSixthItemCardBodyH6);


    var shortcutSeventhItem = document.createElement('div');
    shortcutSeventhItem.className = "col-md-4 col-lg-3";
    shortcutRow.appendChild(shortcutSeventhItem);

    var shortcutSeventhItemA = document.createElement('a');
    shortcutSeventhItemA.href = "#";
    shortcutSeventhItem.appendChild(shortcutSeventhItemA);

    var shortcutSeventhItemCard = document.createElement('div');
    shortcutSeventhItemCard.className = "card bg-ligh";
    shortcutSeventhItemA.appendChild(shortcutSeventhItemCard);

    var shortcutSeventhItemCardBody = document.createElement('div');
    shortcutSeventhItemCardBody.className = "card-body text-center";
    shortcutSeventhItemCard.appendChild(shortcutSeventhItemCardBody);

    var shortcutSeventhItemCardBodyIcon = document.createElement('i');
    shortcutSeventhItemCardBodyIcon.className = "fa fa-car text-dark";
    shortcutSeventhItemCardBody.appendChild(shortcutSeventhItemCardBodyIcon);

    var shortcutSeventhItemCardBodyH6 = document.createElement('h6');
    shortcutSeventhItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    shortcutSeventhItemCardBodyH6.innerHTML = "هاچبک";
    shortcutSeventhItemCardBodyIcon.appendChild(shortcutSeventhItemCardBodyH6);
}

function ShowPriceContent() {
    var hideContent = document.createElement('a');
    hideContent.href = "#";
    hideContent.className = "text-secondary text-decoration-none bg-white hide-content";
    hideContent.id = "custom-x";

    var hideContentIcon = document.createElement('i');
    hideContentIcon.className = "bi bi-x";

    hideContent.appendChild(hideContentIcon);
    document.getElementById("showcase-price-div").appendChild(hideContent);

    hideContent.onclick = function() { ShowCase(hideContent) };

    var priceContainer = document.createElement('div');
    priceContainer.className = "container";
    priceContainer.id = "showcase-price-content";
    document.getElementById("contentarea").appendChild(priceContainer);

    var priceRow = document.createElement('div');
    priceRow.className = "row g-4";
    priceContainer.appendChild(priceRow);

    var priceH5 = document.createElement('h5');
    priceH5.className = "mb-5 text-secondary";
    priceH5.innerHTML = "از قیمت های زیر انتخاب کنید:"
    priceRow.appendChild(priceH5);



    var priceFirstItem = document.createElement('div');
    priceFirstItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceFirstItem);

    var priceFirstItemA = document.createElement('a');
    priceFirstItemA.href = "#";
    priceFirstItem.appendChild(priceFirstItemA);

    var priceFirstItemCard = document.createElement('div');
    priceFirstItemCard.className = "card bg-ligh";
    priceFirstItemA.appendChild(priceFirstItemCard);

    var priceFirstItemCardBody = document.createElement('div');
    priceFirstItemCardBody.className = "card-body text-center";
    priceFirstItemCard.appendChild(priceFirstItemCardBody);

    var priceFirstItemCardBodyIcon = document.createElement('i');
    priceFirstItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceFirstItemCardBody.appendChild(priceFirstItemCardBodyIcon);

    var priceFirstItemCardBodyH6 = document.createElement('h6');
    priceFirstItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceFirstItemCardBodyH6.innerHTML = "10 تا 50 میلیون";
    priceFirstItemCardBodyIcon.appendChild(priceFirstItemCardBodyH6);


    var priceSecondItem = document.createElement('div');
    priceSecondItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceSecondItem);

    var priceSecondItemA = document.createElement('a');
    priceSecondItemA.href = "#";
    priceSecondItem.appendChild(priceSecondItemA);

    var priceSecondItemCard = document.createElement('div');
    priceSecondItemCard.className = "card bg-ligh";
    priceSecondItemA.appendChild(priceSecondItemCard);

    var priceSecondItemCardBody = document.createElement('div');
    priceSecondItemCardBody.className = "card-body text-center";
    priceSecondItemCard.appendChild(priceSecondItemCardBody);

    var priceSecondItemCardBodyIcon = document.createElement('i');
    priceSecondItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceSecondItemCardBody.appendChild(priceSecondItemCardBodyIcon);

    var priceSecondItemCardBodyH6 = document.createElement('h6');
    priceSecondItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceSecondItemCardBodyH6.innerHTML = "50 تا 70 میلیون";
    priceSecondItemCardBodyIcon.appendChild(priceSecondItemCardBodyH6);


    var priceThirdItem = document.createElement('div');
    priceThirdItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceThirdItem);

    var priceThirdItemA = document.createElement('a');
    priceThirdItemA.href = "#";
    priceThirdItem.appendChild(priceThirdItemA);

    var priceThirdItemCard = document.createElement('div');
    priceThirdItemCard.className = "card bg-ligh";
    priceThirdItemA.appendChild(priceThirdItemCard);

    var priceThirdItemCardBody = document.createElement('div');
    priceThirdItemCardBody.className = "card-body text-center";
    priceThirdItemCard.appendChild(priceThirdItemCardBody);

    var priceThirdItemCardBodyIcon = document.createElement('i');
    priceThirdItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceThirdItemCardBody.appendChild(priceThirdItemCardBodyIcon);

    var priceThirdItemCardBodyH6 = document.createElement('h6');
    priceThirdItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceThirdItemCardBodyH6.innerHTML = "70 تا 100 میلیون";
    priceThirdItemCardBodyIcon.appendChild(priceThirdItemCardBodyH6);


    var priceForthItem = document.createElement('div');
    priceForthItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceForthItem);

    var priceForthItemA = document.createElement('a');
    priceForthItemA.href = "#";
    priceForthItem.appendChild(priceForthItemA);

    var priceForthItemCard = document.createElement('div');
    priceForthItemCard.className = "card bg-ligh";
    priceForthItemA.appendChild(priceForthItemCard);

    var priceForthItemCardBody = document.createElement('div');
    priceForthItemCardBody.className = "card-body text-center";
    priceForthItemCard.appendChild(priceForthItemCardBody);

    var priceForthItemCardBodyIcon = document.createElement('i');
    priceForthItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceForthItemCardBody.appendChild(priceForthItemCardBodyIcon);

    var priceForthItemCardBodyH6 = document.createElement('h6');
    priceForthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceForthItemCardBodyH6.innerHTML = "100 تا 130 میلیون";
    priceForthItemCardBodyIcon.appendChild(priceForthItemCardBodyH6);


    var priceFifthItem = document.createElement('div');
    priceFifthItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceFifthItem);

    var priceFifthItemA = document.createElement('a');
    priceFifthItemA.href = "#";
    priceFifthItem.appendChild(priceFifthItemA);

    var priceFifthItemCard = document.createElement('div');
    priceFifthItemCard.className = "card bg-ligh";
    priceFifthItemA.appendChild(priceFifthItemCard);

    var priceFifthItemCardBody = document.createElement('div');
    priceFifthItemCardBody.className = "card-body text-center";
    priceFifthItemCard.appendChild(priceFifthItemCardBody);

    var priceFifthItemCardBodyIcon = document.createElement('i');
    priceFifthItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceFifthItemCardBody.appendChild(priceFifthItemCardBodyIcon);

    var priceFifthItemCardBodyH6 = document.createElement('h6');
    priceFifthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceFifthItemCardBodyH6.innerHTML = "130 تا 150 میلیون";
    priceFifthItemCardBodyIcon.appendChild(priceFifthItemCardBodyH6);


    var priceSixthItem = document.createElement('div');
    priceSixthItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceSixthItem);

    var priceSixthItemA = document.createElement('a');
    priceSixthItemA.href = "#";
    priceSixthItem.appendChild(priceSixthItemA);

    var priceSixthItemCard = document.createElement('div');
    priceSixthItemCard.className = "card bg-ligh";
    priceSixthItemA.appendChild(priceSixthItemCard);

    var priceSixthItemCardBody = document.createElement('div');
    priceSixthItemCardBody.className = "card-body text-center";
    priceSixthItemCard.appendChild(priceSixthItemCardBody);

    var priceSixthItemCardBodyIcon = document.createElement('i');
    priceSixthItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceSixthItemCardBody.appendChild(priceSixthItemCardBodyIcon);

    var priceSixthItemCardBodyH6 = document.createElement('h6');
    priceSixthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceSixthItemCardBodyH6.innerHTML = "150 تا 200 میلیون";
    priceSixthItemCardBodyIcon.appendChild(priceSixthItemCardBodyH6);


    var priceSeventhItem = document.createElement('div');
    priceSeventhItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceSeventhItem);

    var priceSeventhItemA = document.createElement('a');
    priceSeventhItemA.href = "#";
    priceSeventhItem.appendChild(priceSeventhItemA);

    var priceSeventhItemCard = document.createElement('div');
    priceSeventhItemCard.className = "card bg-ligh";
    priceSeventhItemA.appendChild(priceSeventhItemCard);

    var priceSeventhItemCardBody = document.createElement('div');
    priceSeventhItemCardBody.className = "card-body text-center";
    priceSeventhItemCard.appendChild(priceSeventhItemCardBody);

    var priceSeventhItemCardBodyIcon = document.createElement('i');
    priceSeventhItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceSeventhItemCardBody.appendChild(priceSeventhItemCardBodyIcon);

    var priceSeventhItemCardBodyH6 = document.createElement('h6');
    priceSeventhItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceSeventhItemCardBodyH6.innerHTML = "200 تا 250 میلیون";
    priceSeventhItemCardBodyIcon.appendChild(priceSeventhItemCardBodyH6);


    var priceEighthItem = document.createElement('div');
    priceEighthItem.className = "col-md-4 col-lg-3";
    priceRow.appendChild(priceEighthItem);

    var priceEighthItemA = document.createElement('a');
    priceEighthItemA.href = "#";
    priceEighthItem.appendChild(priceEighthItemA);

    var priceEighthItemCard = document.createElement('div');
    priceEighthItemCard.className = "card bg-ligh";
    priceEighthItemA.appendChild(priceEighthItemCard);

    var priceEighthItemCardBody = document.createElement('div');
    priceEighthItemCardBody.className = "card-body text-center";
    priceEighthItemCard.appendChild(priceEighthItemCardBody);

    var priceEighthItemCardBodyIcon = document.createElement('i');
    priceEighthItemCardBodyIcon.className = "fa fa-wallet text-dark";
    priceEighthItemCardBody.appendChild(priceEighthItemCardBodyIcon);

    var priceEighthItemCardBodyH6 = document.createElement('h6');
    priceEighthItemCardBodyH6.className = "card-title mb-1 text-dark mt-2";
    priceEighthItemCardBodyH6.innerHTML = "...";
    priceEighthItemCardBodyIcon.appendChild(priceEighthItemCardBodyH6);
}

function ShowMainImage() {
    console.log("in ShowMainImage")
    var showcaseImage = document.createElement('img');
    showcaseImage.src = "image/showcase.png";
    showcaseImage.className = "img-fluid d-none d-md-block";

    document.getElementById("contentarea").appendChild(showcaseImage);
}