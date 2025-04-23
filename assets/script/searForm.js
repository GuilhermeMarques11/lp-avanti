function searchResult() {
  const searchSubmit = document.getElementById('search-form__submit');

  function handleClick() {
    const searchInput = document.getElementById('search-input');
    const searchResultMessage = document.querySelector(
      '.search-result__message',
    );
    const searchResult = document.getElementById('search-result');
    searchResultMessage.style.display = 'block';
    searchResult.innerHTML = searchInput.value;
    searchInput.value = '';
  }
  searchSubmit.addEventListener('click', handleClick);
}

searchResult();
