const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  console.log("Number of floors:", building.numberOfFloors);
  
  const floor1 = building.numberOfAptByFloor.firstFloor;
  const floor3 = building.numberOfAptByFloor.thirdFloor;
  console.log("Apartments on 1st and 3rd floor:", floor1 + floor3);
  
  const secondTenant = building.nameOfTenants[1]; 
  const roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0]; 
  console.log(`Second tenant: ${secondTenant}, Rooms: ${roomsOfSecondTenant}`);
  
  const rentSarah = building.numberOfRoomsAndRent.sarah[1];
  const rentDavid = building.numberOfRoomsAndRent.david[1];
  const rentDan = building.numberOfRoomsAndRent.dan[1];
  
  if (rentSarah + rentDavid > rentDan) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
  } else {
    console.log("No change in Dan's rent.");
  }
  