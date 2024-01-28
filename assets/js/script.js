let openTab = null;

function toggleWall(tabId, wallId) {
    const currentWall = document.getElementById(wallId);
    
    //if the desired tab is already open, close it
    if (openTab === tabId && currentWall.style.bottom === '0px') {
        currentWall.style.bottom = '-100%';
        openTab = null;
    } 
    else {
        //if another tab is already open, close it
        if (openTab !== null) {
            const raisedWall = document.getElementById(`${openTab}Page`);
            raisedWall.style.bottom = '-100%';
        }
        //open the desired tab
        currentWall.style.bottom = '0px';
        openTab = tabId;
    }
}


//About Us
document.getElementById('about').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('about', 'about-page');
});

//Help Center
document.getElementById('help').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('help', 'help-page');
});



//Pop-up boxes for footer bar links
var privModal = document.getElementById("privacy-modal");
var legalModal = document.getElementById("legal-modal");

var privLnk = document.getElementById("privacy");
var legalLnk = document.getElementById("legal");

var spanPriv = document.getElementById("close-privacy");
var spanLegal = document.getElementById("close-legal");

privLnk.onclick = function() {
  privModal.style.display = "block";
}

legalLnk.onclick = function() {
  legalModal.style.display = "block";
}

spanPriv.onclick = function() {
  privModal.style.display = "none";
}

spanLegal.onclick = function() {
  legalModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == privModal) {
    privModal.style.display = "none";
  } else if (event.target == legalModal) {
    legalModal.style.display = "none";
  }
}


// Toggle view status of the list in the About Us page
function toggleText(elementId) {
    var textElement = document.getElementById(elementId);
    textElement.classList.toggle('visible');
}


function displayInfo() {
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var emailAddress = document.getElementById('emailaddress').value;
  var username = document.getElementById('username').value;
  var reason = document.getElementById('reason').value;
  var message = document.getElementById('message').value;
  var uploadFile = document.getElementById('uploadfile').value;

  var outputWindow =  "First name: " + firstName + "\n" +
                      "Last name: " + lastName + "\n" +
                      "Email address: " + emailAddress + "\n" +
                      "Username: " + username + "\n" +
                      "Reason for contact: " + reason + "\n" +
                      "Message: " + message + "\n" +
                      "File uploaded: " + uploadFile;

  alert(outputWindow);
}