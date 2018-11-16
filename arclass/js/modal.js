var btn, modal, span,btn2, modal2, span2 ;

function setupEvents () {

    // var modal = document.querySelector(".modal");
    // var trigger = document.querySelector(".trigger");
    // var closeButton = document.querySelector(".close-button");


    // function windowOnClick(event) {
    //     if (event.target === modal) {
    //         toggleModal();
    //     }
    // }

    // trigger.addEventListener("click", toggleModal);
    // closeButton.addEventListener("click", toggleModal);
    // window.addEventListener("click", windowOnClick);




    /////////////////////////////



    // console.log("4444-602 - " + document.getElementById("modal-window-1") );
    // console.log("4444-604 - " + document.getElementById("modal-content-1") );
    // // console.log("4444-601 - " + document.getElementById("open-modal-button-1") );
    // console.log("4444-603 - " + document.getElementById("button-close-modal-1") );
    // console.log("4444-603 - " + document.getElementById("button-close-modal-2") );
    



    openModalModal = document.getElementById("modal-window-1");
    openModalModalContent = document.getElementById("modal-content-1");
    
    //     openModalOpenBtn = document.getElementById("open-modal-button-1");
    // // openModalCloseBtn = document.getElementsByClassName("button-close-modal-1");
    openModalCloseBtn1 = document.getElementById("button-close-modal-1");
    openModalCloseBtn2 = document.getElementById("button-close-modal-2");

    window.addEventListener("click", windowClicked);
    // openModalOpenBtn.addEventListener("click", openModal);
    openModalCloseBtn1.addEventListener("click", closeModal);
    openModalCloseBtn2.addEventListener("click", closeModal);


    
}


function openModal() {
    // console.log("4444-701");

    openModalModal.style.display = "block";
}

function closeModal() {
    // console.log("4444-702");

    openModalModal.style.display = "none";
}

function windowClicked() {
    // console.log("4444-702");
    if (event.target == openModalModal || event.target == openModalModalContent ) {
        // console.log("4444-705 - window - clicked - closed");
        openModalModal.style.display = "none";
    }
}

    



    



//     //////////////////////


//     console.log("4444-201 - " + document.getElementById("button-open-modal") );
//     console.log("4444-202 - " + document.getElementById("modal-message-window") );
//     console.log("4444-203 - " + document.getElementById("modal-message-close-button") );




//     // Get the button that opens the modal
//     btn = document.getElementById("button-open-modal");
//     // Get the modal
//     modal = document.getElementById("modal-message-window");
//     // Get the <span> element that closes the modal
//     span = document.getElementsByClassName("modal-message-close-button");


    
//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }
    


//     // When the user clicks the button, open the modal 
//     btn.onclick = function() {
//         console.log("4444-102 - btn - clicked");
//         // modal.style.display = "block";
//         toggleModal();
//     }


//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         console.log("4444-103 - window - clicked - " + event.target );
//         if (event.target == modal) {
//             console.log("4444-104 - window - clicked - closed");
//             modal.style.display = "none";
//         }
//     }


//     btn.addEventListener("click", toggleModal);
//     // span.addEventListener("click", toggleModal);
//     window.addEventListener("click", windowOnClick);

// }


// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// function toggleModal() {
//     // modal.classList.toggle("show-modal");
//     modal.style.display = "block";
// }



















function timerHideModal() {
    setTimeout(myTimeout3, 6000) 
}

function myTimeout3() {
    closeModal();
}









window.onload = function() {


////////////////


// console.log("4444-301 - " + document.getElementById("myModal") );
// console.log("4444-302 - " + document.getElementById("myBtn") );
// console.log("4444-304 - " + document.getElementById("modal-content-myModal-close-button") );





// // Get the modal
//  modal2 = document.getElementById('myModal');

// // Get the button that opens the modal
//  btn2 = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
//  span2 = document.getElementsByClassName("modal-content-myModal-close-button")[0];

// // When the user clicks the button, open the modal 
// btn2.onclick = function() {
//     console.log("4444-407 - window - clicked - closed");
//     modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span2.onclick = function() {
//     console.log("4444-406 - window - clicked - closed");

//     modal2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     console.log("4444-404 - window - clicked - closed");

//     if (event.target == modal) {
//         console.log("4444-405 - window - clicked - closed");

//         modal2.style.display = "none";
//     }
// }
// // /////////////////






    setupEvents();
    // openModal();
    // timerHideModal();
//     // modal.style.display = "block";
//     toggleModal();


    }

