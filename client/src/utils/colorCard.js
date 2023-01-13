const BackgroundColor = (pokemon) => {
  if (pokemon?.types?.[0].type.name === "normal") {
    return "#E7E7E7";
  } else if (pokemon?.types?.[0].type.name === "fighting") {
    return "#07B1B1";
  } else if (pokemon?.types?.[0].type.name === "flying") {
    return "#A07E00";
  } else if (pokemon?.types?.[0].type.name === "poison") {
    return "#00C126";
  } else if (pokemon?.types?.[0].type.name === "ground") {
    return "#7A520C";
  } else if (pokemon?.types?.[0].type.name === "rock") {
    return "#382607";
  } else if (pokemon?.types?.[0].type.name === "ghost") {
    return "#3C0058";
  } else if (pokemon?.types?.[0].type.name === "steel") {
    return "#B8B6B9";
  } else if (pokemon?.types?.[0].type.name === "fire") {
    return "#FD8080";
  } else if (pokemon?.types?.[0].type.name === "water") {
    return "#80CCFD";
  } else if (pokemon?.types?.[0].type.name === "grass") {
    return "#B1FD80";
  } else if (pokemon?.types?.[0].type.name === "electric") {
    return "#FBE035";
  } else if (pokemon?.types?.[0].type.name === "psychic") {
    return "#CCD3F7";
  } else if (pokemon?.types?.[0].type.name === "ice") {
    return "#B1FD80";
  } else if (pokemon?.types?.[0].type.name === "dragon") {
    return "#FFAE00";
  } else if (pokemon?.types?.[0].type.name === "dark") {
    return "#000000";
  } else if (pokemon?.types?.[0].type.name === "fairy") {
    return "#F6F6F6";
  } else if (pokemon?.types?.[0].type.name === "shadow") {
    return "#A9A5A5";
  } else {
    return "#C7C9D3";
  }
};

export default BackgroundColor;
