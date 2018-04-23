currentTab = 0;
showTab(currentTab);

function showTab(n){
    var tabs = document.getElementsByClassName("tab");
    if (currentTab <= tabs.length - 1){
        tabs[currentTab].style.display = "none";
        currentTab = currentTab + n;
        tabs[currentTab].style.display = "block";
        var nextBtn = document.getElementById("next");
        nextBtn.innerHTML = "N&aumlchste Seite";



        if (currentTab != 0) {
            var prevBtn = document.getElementById("previous");
            prevBtn.style.display = "block";
            }
        else {
           var prevBtn = document.getElementById("previous");
           prevBtn.style.display = "none";
        }
    

    if (currentTab == tabs.length - 1) {
        var nextBtn = document.getElementById("next");
        nextBtn.innerHTML = "Submit";
        }
    
    }
    if (currentTab >= tabs.length){
        document.getElementById("surveyForm").submit();
    }
}
