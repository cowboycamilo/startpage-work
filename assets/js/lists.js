// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateListHtml = (list) => {
    let linksHtml = '';
    for (const link of list.links) {
        if (link.name && link.link) {
            linksHtml += `
          <a
            target="${CONFIG.openInNewTab ? '_blank' : ''}"
            href="${link.link}"
            class="listItem"
          >${link.name}</a>
        `;
        }
    }

    return `
        <div class="listWrapper">
          <div class="listHeader">
            <i class="listIcon" icon-name="${list.icon}"></i>
          </div>
          <div class="card list list__${list.id}" id="list_${list.id}">
            ${linksHtml}
          </div>
        </div>
      `;
};

const generateFirstListsContainer = () => {
    for (const list of CONFIG.firstlistsContainer) {
        const item = generateListHtml(list);
        lists_1.insertAdjacentHTML('beforeend', item);
    }
};

const generateSecondListsContainer = () => {
    for (const list of CONFIG.secondListsContainer) {
        const item = generateListHtml(list);
        lists_2.insertAdjacentHTML('beforeend', item);
    }
};

const generateLists = () => {
    switch (CONFIG.bentoLayout) {
        case 'bento':
            generateFirstListsContainer();
            break;
        case 'lists':
            generateFirstListsContainer();
            generateSecondListsContainer();
            break;
        default:
            break;
    }
};

generateLists();
