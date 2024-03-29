const API_URL = "https://legato.flinnapps.com/api/auth/";

class AuthService{
        async login(email, password) {
            console.log(email, password, API_URL)
        //login with email and password. set jwt sign in localStorage.
        try {
            var requestoptions={
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email:email,
                    password:password
                }),
                redirect:'manual'
            }
            console.log(requestoptions);

        var response = await fetch(API_URL + "signin", requestoptions);

             const json = await response.json();
             console.log(json);

            return json
          } catch (error) {
            console.log(error);
          }
       

    }
    async newMainGoal(id, goal, ){
        var requestoptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:id,
                goal:goal
            }),
            redirect:'manual'
        }
        await fetch(API_URL + "newMainGoal", requestoptions);
    }
    async goalStatusChange(id, checked, goal, main, complete, level, sp, starpointsGoal, pass, npass) {
        //add homework for student. Homework appears on students page.
        //console.log(name, email, password);
        //binding parameters.
        var requestoptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:id,
            checked:checked,
            goal:goal,
            main:main,
            complete:complete,
            level:level, sp:sp, starpointsGoal:starpointsGoal, pass:pass, npass:npass
            }),
            redirect:'manual'
        }
        await fetch(API_URL + "goalStatusChange", requestoptions);
    }
    async syncedchecking(student, day, checked, checkedd, daysPracticed, level, sp, starpointsGoal, pass, daystreak,npass ) {
        // console.log(student, day, checked, checkedd, daysPracticed, level, sp, starpointsGoal, pass, daystreak,npass);
        var requestoptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                student:student, day:day, checked:checked, checkedd: checkedd,
                 daysPracticed: daysPracticed, level:level, sp:sp, starpointsGoal:starpointsGoal, pass:pass, daystreak: daystreak,npass:npass
            }),
            redirect:'manual'
        }
        // console.log(requestoptions);
        await fetch(API_URL + "syncedchecking", requestoptions);

            //  const json = await response.json();
            //  console.log(json);

            // return json
         
          }
        // return axios
        //     .post(API_URL + "syncedchecking", {
        //         student, day, checked, checkedd, daysPracticed, level, sp, starpointsGoal, pass, daystreak, npass
        //     });
    // }
}
export default new AuthService()
// import axios from "axios";
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// const API_URL = "https://legato.flinnapps.com/api/auth/";
// //const API_URL = "http://localhost:8080/api/auth/";
// //be sure to upload axios. This is my controller for everything that I do for the backend.
// class AuthService {
//     login(email, password) {
//         //login with email and password. set jwt sign in localStorage.


//         return axios
//             .post(API_URL + "signin", {
//                 email,
//                 password
//             })
//             .then(response => {
//                 console.log(response.data);
//                 if (response.data.accessToken) {
//                     localStorage.setItem("user", JSON.stringify(response.data));
//                 }
//                 //console.log(response.data);
//                 return response.data;
//             });

//     }
//     setPastFirstTime(id, studentid, password) {
//         console.log(studentid);
//         //for first time students changing password.
//         return axios.post(API_URL + "past", {
//             id,
//             studentid,
//             password,
//         });
//     }

//     logout() {
//         //delete jwt sign.
//         localStorage.removeItem("user");
//     }
//     syncedchecking(student, day, checked, checkedd, daysPracticed, level, sp, starpointsGoal, pass, daystreak,npass ) {
//         console.log("then here");
//         return axios
//             .post(API_URL + "syncedchecking", {
//                 student, day, checked, checkedd, daysPracticed, level, sp, starpointsGoal, pass, daystreak, npass
//             });
//     }
//     hwsyncedchecking(student, day, checked, checkedd, homework, syncedhw) {
//         console.log("then here");
//         return axios
//             .post(API_URL + "hwsyncedchecking", {
//                 student, day, checked, checkedd, homework, syncedhw
//             });
//     }


//     addStudent(user, first, last, email, double, separate, time, checkbox, day) {
//         //add student to the database using axios.
//         //console.log(user);
//         //console.log(email, password);

//         return axios
//             .post(API_URL + "student", {
//                 user, first, last, email, double, separate, time, checkbox, day
//             });

