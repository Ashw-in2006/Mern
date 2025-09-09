console.log("Student management system");

let personalDetails = {          // object for personal details
    name: "John Deo",
    reg_number: " 123456",
    depart: "CSE",
    parentsDetails: {            // nested object for parents details
        mother: {
            mothername: "Jane Deo",
            motherno: "9876543210",
            mother_occu: "teacher",
        },
        father: {
            father_name: "Jack Deo",
            mobno: "9876543210",
            father_occu: "business",
        }, 
    },
    address: {                   // nested object for address
        door_no: "12-34",
        pincode: "500081",
        street: "MG Road",
        city: "Hyderabad",
        statements: "Near City Park",
    },
    date_of_birth: "01-01-2000",
    mobile_no: "9876543210",
}

console.log(personalDetails.parentsDetails.mother.mothername);

