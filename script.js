function compute()
{
	var p, i, C, w, resultat;
	var dateobj = new Date();
	var B = Number(dateobj.getFullYear());
	//e = parseInt(B, 10); 
    p = Number(document.getElementById("principal").value);
    r = Number(document.getElementById("rate").value);
    y = Number(document.getElementById("years").value);
    //m = parseInt(y, 10);
    C = B + y;
    i =  (r*y*p) / 100;
    resultat = "If you deposit <strong> "+p+ " </strong>at an interest rate of <strong> "+r+"%</strong>. You will receive an amount of <strong> "+i+" </strong> in the year <strong> "+ C+"</strong>" ;
    // resultat = "If you deposit <strong> "+p+ " </strong>at an interest rate of <strong>"+r+"</strong>%. You will receive an amount of <strong>"+i+"</strong> in the year <strong>"+ C"</strong>";

    document.getElementById("result").innerHTML = resultat;
    //document.getElementById("result").value = resultat;
    //alert("If you deposit "+p+ " at an interest rate of "+r+"%. You will receive an amount of "+i+" in the year "+ C);
    
}
        