//     }
//     deleteStudent(student, email) {
//         console.log(student);
//         return axios
//             .post(API_URL + "deleteStudent", {
//                 student, email,
//             })






//     }
//     changeweek(id, time, level, sp, starpointsGoal, pass, timeTotal, totalWeekTime) {
//         return axios
//             .post(API_URL + "changeweek", {
//                 id, time, level, sp, starpointsGoal, pass, timeTotal, totalWeekTime


//             })
//     }
//     hwchangeweek(id, time) {
//         return axios
//             .post(API_URL + "hwchangeweek", {
//                 id, time,


//             })
//     }
//     cleartimepracticed(id){
//         console.log("here")
//         return axios
//         .post(API_URL + "cleartimepracticed", {
//             id


//         })
//     }
//     cleartotaldays(id){
//         console.log("hereio")
//         return axios
//         .post(API_URL + "cleartotaldays", {
//             id


//         })
//     }
//     editAlltheHomeworkdiaClose(id, yesnoCheckboxsync, yesnoStreak, yesnocheckboxes, edityesnoWeek, yesnoWeektext, yesnoDay, yesnoDaytext) {
//         return axios
//             .post(API_URL + "editAlltheHomeworkdiaClose", {
//                 id, yesnoCheckboxsync, yesnoStreak, yesnocheckboxes, edityesnoWeek, yesnoWeektext, yesnoDay, yesnoDaytext


//             })
//     }
//     changetimes(id, day, time, level, sp, starpointsGoal, pass, daystreak, timeTotal, npass) {
//         return axios
//             .post(API_URL + "changetimes", {
//                 id, day, time, level, sp, starpointsGoal, pass, daystreak, timeTotal, npass
                

//             })
//     }
//     hwchangetimes
//         (id, day, time, syncedhw) {
//         return axios
//             .post(API_URL + "hwchangetimes", {
//                 id, day, time, syncedhw


//             })
//     }
//     editAlltheHomework(id, student,) {
//         return axios
//             .post(API_URL + "deletenote", {
//                 id, student,
                

//             })
//     }
//     deletenote(student, id) {
//         return axios
//             .post(API_URL + "deletenote", {
//                 student,
//                 id,

//             })
//     }
//     deleteNotes(id, notes) {
//         return axios
//             .post(API_URL + "deleteNotes", {
//                 id,
//                 notes

//             })
//     }
//     changenote(id, note,) {
//         return axios
//             .post(API_URL + "changenote", {
//                 id,
//                 note,

//             })
//     }
//     timeSync(id, timeSync, min, daybiao, dmin) {
//         return axios
//             .post(API_URL + "timeSync", {
//                 id,
//                 timeSync,
//                 min,
//                 daybiao,
//                 dmin

//             })
//     }
//     hwmessage(id, message, date, role) {
//         return axios
//             .post(API_URL + "hwmessage", {
//                 id, message, date, role

//             })
//     }
//     timeTotal(id, total) {
//         return axios
//             .post(API_URL + "timeTotal", {
//                 id,
//                 total

//             })
//     }
//     dayTotal(id, total) {
//         return axios
//             .post(API_URL + "dayTotal", {
//                 id,
//                 total

//             })
//     }
//     syncCheckboxes(id, checkbox) {
//         return axios
//             .post(API_URL + "syncCheckboxes", {
//                 id,
//                 checkbox,

//             })
//     }

//     changeNotes(id, note, notes) {
//         return axios
//             .post(API_URL + "changeNotes", {
//                 id,
//                 note,
//                 notes

//             })
//     }
//     deletefromarchive(id) {
//         return axios
//             .post(API_URL + "deletefromarchive", {
//                 id,

//             })
//     }
//     addNote(id, description, date) {
//         console.log(id);
//         return axios
//             .post(API_URL + "addNote", {
//                 id,
//                 description,
//                 date,

//             })
//     }
//     checkboxes(id, checkbox) {
//         return axios
//             .post(API_URL + "checkboxes", {
//                 id,
//                 checkbox,

//             })
//     }
//     getAccounts(id,) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "getAccounts", {
//                 id,

//             })





