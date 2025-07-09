let userInput;
do {
  userInput = prompt("Please enter a number:");
  console.log("Type of input:", typeof userInput); // Shows the type (string)
  userInput = Number(userInput); // Convert to number
} while (userInput < 10);

console.log("You entered:", userInput, "which is 10 or greater!");

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

// 1. Console.log the number of floors in the building.
console.log("Number of floors:", building.numberOfFloors);

// 2. Console.log how many apartments are on the floors 1 and 3.
console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);

// 3. Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log("Second tenant:", secondTenant, "Rooms:", secondTenantRooms);

// 4. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent increased to:", building.numberOfRoomsAndRent.dan[1]);
} else {
    console.log("Dan's rent remains:", danRent);
}
