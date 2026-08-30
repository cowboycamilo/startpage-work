//  ┬┌─┌─┐┬ ┬┌┐ ┌─┐┌─┐┬─┐┌┬┐  ┬┌─┐
//  ├┴┐├┤ └┬┘├┴┐│ │├─┤├┬┘ ││  │└─┐
//  ┴ ┴└─┘ ┴ └─┘└─┘┴ ┴┴└──┴┘└─┘└─┘
// Vim-style keyboard navigation: j/k/h/l, Enter, / for search, Escape

let currentFocusType = (CONFIG && CONFIG.bentoLayout === 'buttons') ? 'buttons' : 'lists';
let currentSectionIndex = 0; // index of column/list
let currentItemIndex = 0; // index of item inside list/button-bar

const updateFocus = () => {
    // Remove existing focus
    document.querySelectorAll('.focused').forEach(el => el.classList.remove('focused'));

    let target = null;

    if (currentFocusType === 'buttons') {
        const container = document.getElementById(`buttons_${currentSectionIndex + 1}`) || document.querySelector('.buttonsContainer');
        if (container && container.children.length > 0) {
            currentItemIndex = Math.max(0, Math.min(currentItemIndex, container.children.length - 1));
            target = container.children[currentItemIndex];
        } else {
            // If no buttons exist in this layout, switch to lists
            currentFocusType = 'lists';
            currentSectionIndex = 0;
            currentItemIndex = 0;
        }
    }

    if (currentFocusType === 'lists') {
        const allLists = document.querySelectorAll('.list');
        if (allLists.length > 0) {
            currentSectionIndex = Math.max(0, Math.min(currentSectionIndex, allLists.length - 1));
            const currentList = allLists[currentSectionIndex];
            const items = currentList.querySelectorAll('.listItem');
            if (items.length > 0) {
                currentItemIndex = Math.max(0, Math.min(currentItemIndex, items.length - 1));
                target = items[currentItemIndex];

                // Auto-scroll inside list container if needed
                if (target) {
                    const containerRect = currentList.getBoundingClientRect();
                    const itemRect = target.getBoundingClientRect();
                    if (itemRect.bottom > containerRect.bottom) {
                        currentList.scrollTop += (itemRect.bottom - containerRect.bottom) + 12;
                    } else if (itemRect.top < containerRect.top) {
                        currentList.scrollTop -= (containerRect.top - itemRect.top) + 12;
                    }
                }
            }
        }
    }

    if (target) {
        target.classList.add('focused');
        target.focus();
    }
};

document.addEventListener('keydown', (e) => {
    // If user is currently typing in the search bar
    const searchInput = document.getElementById('searchInput');
    if (document.activeElement === searchInput) {
        if (e.key === 'Escape') {
            searchInput.blur();
            const searchResults = document.getElementById('searchResults');
            if (searchResults) searchResults.style.display = 'none';
            updateFocus();
        }
        return;
    }

    // Ignore if typing in another input or holding modifier keys (like Cmd/Ctrl/Alt)
    if (e.metaKey || e.altKey || (e.ctrlKey && e.key.toLowerCase() !== 't')) {
        return;
    }

    const allLists = document.querySelectorAll('.list');
    const numLists = allLists.length;
    const buttonsContainers = document.querySelectorAll('.buttonsContainer');

    switch (e.key) {
        case 'j':
        case 'ArrowDown':
            e.preventDefault();
            if (currentFocusType === 'buttons') {
                if (numLists > 0) {
                    currentFocusType = 'lists';
                    currentSectionIndex = 0;
                    currentItemIndex = 0;
                }
            } else if (numLists > 0) {
                const items = allLists[currentSectionIndex].querySelectorAll('.listItem');
                if (currentItemIndex < items.length - 1) {
                    currentItemIndex++;
                }
            }
            updateFocus();
            break;

        case 'k':
        case 'ArrowUp':
            e.preventDefault();
            if (currentFocusType === 'lists') {
                if (currentItemIndex > 0) {
                    currentItemIndex--;
                } else if (buttonsContainers.length > 0) {
                    currentFocusType = 'buttons';
                    currentSectionIndex = 0;
                    currentItemIndex = 0;
                }
            }
            updateFocus();
            break;

        case 'l':
        case 'ArrowRight':
            e.preventDefault();
            if (currentFocusType === 'buttons') {
                const container = document.getElementById(`buttons_${currentSectionIndex + 1}`);
                if (container && currentItemIndex < container.children.length - 1) {
                    currentItemIndex++;
                } else if (currentSectionIndex === 0 && document.getElementById('buttons_2')) {
                    currentSectionIndex = 1;
                    currentItemIndex = 0;
                }
            } else if (numLists > 0) {
                if (currentSectionIndex < numLists - 1) {
                    currentSectionIndex++;
                    const nextItems = allLists[currentSectionIndex].querySelectorAll('.listItem');
                    currentItemIndex = Math.min(currentItemIndex, nextItems.length - 1);
                }
            }
            updateFocus();
            break;

        case 'h':
        case 'ArrowLeft':
            e.preventDefault();
            if (currentFocusType === 'buttons') {
                if (currentItemIndex > 0) {
                    currentItemIndex--;
                } else if (currentSectionIndex === 1) {
                    currentSectionIndex = 0;
                    const b1 = document.getElementById('buttons_1');
                    currentItemIndex = b1 ? b1.children.length - 1 : 0;
                }
            } else if (numLists > 0) {
                if (currentSectionIndex > 0) {
                    currentSectionIndex--;
                    const prevItems = allLists[currentSectionIndex].querySelectorAll('.listItem');
                    currentItemIndex = Math.min(currentItemIndex, prevItems.length - 1);
                }
            }
            updateFocus();
            break;

        case 'Enter':
        case ' ':
            e.preventDefault();
            const focused = document.querySelector('.focused');
            if (focused) {
                focused.click();
            }
            break;

        case '/':
            e.preventDefault();
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            break;

        case 'Escape':
            document.querySelectorAll('.focused').forEach(el => el.classList.remove('focused'));
            if (searchInput) {
                searchInput.blur();
                const searchResults = document.getElementById('searchResults');
                if (searchResults) searchResults.style.display = 'none';
            }
            break;
    }
});

// Set initial focus after layout completes rendering
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateFocus, 300);
});
setTimeout(updateFocus, 500);