//     }

     
// editalltheProgress(id, temptimegoal, temppracticegoal, totalTime, totalDays, starPoints, tempsmonths, tempemonths, temptsmonths, temptemonths, daysbool, timebool,) {
        

//         return axios
//             .post(API_URL + "editalltheProgress", {
//                 id, temptimegoal, temppracticegoal, totalTime, totalDays, starPoints, tempsmonths, tempemonths, temptsmonths, temptemonths, daysbool, timebool,
//             })





//     }
//     doitAll(
//             /*this is everything for checkboxes*/id, yesnoCheckboxes, syncCheckbox, checkbox,
//             /*this is everything for time*/ yesnoTime, timeSync, weeklytimebiao, dailytimebiao, dmin, timebool, time1,
//         /*this is days practiced*/ daysbool, day1,
//         /*updating time frame practiced for days.*/ days, smonths, emonths, timeframePracticebiao, min, tsmonths, temonths,
//         /*updating streak info and star points (last two)*/ dayStreak, weekStreak, starPoints, manualsetup,
//         /*add the goals, first one is the goals of 0. */ goal, goals, maingoal, maindescription, maindate,
//         /*add the homeworks*/ homeworks,
//         /*done updating new student.*/ done,) {

//     return axios
//         .post(API_URL + "doitAll", {
//              /*this is everything for checkboxes*/id, yesnoCheckboxes, syncCheckbox, checkbox,
//             /*this is everything for time*/ yesnoTime, timeSync, weeklytimebiao, dailytimebiao, dmin, timebool, time1,
//         /*this is days practiced*/ daysbool, day1,
//         /*updating time frame practiced for days.*/ days, smonths, emonths, timeframePracticebiao, min, tsmonths, temonths,
//         /*updating streak info and star points (last two)*/ dayStreak, weekStreak, starPoints, manualsetup,
//         /*add the goals, first one is the goals of 0. */ goal, goals, maingoal, maindescription, maindate,
//         /*add the homeworks*/ homeworks,
//         /*done updating new student.*/ done,

//         })
// }
    
      


//     hwchecked(id, homework, practice, level, sp, starpointsGoal, pass, daystreak) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "hwchecked", {
//                 id,
//                 homework,
//                 practice,
//                 level, sp, starpointsGoal, pass, daystreak
//             })





//     }
//     clearTime(id, ) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "clearTime", {
//                 id,
                

//             })

//     }

//     clearhwTime(id,) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "clearhwTime", {
//                 id,


//             })

//     }
//     clearChecks(id, homework) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "clearChecks", {
//                 id,
//                 homework

//             })

//     }

//     clearhwChecks(id, homework) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "clearhwChecks", {
//                 id,
//                 homework

//             })

//     }
//     cleargoals(id, homework) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "cleargoals", {
//                 id,

//             })

//     }

//     clearhw(id, homework) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "clearhw", {
//                 id,

//             })

//     }
//     cleararchive(id, homework) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "cleararchive", {
//                 id,

//             })

//     }

//     getStudents(user, studentList) {
//         //get all students from the database for that teacher.
//         //console.log(user);

//         return axios
//             .post(API_URL + "getStudents", {
//                 user,
//                 studentList,
//             })





//     }
//     /*
//      *  if (this.state.yesnoCheckboxes) {
//             if (this.state.syncCheckbox) {
//                 AuthService.syncCheckboxes(this.props.state.realtimestudent._id, this.state.checkbox);

//             }
//             else {
//                 AuthService.checkboxes(this.props.state.realtimestudent._id, this.state.checkbox);
//             }
//         }
//         if (this.state.yesnoTime) {

//             AuthService.timeSync(this.props.state.realtimestudent._id, this.state.timeSync, this.state.weeklytimebiao, this.state.dailytimebiao, this.state.dmin);



//         }
//         if (this.state.timebool) {
//             AuthService.timeTotal(this.props.state.realtimestudent._id, "0")

//         }
//         if (this.state.daysbool) {
//             AuthService.dayTotal(this.props.state.realtimestudent._id, "0")

