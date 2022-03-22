import React, { Component } from 'react'
import Nav from "./nav.js"
import { Text, View } from 'react-native';

export default class App extends Component {


    state = {
        diaPic: false,
        edit: false,
        picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
        newPic: "",
        currentUser: "",
        realtimeusr: undefined,
        realtimeusr0: undefined,
        back: "",
        about: "this is how you learn",
        first: "",
        last: "",
        email: "",
        phone: "",
        edittheBackground: false,
        background: "",
        currentStudent: undefined,
        day: "",
        time: "",
        checkboxes: "",
        homework: "",
        hwpractice: 0,
        practice: 0,
        daysPracticed: 0,
        totalDays: 0,
        homeworks: "",
        currentHomework: undefined,
        showGoal: false,
        newcheck: false,
        changetime: "",
        minedit: "",
        timeedit: "",
        timesedit: false,
        weeklyTimeEdit: "",
        c: false,
        t: false,
        starpointz: false,
        timecheck: false,
        timedaycheck: false,
        statsmargin: "60px",
        timepracmargin: "40%",
        timepracmarginr: "40%",
        dayspracmargin: "40%",
        splashscreen: false,
        pracgoalmargin: "40%",
        amarginLeft: "30px",
        aheight: "140px",
        tmarginTop: "25px",
        widthforedit: "80%",
        sp: "0",
        main: undefined

    }
    // async Splashscreen() {
    //     this.setState({
    //         splashscreen: !this.state.splashscreen
    //     })

    //     const delay = ms => new Promise(res => setTimeout(res, ms));
    //     await delay(650)
    //     window.location.reload();



    // }

    starpointz() {
        if (this.state.realtimeusr.starPoints) {
            this.setState({
                starpointz: !this.state.starpointz
            })
        }
        // this.props.props.show();
    }
    showGoal(goal, main) {

        this.setState({
            showGoal: true,
            currentgoal: goal,
            main: main
        });
        // this.props.props.show();

    }
    handlegoalClose() {
        this.setState({
            showGoal: false,
            main: false,
        });
        // this.props.props.show();
    }

