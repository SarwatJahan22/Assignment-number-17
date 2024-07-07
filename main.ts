//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.

// //initial list of guests
let guests: string[] = [];  ["Maria", "Zara", "Faryal", "Hira" , "Ayesha"];

// informing that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinnner.");

//Removing guest until only two name remain

while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log (`Sorry, ${removedGuest}, you are no longer invited to dinner.`);

}


//printing invitation to the remaining two guests

guests.forEach((guests)); void {
    console.log(`Dear ${guests},you're sitll invited to dinner.`),
};


//Remove the last two names from your list, 
guests.pop();
guests.pop();

//printing the final list to confirm its empty
console.log("Final guest list:", guests);