//         }
//         if (this.state.timeframePractice) {
//             AuthService.updateSetDays(this.props.state.realtimestudent._id, this.state.days, this.state.smonths, this.state.emonths, this.state.timeframePracticebiao, this.state.min, this.state.tsmonths, this.state.temonths);

//         }
//     }
//      * 
// //    oneCallThatsAll(id, checkbox, /*synccheck*/// timeSync, weeklytimebiao, dailytimebiao, dmin /*yesnoTme*/) {
//    //     return axios.post(API_URL + "oneCallThatsAll", {
//  //           id,
//   //          main,
//    //         goals,
//   //      })
//    // }
// //} 
//     AddGoals(id, main, goals) {
//         return axios.post(API_URL + "AddGoals", {
//             id,
//             main,
//             goals,
//         })
//     }
//     AddHomeworks(id, homeworks) {
//         return axios.post(API_URL + "AddHomeworks", {
//             id,
//             homeworks,
//         })
//     }
//     doneUpdatingnewStudent(id, done) {
//         return axios.post(API_URL + "doneUpdatingnewStudent", {
//             id,
//             done,
//         })
//     }


   
//     AddHomework(id, homework, type, hwchecked, description, hwcheckboxes, date, hwresearch, day, hwsynccheck, hwdmin, HWweeklytimebiao, hwtimesync, hwlink, struggles, hwQuestions, firstMessage, hwdailytimebiao, hwtimew,) {
//         //add homework for student. Homework appears on students page.
//         //console.log(name, email, password);
//         //binding parameters.
//         return axios.post(API_URL + "homework", {
//             id,
//             homework,
//             type,
//             hwchecked,
//             description,
//             hwcheckboxes,
//             date,
//             hwresearch,
//             day,
//             hwsynccheck, hwdmin, HWweeklytimebiao, hwtimesync, hwlink, struggles, hwQuestions, firstMessage, hwdailytimebiao, hwtimew,
//         });
//         //console.log(response.data);


        
//     }
//     AddGoal(id, mainGoal,goal, description, date, ) {
//         //add homework for student. Homework appears on students page.
//         //console.log(name, email, password);
//         //binding parameters.
//         return axios.post(API_URL + "goals", {
//             id,
//             mainGoal,
//             goal,
           
//             description,
           
//             date,
           
//         });
//         //console.log(response.data);


        
//     }
//     starPoints(id, manual) {
//         return axios.post(API_URL + "starPoints", {
//             id,

//             manual,

//         });
//     }
//     updateSetDays(id, totalDays, monthStart, monthEnd, timebiao, min, tsmonths, temonths) {
//         return axios.post(API_URL + "totalDays", {
//             id,

//             totalDays,
//             monthStart,
//             monthEnd,
//             timebiao,
//             min,
//             tsmonths,
//             temonths

//         });
//     }
//     setDayStreak(id, streak) {
//         return axios.post(API_URL + "setDayStreak", {
//             id,

//             streak,
           

//         });
//     }
//     setWeekStreak(id, streak) {
//         return axios.post(API_URL + "setWeekStreak", {
//             id,

//             streak

//         });
//     }
//     savegoal(id, goal, main) {
//         return axios.post(API_URL + "archivegoal", {
//             id,
            
//             goal,
//             main,
            
//         });
//     }
//     daysPracticed(id, daysPracticed,) {
//         return axios.post(API_URL + "daysPracticed", {
//             id,

//             daysPracticed,

//         });
//     }
   
//     deletegoal(id, goal, main) {
//         return axios.post(API_URL + "deletegoal", {
//             id,

//             goal,
//             main,

//         });
//     }
//     deleteHomework(id, homework) {
//         return axios.post(API_URL + "deleteHomework", {
//             id,

//             homework,


//         });
//     }
//     goalStatusChange(id, checked, goal, main, complete, level, sp, starpointsGoal, pass, npass) {
//         //add homework for student. Homework appears on students page.
//         //console.log(name, email, password);
//         //binding parameters.
//         return axios.post(API_URL + "goalStatusChange", {
//             id,
//             checked,
//             goal,
//             main,
//             complete,
//             level, sp, starpointsGoal, pass, npass

           
//         });
//         //console.log(response.data);



