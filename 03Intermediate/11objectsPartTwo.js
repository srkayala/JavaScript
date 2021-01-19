var user = {
    firstName : "Srinivasa", 
    lastName : "Kayala",
    role : "Developer",
    loginCount : 32,
    facebookSignedIn : true,
    githubSignedIn : true,
    googleSignedIn : false,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
};

console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
user.buyCourse("Angular JS Course");
user.buyCourse("Vue JS Course");
console.log(user.getCourseCount());
console.log(user.courseList);

