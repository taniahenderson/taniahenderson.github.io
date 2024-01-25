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
    toggleWall('about', 'aboutPage');
});

//Help Center
document.getElementById('help').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('help', 'helpPage');
});



//Pop-up boxes for footer bar links
var privModal = document.getElementById("privModal");
var legalModal = document.getElementById("legalModal");

var privLnk = document.getElementById("privacy");
var legalLnk = document.getElementById("legal");

var spanPriv = document.getElementById("closePriv");
var spanLegal = document.getElementById("closeLegal");

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