//     }
//     changeactivestudent(id, id2,) {
//         //add homework for student. Homework appears on students page.
//         //console.log(name, email, password);
//         //binding parameters.
//         return axios.post(API_URL + "changeactivestudent", {
//             id,
//             id2,
           


//         });
//         //console.log(response.data);



//     }
//     async register(firstname, lastname, email, password) {
//         //Teacher login. Name email password. Probably going to separate to first name and last name.
//         //console.log(name, email, password);
        
//         return await axios.post(API_URL + "signup", {
//             firstname,
//             lastname,
//             email,
//             password
//         });
        
//             //console.log(response.data);
           
            
        
//     }
//     getCurrentUser(cookie) {
//         //gets whatever jwt was saved in local service. 
//         if (cookie) {
//             if (JSON.parse(localStorage.getItem('user'))) {
//                 return JSON.parse(localStorage.getItem('user'));
//             }
//             else {
//                 const current = {
//                     pastFirstTime: false
//                 }
//                 return current;
//             }

//         }
//         else {
//             return JSON.parse(localStorage.getItem('user'));
//         }
//     }

    

//     changeuserinfo(id, accountid, firstname, lastname, about, email, phone) {
//         console.log(accountid);

//         return axios.post(API_URL + "changeuserinfo", {
//             id,
//             accountid,
//             firstname,
//             lastname,
//             about,
//             email,
//             phone
//         })

//     }
//     changeuserinfoA(id, firstname, lastname, email, password) {

//         return axios.post(API_URL + "changeuserinfoA", {
//             id,
//             firstname,
//             lastname,
//             email,
//             password
//         })

//     }
//     changeAccountInfo(id, email, password) {
//         return axios.post(API_URL + "changeAccountInfo", {
//             id,

//             email,
//             password
//         })
//     }
//     newMainGoal(id, goal, ){
//         return axios.post(API_URL + "newMainGoal", {
            
//             id,
//             goal,
            
            
           
//         })
//     }
//     changeStudentinfo(id, accountid, firstname, lastname, about, email, phone, time, checkbox,day) {
//         console.log(id);

//         return axios.post(API_URL + "changeStudentinfo", {
            
//             id,
//             accountid,
//             firstname,
//             lastname,
//            about,
//             email,
//             phone,
//             time,
//             checkbox,
//             day,
            
           
//         })

//     }
    
//     admindelete(id) {
//         return axios.post(API_URL + "admindelete", {

//             id,

//         })
//     }
//     changeStudentinfoA(id, firstname, lastname, email,  checkbox,  password) {

//         return axios.post(API_URL + "changeStudentinfoA", {

//             id,
            
//             firstname,
//             lastname,
            
//             email,
           
            
//             checkbox,
            
//             password
//         })

//     }
//     uploadPhoto(photo, id, background, role) {
//         console.log(background);
//         return axios.post('https://legato.flinnapps.com/api/auth/postpic',  photo ).then(response => {

//         //return axios.post('http://localhost:8080/api/auth/postpic', photo, )

//            // .then(response => {
//             console.log(response.data);
//             const picpath = response.data.path;
//                         return axios.post("https://legato.flinnapps.com/api/auth/profilepic", {

//            // return axios.post("http://localhost:8080/api/auth/profilepic", {
//                 picpath,
//                 id,
//                 background,
//                 role
//             }).then(response => {
//                 console.log(response.data)
//             })
//         })

//         }

//     checked(id, checked, level, sp, starpointsGoal, pass, daystreak, npass) {
//         console.log(id);

//         return axios.post(API_URL + "checked", {
//             id,
//             checked,
//             level, sp, starpointsGoal, pass, daystreak, npass

           

//         })

//     }
//     getAllaccounts(email, password) {
//         return axios.post(API_URL + "getAllaccounts", {
//             email,
//             password
//         })
//     }
//     getAllstudents(email, password) {
//         return axios.post(API_URL + "getAllstudents", {
//             email,
//             password
//         })
//     }
//     getAllusers(email, password) {
//         return axios.post(API_URL + "getAllusers", {
//             email,
//             password
//         })
//     }
// }



// export default new AuthService();