let currentFocusType = 'buttons'; // 'buttons' or 'lists'
let currentSectionIndex = 0; // index of container
let currentItemIndex = 0; // index of link/button

const updateFocus = () => {
    document.querySelectorAll('.focused').forEach(el => el.classList.remove('focused'));

    let target;
    if (currentFocusType === 'buttons') {
        const container = document.getElementById(`buttons_${currentSectionIndex + 1}`);
        if (container) {
            target = container.children[currentItemIndex];
        }
    } else {
        const allLists = document.querySelectorAll('.list');
        const currentList = allLists[currentSectionIndex];
        if (currentList) {
            const items = currentList.querySelectorAll('.listItem');
            target = items[currentItemIndex];
            
            // Auto-scroll
            if (target) {
                const containerRect = currentList.getBoundingClientRect();
                const itemRect = target.getBoundingClientRect();
                if (itemRect.bottom > containerRect.bottom) {
                    currentList.scrollTop += (itemRect.bottom - containerRect.bottom) + 10;
                } else if (itemRect.top < containerRect.top) {
                    currentList.scrollTop -= (containerRect.top - itemRect.top) + 10;
                }
            }
        }
    }

    if (target) {
        target.classList.add('focused');
    }
};

document.addEventListener('keydown', (e) => {
    if (document.activeElement.id === 'searchInput') {
        if (e.key === 'Escape') {
            document.activeElement.blur();
            updateFocus();
        }
        return;
    }

    if (e.key === '/') return;

    const allLists = document.querySelectorAll('.list');
    const numLists = allLists.length;

    switch (e.key) {
        case 'j':
            if (currentFocusType === 'buttons') {
                currentFocusType = 'lists';
                currentSectionIndex = 0;
                currentItemIndex = 0;
            } else {
                const items = allLists[currentSectionIndex].querySelectorAll('.listItem');
                if (currentItemIndex < items.length - 1) currentItemIndex++;
            }
            break;
        case 'k':
            if (currentFocusType === 'lists') {
                if (currentItemIndex > 0) {
                    currentItemIndex--;
                } else {
                    currentFocusType = 'buttons';
                    currentSectionIndex = 0;
                    currentItemIndex = 0;
                }
            }
            break;
        case 'l':
            if (currentFocusType === 'buttons') {
                const container = document.getElementById(`buttons_${currentSectionIndex + 1}`);
                if (currentItemIndex < container.children.length - 1) {
                    currentItemIndex++;
                } else if (currentSectionIndex === 0) {
                    currentSectionIndex = 1;
                    currentItemIndex = 0;
                }
            } else {
                if (currentSectionIndex < numLists - 1) {
                    currentSectionIndex++;
                    const nextItems = allLists[currentSectionIndex].querySelectorAll('.listItem');
                    currentItemIndex = Math.min(currentItemIndex, nextItems.length - 1);
                }
            }
            break;
        case 'h':
            if (currentFocusType === 'buttons') {
                if (currentItemIndex > 0) {
                    currentItemIndex--;
                } else if (currentSectionIndex === 1) {
                    currentSectionIndex = 0;
                    currentItemIndex = document.getElementById('buttons_1').children.length - 1;
                }
            } else {
                if (currentSectionIndex > 0) {
                    currentSectionIndex--;
                    const prevItems = allLists[currentSectionIndex].querySelectorAll('.listItem');
                    currentItemIndex = Math.min(currentItemIndex, prevItems.length - 1);
                }
            }
            break;
        case 'Enter':
            const focused = document.querySelector('.focused');
            if (focused) focused.click();
            break;
    }

    updateFocus();
});

setTimeout(updateFocus, 500);
