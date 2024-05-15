"use strict"

window.onload = function () {
    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownFootballTeams();
  
  };

  function initLoadDropdownFootballTeams(){
    let teams = [ 
        {code:"DAL", names:"Dallas Cowboys", plays:"Arlington, TX", image:"https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DAL.png"}, 
        {code:"DEN", names:"Denver Broncos", plays:"Denver, CO", image:"https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DEN.png"}, 
        {code:"HOU", names:"Houston Texans", plays:"Houston, TX", image:"https://a.espncdn.com/i/teamlogos/nfl/500/hou.png"}, 
        {code:"KAN", names:"Kansas City Chiefs", plays:"Kansas City, MO", image:"https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"}, 
      ];

      const teamList = document.getElementById("footballnames");

      let defaultOption = new Option("Select a team", "");
      teamList.appendChild(defaultOption);

      teams.forEach(team => {
        //you can only have two parameters when using the option 
        let theOption = new Option(team.names, team.code);
        teamList.appendChild(theOption)
      })

 
    };

    function DisplayItem(){
  
      let teams = [ 
        {code:"DAL", names:"Dallas Cowboys", plays:"Arlington, TX", image:"https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DAL.png"}, 
        {code:"DEN", names:"Denver Broncos", plays:"Denver, CO", image:"https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_DEN.png"}, 
        {code:"HOU", names:"Houston Texans", plays:"Houston, TX", image:"https://a.espncdn.com/i/teamlogos/nfl/500/hou.png"}, 
        {code:"KAN", names:"Kansas City Chiefs", plays:"Kansas City, MO", image:"https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"}, 
      ];

        const teamList = document.getElementById("footballnames");
        

        //let selected value
        let selectedValue = teamList.value;
  //      console.log(selectedValue);
        // let selectedIndex = teamList.selectedIndex;
      //   let selectedText = teamList.options[teamList.selectedIndex].text;
        // let message;

        //this will check if something is selected!
        if (!selectedValue) {
            document.getElementById("message").innerText = "Nothing has been selected";
            return;
            document.getElementById("teamImage").src = ""; // Clear the image
        }
        
        //we bring back the array from above here and give it a let and a selectedValue
        let selectedTeam = null;
        for (let i = 0; i < teams.length; i++) {
          if (teams[i].code === selectedValue) {
            selectedTeam = teams[i];
            break;
          }
        }

        // if (selectedValue == "DAL") {
              DisplayMessage(selectedTeam);
        // }
      //   if (selectedValue == "DEN") {
      //     document.getElementById("message").innerText = 
      //     `You picked ${selectedTeams.names} and they play in ${selectedTeams.plays}.`
      //   }
      //   if (selectedValue == "HOU") {
      //     document.getElementById("message").innerText = 
      //     `You picked ${selectedTeams.names} and they play in ${selectedTeams.plays}.`
      //   }
      //   if (selectedValue == "KAN") {
      //     document.getElementById("message").innerText = 
      //     `You picked ${selectedTeams.names} and they play in ${selectedTeams.plays}.`
      //   }
      // }


      function DisplayMessage(_selectedTeam) {
                  document.getElementById("message").innerText = 
          `You picked ${_selectedTeam.names} and they play in ${_selectedTeam.plays}.`
          document.getElementById("teamImage").src = _selectedTeam.image; // Update the image
      }

    function ClearFilters() {
        const teamList = document.getElementById("footballnames");
        teamList.value = "";
        document.getElementById("message").innerText = "";
        const searchfield = document.getElementById("mySearchField");
        searchfield.value = "";
      }
    }
