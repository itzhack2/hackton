const volunteerPlaces = [
    {
      location: "Tel Aviv",
      day: "Monday",
    },
    {
      location: "Jerusalem",
      day: "Tuesday",
    },
    {
      location: "bet shemsh",
      day: "Wednesday",
    },
    {
        location: "Jerusalem",
        day: "Thursday",
      },
      {
        location: "bet shemsh",
        day: "Friday",
      },
      {
        location: "bet shemsh",
        day: "Saturday",
      },
  ];
  
  let newElement = `<ul> `;
  for (let i = 0; i < volunteerPlaces.length; i++) {
    const place = volunteerPlaces[i];
    newElement += `
  <li>
  ${place.location} - ${place.day}
  </li>
    `;
  }
  newElement += "</ul>"
  document.getElementById("list_services").innerHTML += newElement;









// topics of Variables, Arrays, Objects, Conditionals, Loops ,Functions and DOM