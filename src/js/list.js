// Simple editable list functionality
document.addEventListener('DOMContentLoaded', () => {
    const listEditor = document.createElement('textarea');
    listEditor.placeholder = 'Type here to edit the list...';
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';

    const listDisplay = document.createElement('div');
    listDisplay.id = 'list-display';

    document.getElementById('list-container').appendChild(listEditor);
    document.getElementById('list-container').appendChild(saveButton);
    document.getElementById('list-container').appendChild(listDisplay);

    saveButton.addEventListener('click', () => {
        const content = listEditor.value.trim();
        if (content) {
            listDisplay.innerHTML = content.replace(/\n/g, '<br>');
        }
    });
});
