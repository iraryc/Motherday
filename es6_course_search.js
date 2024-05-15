"use strict"

let courses = [ 
    { 
        CourseId: "PROG100", 
        Title: "Introduction to HTML/CSS/Git", 
        Location: "Classroom 7", 
        StartDate: "09/08/22", 
        Fee: "100.00", 
    }, 
    { 
        CourseId: "PROG200", 
        Title: "Introduction to JavaScript", 
        Location: "Classroom 9", 
        StartDate: "11/22/22", 
        Fee: "350.00", 
    }, 
    { 
        CourseId: "PROG300", 
        Title: "Introduction to Java", 
        Location: "Classroom 1", 
        StartDate: "01/09/23", 
        Fee: "50.00", 
    }, 
    { 
        CourseId: "PROG400", 
        Title: "Introduction to SQL and Databases", 
        Location: "Classroom 7", 
        StartDate: "03/16/23", 
        Fee: "50.00", 
    }, 
    {  
        CourseId: "PROJ500", 
        Title: "Introduction to Angular", 
        Location: "Classroom 1", 
        StartDate: "04/25/23", 
        Fee: "50.00", 
    } 
]; 

//When does the PROG200 course start?

// Use find() to get the course with CourseId "PROG200"
let course = courses.find(course => course.CourseId === "PROG200");

// Check if the course was found
if (course) {
    console.log(`The PROG200 course starts on ${course.StartDate}.`);
} else {
    console.log("The PROG200 course was not found.");
}

//What is the title of the PROJ500 course? 
//use the find function
let titlecourse = courses.find(titlecourse => titlecourse.CourseId === "PROJ500");

//console.log and check for the course using a if else statement 
if(titlecourse){
    console.log(`The title of the course is ${titlecourse.Title}.`);
} else{
    console.log(`The PROJ500 course was not found`);
}

//What are the titles of the courses that cost $50 or less? 
// Use filter() to get courses that cost $50 or less
let affordableCourses = courses.filter(course => parseFloat(course.Fee) <= 50);

// Extract the titles of the filtered courses and use map
let affordableCourseTitles = affordableCourses.map(course => course.Title);

// Log the titles
console.log(`Courses that cost $50 or less: ${affordableCourseTitles}`);


//  What  classes meet in "Classroom 1"? 
//using a filter option 
let locationCourse = courses.filter(course => course.Location === "Classroom 1")

//extract the title
let locationCourseTitle = locationCourse.map(course => course.Title);

//console.log the title
console.log(`Courses that meet in classroom 1 are ${locationCourseTitle}`);
