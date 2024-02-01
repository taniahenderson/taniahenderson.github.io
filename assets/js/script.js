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
            const raisedWall = document.getElementById(`${openTab}-page`);
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

//Products
function toggleDropdown() {
  var dropdownMenu = document.querySelector('.dropdown-menu');
  var dropbtn = document.getElementById('dropbtn');
  
  if (innerWidth <= 600) {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
      dropdownMenu.style.display = 'block';
      dropbtn.style.color = 'rgb(244, 156, 12)';
    } 
    else {
      dropdownMenu.style.display = 'none';
      dropbtn.style.color = '';
    }
  } 
}

//Help Centre
document.getElementById('help').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('help', 'help-page');
});



//Modal transitions for footer bar links
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