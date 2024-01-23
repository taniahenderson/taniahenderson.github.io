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

//Products
document.getElementById('products').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('products', 'productsPage');
});

//Help Center
document.getElementById('help').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('help', 'helpPage');
});

//Privacy Policy
document.getElementById('privacy').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('privacy', 'privacyPage');
});

//Legal Stuff
document.getElementById('legal').addEventListener('click', function(e) {
    e.preventDefault();
    toggleWall('legal', 'legalPage');
});