    practice(sign, sync, day) {

        if (sync) {
            let sp = "";
            let pass = false;
            let npass = false;
            let daystreak = parseInt(this.state.realtimeusr.daystreak);
            let x = parseInt(this.state.practice);
            let xx = parseInt(this.state.daysPracticed);
            if (sign) {
                daystreak++;
                x++;
                xx++;
                sp = ((parseInt(this.state.realtimeusr.starpoints)) + (20 * daystreak)).toString();



                if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)) {
                    pass = true;


                }
                if (this.state.realtimeusr.edityesnoWeek) {
                    this.setState({ timesedit: true, timecheck: true });

                }
                if (this.state.realtimeusr.timeday) {
                    console.log(daystreak, this.state.realtimeusr.timeday, sp)
                    let nday = {
                        M: "mon",
                        T: "tues",
                        W: "wed",
                        R: "thur",
                        F: "fri",
                        S: "sat",
                        s: "sun",


                    }
                    let theday = nday[day];
                    this.setState({ timesedit: true, timecheck: true, timedaycheck: true, timeedit: theday });
                }
                else {
                    if (this.state.realtimeusr.starPoints) {
                        this.setState({ sp: sp });
                        this.setState({ starpointz: true, });
                    }
                    // this.props.props.show();
                }
                this.setState({ practice: x.toString(), daysPracticed: xx.toString(), });


            }
            else {
                sp = ((parseInt(this.state.realtimeusr.starpoints)) - (20 * daystreak)).toString();




                if (parseInt(sp) <= 0) {

                    pass = true;
                    npass = true;

                }



                daystreak--;
                x--;
                xx--;







                this.setState({ practice: x.toString(), daysPracticed: xx.toString(), });

            }
            // console.log(this.props.props.props.currentPage._id, day, sign, this.state.practice, this.state.daysPracticed, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak, npass)

            
            //going to have to make this work on phone here.
            AuthService.syncedchecking(this.state.id, day, sign, this.state.practice, this.state.daysPracticed, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak, npass)
        }
        else {
            let sp = "";
            let pass = false;
            let npass = false;
            let daystreak = parseInt(this.state.realtimeusr.daystreak);

            let x = this.state.practice;
            let xx = this.state.daysPracticed;
            if (sign) {
                daystreak++;
                x++;
                xx++;
                sp = ((parseInt(this.state.realtimeusr.starpoints)) + (20 * daystreak)).toString();



                if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)) {
                    pass = true;


                }
                if (this.state.realtimeusr.edityesnoWeek) {
                    this.setState({ timesedit: true, timecheck: true });

                }
                if (this.state.realtimeusr.timeday) {
                    let nday = {
                        1: "mon",
                        2: "tues",
                        3: "wed",
                        4: "thur",
                        5: "fri",
                        6: "sat",
                        7: "sun",


                    }
                    console.log(x);
                    let theday = nday[x];
                    console.log(theday);
                    this.setState({ timesedit: true, timecheck: true, timedaycheck: true, timeedit: theday });
                }
                else {
                    if (this.state.realtimeusr.starPoints) {
                        this.setState({ sp: sp })
                        this.setState({ starpointz: true, });
                    }
                    // this.props.props.show();
                }
                this.setState({ practice: x.toString(), daysPracticed: xx.toString(), });

            }
            else {

                sp = ((parseInt(this.state.realtimeusr.starpoints)) - (20 * daystreak)).toString();
                console.log(sp)




                if (parseInt(sp) <= 0) {

                    pass = true;
                    npass = true;

                }



                daystreak--;
                x--;
                xx--;

                this.setState({ practice: x, daysPracticed: xx, });

            }
            //again fix the id thing on native app.
            AuthService.checked(this.state.id, this.state.practice, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak, npass);
            AuthService.daysPracticed(this.state.id, this.state.daysPracticed,);
        }
    }

    hwpractice(sign, sync, day, practice) {
        if (sync) {
            console.log(practice);
            let x = practice;
            if (sign) {
                x++;
                this.setState({ hwpractice: x, });

            }
            else {
                x--;
                this.setState({ hwpractice: x, });

            }
                        //again fix the id thing on native app.
            AuthService.hwsyncedchecking(this.state.id, day, sign, this.state.hwpractice, this.state.currentHomework._id, this.state.currentHomework.syncedCheckboxes)
        }
        else {
            console.log(practice);
            let x;
            if (!practice) {
                x = 0;
            }
            else {
                x = practice;
            }
            if (sign) {
                x++;
                this.setState({ hwpractice: x, });

            }
            else {
                x--;
                this.setState({ hwpractice: x, });

            }
                        //again fix the id thing on native app.
            AuthService.hwchecked(this.state.id, this.state.currentHomework._id, this.state.hwpractice,);
        }
    }


    getCurrentUserinRealTime(currentStudent) {


        // console.log(currentStudent._id);
        let id = currentStudent._id;
        const API_URL = "https://legato.flinnapps.com/api/auth/";

        //const API_URL = "http://localhost:8080/api/auth/";
        console.log(id);

        console.log(this.props);

        axios.post(API_URL + "getstudent", {
            id,

        }).then(response => {
            console.log("I ran this");
            this.setState({ realtimeusr: response.data.student });

            if (this.state.realtimeusr.profilepic) {

                const porfilePic = this.state.realtimeusr.profilepic;

                //const porfilePic = 'http://localhost:8080' + this.state.realtimeusr.profilepic;
                this.setState({ picture: porfilePic });
            }
            else {
                const porfilePic = "//ssl.gstatic.com/accounts/ui/avatar_2x.png";
                this.setState({ picture: porfilePic });
            }
            if (this.state.realtimeusr.backgroundpic) {
                const background = this.state.realtimeusr.backgroundpic;

                //const background = 'http://localhost:8080' + this.state.realtimeusr.backgroundpic;
                this.setState({ background: background });
            }
            else {
                const background = this.state.back;

                this.setState({ background: background });
            }

            var ar = "";
            let ampm = false;
            for (let i = 0, j = i + 1; i < this.state.realtimeusr.scheduling.length; i++, j++) {

                if (i === 0) {


                    if (this.state.realtimeusr.scheduling.length === 4) {

                        if (this.state.realtimeusr.scheduling[0] === "1") {

                            if (this.state.realtimeusr.scheduling[1] === "0") {
                                ar = ar + "10";
                                ampm = true;

                            }
                            if (this.state.realtimeusr.scheduling[1] === "1") {
                                ar = ar + "11";
                                ampm = true;
                            }
                            if (this.state.realtimeusr.scheduling[1] === "2") {
                                ar = ar + "12";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "3") {
                                ar = ar + "1";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "4") {
                                ar = ar + "2";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "5") {
                                ar = ar + "3";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "6") {
                                ar = ar + "4";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "7") {
                                ar = ar + "5";

                                console.log(ar);

                            }
                            if (this.state.realtimeusr.scheduling[1] === "8") {
                                ar = ar + "6";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "9") {
                                ar = ar + "7";
                            }

                        } else if (this.state.realtimeusr.scheduling[0] === "2") {
                            if (this.state.realtimeusr.scheduling[1] === "0") {
                                ar = ar + "8";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "1") {
                                ar = ar + "9";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "2") {
                                ar = ar + "10";
                            }
                            if (this.state.realtimeusr.scheduling[1] === "3") {
                                ar = ar + "11";
                            }
                        }
                        else if (this.state.realtimeusr.scheduling[0] === "0") {
                            if (this.state.realtimeusr.scheduling[1] === "0") {
                                ar = ar + "12";
                                ampm = true;
                            }
                        }
                    }
                    else {
                        ar = ar + this.state.realtimeusr.scheduling[i];

                    }
                }



                else {
                    if (this.state.realtimeusr.scheduling.length === 3) {
                        if (i === 1) {
                            ar = ar + ":";

                        }
                        ar = ar + this.state.realtimeusr.scheduling[i];

                        if (i === 2) {
                            ar = ar + " AM";
                        }


                    }
                    else {
                        if (this.state.realtimeusr.scheduling[j]) {
                            if (i === 1) {
                                ar = ar + ":";
                            }
                            ar = ar + this.state.realtimeusr.scheduling[j];
                            if (i === 2) {
                                if (ampm) {
                                    ar = ar + " AM";
                                }
                                else { ar = ar + " PM"; }

                            }

                        }
                    }


                }


            }




            let prac = this.state.realtimeusr.checked;
            let days = this.state.realtimeusr.daysPracticed;
            let totaldays = this.state.realtimeusr.totalDays;
            if (this.state.realtimeusr.checked === undefined) {
                prac = 0;
            }
            if (this.state.realtimeusr.daysPracticed === undefined) {
                days = 0;
            }
            if (this.state.realtimeusr.totalDays === undefined) {
                totaldays = 0;
            }
            if (this.state.realtimeusr.syncedCheckbox) {
                this.setState({
                    c: true,
                })
            }
            if (this.state.realtimeusr.checkboxes !== "0") {
                this.setState({
                    c: true,
                })

            }
            if (this.state.realtimeusr.edityesnoWeek) {
                this.setState({
                    t: true,
                })
            }
            if (this.state.realtimeusr.timeday) {
                this.setState({
                    t: true,
                })
            }
            this.setState({
                about: this.state.realtimeusr.about,
                first: this.state.realtimeusr.firstName,
                last: this.state.realtimeusr.lastName,
                email: this.state.realtimeusr.email,
                phone: this.state.realtimeusr.phone,
                day: this.state.realtimeusr.day,
                time: ar,
                checkboxes: this.state.realtimeusr.checkboxes,
                homework: this.state.realtimeusr.homework,
                homeworks: this.state.realtimeusr.homeworks,
                daysPracticed: days,
                totalDays: totaldays,
                practice: prac,
            })
            this.props.props.currentUserChange(this.state.realtimeusr.firstName, this.props.props.props.currentPage._id);

        });

    }
    // async componentDidMount() {

    //     if (parseInt(window.innerWidth) <= 550) {
    //     //     this.setState({
    //     //         tooSmall: true,
    //     //         statsmargin: "45px",
    //     //         timepracmargin: "48%",
    //     //         timepracmarginr: "37%",
    //     //         dayspracmargin: "43%",
    //     //         amarginLeft: "10px",
    //     //         aheight: "200px",
    //     //         tmarginTop: "50px",

    //     //         pracgoalmargin: "42%",


    //     //     });
    //     // }




    //     // await this.setState({
    //     //     currentStudent: this.props.props.props.currentPage,
    //     // })

    //     // console.log(this.props.props.props.currentPage);




    //     // await this.getCurrentUserinRealTime(this.props.props.props.currentPage);



    // }

    // async componentDidUpdate(prep, pres) {
    //     console.log(prep);
    //     console.log(this.props);
    //     if (prep.props.props.currentPage._id !== this.props.props.props.currentPage._id) {
    //         await this.setState({
    //             currentStudent: this.props.props.props.currentPage,
    //             picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
    //             newcheck: !this.state.newcheck,
    //         })
    //         if (this.props.props.props.currentPage.profilepic)
    //             await this.setState({
    //                 picture: this.props.props.props.currentPage.profilepic,
    //             })
    //         await this.getCurrentUserinRealTime(this.props.props.props.currentPage);

    //     }
    // }

    // handleBackClose() {
    //     this.setState({
    //         edittheBackground: false
    //     });
    // }
    // editBackground() {
    //     this.setState({
    //         edittheBackground: true,
    //     })
    // }
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    editMe() {
        this.setState({
            edit: true
        })
        this.props.props.show()
    }

    handleEditClose() {
        this.setState({
            edit: false
        });
        this.props.props.show();
    };

    handleClose() {
        this.setState({
            diaPic: false
        });
        this.props.props.show();
    };

    changePic(pic) {
        this.setState({
            diaPic: pic.toString()
        });
    };

    openPic = (event) => {
        this.setState(
            {
                diaPic: true
            });
        this.props.props.show();


    };
    handleSub(e) {
        e.preventDefault();


        AuthService.changeStudentinfo(
            this.props.props.props.currentPage._id,
            this.state.currentUser.id,
            this.state.first,
            this.state.last,
            this.state.about,
            this.state.email,
            this.state.phone,
            this.props.props.props.currentPage.scheduling,
            this.state.checkboxes,
            this.state.day
        ).then(response => {
            console.log(response.data.changed);
            this.setState({
                about: response.data.changed.about,
                first: response.data.changed.firstName,
                last: response.data.changed.lastName,
                email: response.data.changed.email,
                phone: response.data.changed.phone,
                edit: false,
                realtimeusr0: response.data.changed,

            });

        })

            .catch(e => {
                console.log(e);
            });
        //window.location.reload();
        this.Splashscreen();


        this.props.props.show();

    }
    showHomework(homework) {
        this.setState({
            showHomework: true,
            currentHomework: homework,
        })
        this.props.props.show();



    }
    hideHomeworkClose() {
        this.setState({
            showHomework: false
        });
        this.props.props.show();

    };
    handletimesOpen() {
        this.setState({
            timesedit: true
        });
    };
    handletimesClose(stars) {

        this.setState({
            timesedit: false
        });
        if (stars) {
            if (this.state.realtimeusr.starPoints) {
                this.setState({
                    starpointz: true
                });
            }
            this.props.props.show();
        }
    };
    changetimes() {
        let sp = this.state.realtimeusr.starpoints;
        let daystreak = parseInt(this.state.realtimeusr.daystreak)
        let pass = false;
        let npass = false;
        if (!this.state.realtimeusr.syncedCheckbox) {
            if (parseInt(this.state.realtimeusr.checkboxes) === 0) {

                if (parseInt(this.state.realtimeusr.hwtime[this.state.timeedit]) === 0) {
                    if (parseInt(this.state.minedit) === 0) {

                        sp = (parseInt(this.state.realtimeusr.starpoints) - (20 * daystreak)).toString();
                        if (parseInt(sp) <= 0) {

                            pass = true;
                            npass = true;

                        }
                        daystreak--;

                    }
                    else {

                        daystreak = parseInt(this.state.realtimeusr.daystreak) + 1;
                        sp = (parseInt(this.state.realtimeusr.starpoints) + (20 * daystreak)).toString();



                        if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)) {
                            pass = true;

                        }
                    }



                }
                else {
                    if (parseInt(this.state.minedit) === 0) {

                        sp = (parseInt(this.state.realtimeusr.starpoints) - (20 * daystreak)).toString();
                        if (parseInt(sp) <= 0) {

                            pass = true;
                            npass = true;

                        }
                        daystreak--;

                    }
                }

            }
        }

        if (!this.state.realtimeusr.syncedCheckbox) {
            authService.changetimes(this.props.props.props.currentPage._id, this.state.timeedit, this.state.minedit, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak.toString(), this.state.realtimeusr.timeTotal, npass);
        }
        else {
            authService.changetimes(this.props.props.props.currentPage._id, this.state.timeedit, this.state.minedit, this.state.realtimeusr.level, false, this.state.realtimeusr.starpointsGoal, pass, daystreak.toString(), this.state.realtimeusr.timeTotal, npass);

        }






        if (!this.state.realtimeusr.syncedCheckbox) {
            if (parseInt(this.state.realtimeusr.checkboxes) === 0) {
                if (parseInt(this.state.realtimeusr.hwtime[this.state.timeedit]) === 0) {
                    if (this.state.realtimeusr.starPoints) {
                        this.setState({
                            starpointz: true,

                        })
                    }
                    this.setState({
                        timesedit: false,
                    })
                    this.props.props.show();
                }
                else {
                    if (this.state.timecheck) {
                        if (this.state.realtimeusr.starPoints) {
                            this.setState({
                                starpointz: true,

                            })
                        }
                        this.setState({ timesedit: false })
                        this.props.props.show();
                    }
                    else {
                        //window.location.reload();
                        this.Splashscreen();
                    }


                }



            }
            else {
                if (this.state.timecheck) {
                    if (this.state.realtimeusr.starPoints) {
                        this.setState({
                            starpointz: true,

                        })
                    }
                    this.setState({ timesedit: false })
                    this.props.props.show();
                }
                else {
                    //window.location.reload();
                    this.Splashscreen();
                }
            }




        }
        else {
            if (this.state.timecheck) {
                if (this.state.realtimeusr.starPoints) {
                    this.setState({
                        starpointz: true,

                    })
                }
                this.setState({
                    timesedit: false
                })
                this.props.props.show();
            }
            else {
                // window.location.reload();
                this.Splashscreen();
            }
        }




    }
    changeweek() {
        console.log("iget here")
        let sp = this.state.realtimeusr.starpoints
        let pass = false;


        if (parseInt(this.state.realtimeusr.totalWeekTime.total) < parseInt(this.state.realtimeusr.min)) {
            if ((parseInt(this.state.realtimeusr.totalWeekTime.total) + parseInt(this.state.weeklyTimeEdit)) >= parseInt(this.state.realtimeusr.min))

                sp = (parseInt(this.state.realtimeusr.starpoints) + 100).toString();


            if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)) {
                pass = true;

            }
        }



        authService.changeweek(this.props.props.props.currentPage._id, this.state.weeklyTimeEdit, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, this.state.realtimeusr.timeTotal, this.state.realtimeusr.totalWeekTime.total);


        if ((parseInt(this.state.realtimeusr.totalWeekTime.total) + parseInt(this.state.weeklyTimeEdit)) >= parseInt(this.state.realtimeusr.min)) {
            if (parseInt(this.state.realtimeusr.totalWeekTime.total) < parseInt(this.state.realtimeusr.min)) {
                if (this.state.realtimeusr.starPoints) {
                    this.setState({
                        starpointz: true,
                    });
                }
                this.props.props.show();
            }
            else {
                if (this.state.timecheck) {
                    if (this.state.realtimeusr.starPoints) {
                        this.setState({
                            starpointz: true,
                        })
                    }
                    this.props.props.show();
                }
                else {
                    //window.location.reload();
                    this.Splashscreen();
                }

            }
        }
        else {
            if (this.state.timecheck) {
                if (this.state.realtimeusr.starPoints) {
                    this.setState({
                        starpointz: true,
                    })
                }
                this.props.props.show();
            }
            else {
                //window.location.reload();
                this.Splashscreen();
            }
        }



        //window.location.reload();
        this.setState({
            timesedit: false,
        });
    }
    render() {
        return (
            
                <Nav />
            
        )
    }
} 