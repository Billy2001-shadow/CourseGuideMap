window.onload = function() {
    //ajax跨域访问、 JQuery 的跨域方法
    //$.getJSON('./chartinfo',function(e){ 
        //generateChart(e, $("#cs"), 2),
    //    generateChart(e, $("#ee"), 1)
    //});

    var form = JSON.parse(localStorage.getItem("form"));
    console.log(form);
    generateChart(form, $("#ee"), 1)
};
