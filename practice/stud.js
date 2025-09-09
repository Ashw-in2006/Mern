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







//let arr=[1,2,3,4,5,6];
//filtered = arr.filter(val => val>2);
//console.log(filtered);


   let marks = [
    {
        semester:1,
        subjects: {
            name: ["Maths", "Physics", "Chemistry", "English", "Computer Science"],
            mark: [85, 78, 88, 90, 95],
            arrear: ["no", "no", "no", "no", "no"],
        },
    },
        {
            semester:2,
        subjects:{
            
            sub: "compiler design",
            mark: 98,
            ifarrear: false,
        },
    }   
    
];
let firstSem = marks.filter((val)=>val.semester ==1)
console.log(firstSem);


let attendence =[{
    date:"2023-01-01",
    is_present:true,
}]
console.log(attendence);        //attendence object called

let fees =[{
    semester1:"5000000",
    bus_fee:"20000",
    hostel_fee:"30000",
    book_fee:"10000",
    exam_fee:"5000",
    arrear_exam_fee:"0",
}]
console.log(fees);     //fees object called




