"use strict"

window.onload = function () {
    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownFootballTeams();
  
    //Default option
    const teamList = document.getElementById("footballnames");
    // giftList.value = "Gift4";
    // giftList.value = null;
    teamList.onchange = changeTheDropDownValue;
  };

  function initLoadDropdownFootballTeams(){
    let teams = [ 
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"}, 
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"}, 
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"}, 
        {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"}, 
      ];

      const teamList = document.getElementById("footballnames");

      teams.forEach(team => {
        let theOption = new Option(team.name, team.code, team.plays);
        teamList.appendChild(theOption)
      })
    };

    function DisplayItem(){
        const teamList = document.getElementById("footballnames");

        //let selected value
        let selectedValue = teamList.name;
        let selectedIndex = teamList.selectedIndex;
        let selectedText = teamList.options[giftList.selectedIndex].text;
        let message;
        if (selectedValue == null) {
            document.getElementById("message").innerText = "Nothing has been selected";
            return;
        } else if (selectedValue == "DAL") {
            document.getElementById("message").innerText =
            "That is a wonderfull rose" + selectedText;
            return;
        }


    }
    function changeTheDropDownValue() {
        //grab the giftlist
        const teamList = document.getElementById("footballnames");

        //let selected value
        let selectedvalue = teamList.value;
        document.getElementById("message").innerText = selectedvalue;
 
    }

    function ClearFilters() {
        const teamList = document.getElementById("footballnames");
        teamList.value = null;
        const searchfield = document.getElementById("mySearchField");
        searchfield.value = "";
      }

