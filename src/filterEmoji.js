import emojiList from './emojiList.json';

export default function filterEmoji(searchText, maxResults) {
  // Create an array called 'emoji' inserting every object from the json file
  return emojiList.filter((emoji) => {
    // If users search 'query' matches the emojis title
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    // If users search 'query' matches the emojis keywords
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
    // Return an array copy of all items that match the users search 'query'
  }).slice(0, maxResults);
}
