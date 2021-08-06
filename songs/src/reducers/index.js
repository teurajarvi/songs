const songsReducer = () => {
  return [
    { title: "Tequila", duration: "3:57" },
    { title: "Suomi", duration: "3:25" },
    { title: "Gran Canaria", duration: "3:01" },
    { title: "Touch Me", duration: "3:42" },
    { title: "Hetki Lyö", duration: "3:37" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
