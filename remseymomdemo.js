"use strict"

//Remsey example start
window.onload = function () {
    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownGiftIdeas();
  
    //Default option
    const giftList = document.getElementById("giftIdeas");
    // giftList.value = "Gift4";
    // giftList.value = null;
    giftList.onchange = changeTheDropDownValue;
  };

function initLoadDropdownGiftIdeas() {
    // load the dropdown list
  //  let states = ["Alabama", "Alaska", "Arizona", ... ];



    // let giftIdeas = ["A house", "A vacation", "A rose", "A photoalbum"];
    // let giftValues = ["Gift1","Gift2","Gift3","Gift4"];

// giftValues = ["Gift1","Gift2","Gift3","Gift4"];
        
        let gifts = [
            { idea: "A house", value: "Gift1" },
            { idea: "A vacation", value: "Gift2" },
            { idea: "A rose", value: "Gift3" },
            { idea: "A photoalbum", value: "Gift4" }
        ]
        
      
        //Grab the list from HTML
        const giftList = document.getElementById("giftIdeas");
    

        gifts.forEach(gift  => {
            let theOption = new Option(gift.idea, gift.value); 
            // ADDing the elements to the list 
            giftList.appendChild(theOption);
        })
      
        };

        function DisplayItem() {
            //grab the giftlist
            const giftList = document.getElementById("giftIdeas");

            //let selected value
            let selectedValue = giftList.value;
            let selectedIndex = giftList.selectedIndex;
            let selectedText = giftList.options[giftList.selectedIndex].text;
            let message;
            if (selectedValue == null) {
                document.getElementById("message").innerText = "Nothing has been selected";
                return;
            } else if (selectedValue == "Gift3") {
                document.getElementById("message").innerText =
                "That is a wonderfull rose" + selectedText;
            }
            }      

            
        function changeTheDropDownValue() {
            //grab the giftlist
            const giftList = document.getElementById("giftIdeas");

    

          
            //let selected value
            let selectedvalue = giftList.value;
            document.getElementById("message").innerText = selectedvalue;
          }

          function ClearFilters() {
            const giftList = document.getElementById("giftIdeas");
            giftList.value = null;
            const searchfield = document.getElementById("mySearchField");
            searchfield.value = "";
          }
//     //Grab the list from HTML
//     const giftList = document.getElementById("giftIdeas");
//     let amoutOfGifts = gifts.length;
//     for (let i = 0; i < amoutOfGifts; i++) {
//     // create the option element
//     let theOption = document.createElement("option");
//     // set the text and value of the option you created
//     theOption.textContent = gifts[i].idea; 
//     theOption.value = gifts[i].value; 
//     // append the option as a child of (inside) the 
//     // select element

//    // ADDing the elements to the list 
//    giftList.appendChild(theOption);
//     }



    //Remsey example end