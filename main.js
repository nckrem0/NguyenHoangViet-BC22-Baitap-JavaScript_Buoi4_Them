/**
 * Bài Tập 1:
 * Đầu Vào :
 * - Tạo biến cho nhập vào ngày , tháng , năm 
 * Xử Lý :
 * - Tính năm đó có phải năm nhuận hay không : 
 * + Công thức : 
 * (year % 4 === 0 && year % 100 !== 0)
 * (year % 100 === 0 && year % 400 === 0)
 * (year % 400 === 0)
 * - Kiểm Tra Tháng có 31 ngày  
 * - Kiểm Tra Tháng có 30 ngày  
 * - Kiểm Tra Tháng 2 có 29 ngày  ( nếu là năm nhuận) 
 * - Kiểm Tra Tháng 2 có 28 ngày  (nếu là năm không nhuận)
 * - Kiểm tra Ngày Hôm Trước và Ngày Hôm Sau 
 * Đầu Ra: Show kết quả        
 */


document.getElementById ("btnCheckDayMonthYear").onclick = function (){
    var month = parseInt(document.getElementById("txtMonth1").value);
    var year = parseInt(document.getElementById("txtYear1").value);
    var day = parseInt(document.getElementById("txtDay").value);

    var leapYear = 0  ;
    var maxDay = 31;
    var yesterday =  day - 1;
    var tommorrrow = day + 1;
    var lastMonth = month;
    var nextMonth = month;
    var lastYear = year;
    var nextYear = year;

    var result = `Năm ${year} là năm bình thường`;


    //-------- kiểm tra năm nhuận hay không --------
    if(year % 4 === 0 && year % 100 !== 0){
        result = `Năm ${year} là năm nhuận`
        leapYear = 1;
        //result = "Năm "+ year + " là năm nhuận"
    } 
    if(year % 100 === 0 && year % 400 === 0){
        result = `Năm ${year} là năm nhuận`
        leapYear = 1;
    }
    if(year % 400 === 0){
        result = `Năm ${year} là năm nhuận`
        leapYear = 1;
    }
    //----- kết thúc kiểm tra năm nhuận ---------

    // ghi ra tháng có bao nhiêu ngày
    switch (month) {
        case 1 ,3, 5, 7, 8, 10, 12:
            break;
        case 4, 6, 9, 11:
            maxDay = 30;
            break;

        case 2:
            if (leapYear == 1){
                max = 29;
            }else {
                max = 28;
            }
            // maxDay = leapYear == 1 ? 29 : 28
            break;
    }


    // nhập đại 1 ngày tháng năm , cho ra kết quả ngày hôm trước và hôm sau
    // kiểm tra ngày của tháng mấy và năm đó có nhuận hay không
    //th1 năm nhuận
    // -- tháng 2 có 29 ngày
    if(tommorrrow > maxDay){
        tommorrrow = 1;
        if(tommorrrow == 1){
            nextMonth = nextMonth + 1;
            if(nextMonth > 12){
                nextMonth = 1
                nextYear = nextYear + 1;
            }
        }
    }
    if(yesterday < 1){
        yesterday = maxDay
        if(yesterday == maxDay){
            lastMonth = lastMonth - 1;
            if(lastMonth < 1){
                lastMonth = 12;
                lastYear = lastYear - 1;
            }
        }
    }

    if(day > maxDay || month > 12){
        result = `Ngày tháng không phù hợp`
        alert(result);
        return;
    }
    
    document.getElementById("footerCheckDayMonthYear").innerHTML = result +"</br>"+ "Ngày Hôm Sau :"+tommorrrow+"/"+nextMonth+"/"+nextYear+"</br>"+ "Ngày Hôm Trước :"+yesterday+"/"+lastMonth+"/"+lastYear;
}


/**
 * Bài Tập 2:
 * Đầu Vào :
 * - Tạo biến cho nhập vào tháng , năm 
 * Xử Lý :
 * - Tính năm đó có phải năm nhuận hay không : 
 * + Công thức : 
 * (year % 4 === 0 && year % 100 !== 0)
 * (year % 100 === 0 && year % 400 === 0)
 * (year % 400 === 0)
 * - Kiểm Tra Tháng có 31 ngày  
 * - Kiểm Tra Tháng có 30 ngày  
 * - Kiểm Tra Tháng 2 có 29 ngày  ( nếu là năm nhuận) 
 * - Kiểm Tra Tháng 2 có 28 ngày  (nếu là năm không nhuận)
 * Đầu Ra: Show kết quả        
 */
document.getElementById ("btnCheckMonthYear2").onclick = function (){
    var month =parseInt(document.getElementById("txtMonth2").value) ;
    var year =parseInt(document.getElementById("txtYear2").value) ;
    var leapYear = 0  ;
    var result = `Năm ${year} là năm bình thường` ;

    if(year % 4 === 0 && year % 100 !== 0){
        result = `Năm ${year} là năm nhuận`
        leapYear = 1;
        //result = "Năm "+ year + " là năm nhuận"
    } 
    if(year % 100 === 0 && year % 400 === 0){
        result = `Năm ${year} là năm nhuận`
        leapYear = 1;
    }
    if(year % 400 === 0){
        result = `Năm ${year} là năm nhuận`
        leapYear = 1;
    }

    // ghi ra tháng có bao nhiêu ngày
    switch (month) {
        case 1:
            result += ` </br> Tháng ${month} có 31 ngày`
            break;
        case 3:
            result += ` </br> Tháng ${month} có 31 ngày`
            break;
        case 5:
            result += ` </br> Tháng ${month} có 31 ngày`
            break;
        case 7:
            result += ` </br> Tháng ${month} có 31 ngày`
            break;
        case 8:
            result += ` </br> Tháng ${month} có 31 ngày`
            break;     
        case 10:
            result += ` </br> Tháng ${month} có 31 ngày`
            break;   
        case 12:
            result += ` </br> Tháng ${month} có 31 ngày`
            break;
        case 4:
            result += ` </br> Tháng ${month} có 30 ngày`
            break;
        case 6:
            result += ` </br> Tháng ${month} có 30 ngày`
            break;
        case 9:
            result += ` </br> Tháng ${month} có 30 ngày`
            break;
        case 11:
            result += ` </br> Tháng ${month} có 30 ngày`
            break;

        case 2:
            if (leapYear == 1){
                result += ` </br> Tháng ${month} có 29 ngày`
            }else {
                result += ` </br> Tháng ${month} có 28 ngày`
            }
            break;
        
    }
    
    document.getElementById("footerCheckMonthYear2").innerHTML = result ;

}


/**
 * Bài Tập 3:
 * Đầu Vào :
 * - Tạo biến cho nhập vào số nguyên có 3 chữ số 
 * Xử Lý :
 * - Tách số theo hàng trăm, hàng chục và hàng đơn vị : 
 * + Công thức : 
 * hundred = Math.floor(number/100)
 * ten = Math.floor(number%100/10)
 * unit = number % 10
 * Đầu Ra: Show kết quả        
 */

document.getElementById("btnCheckNumber").onclick = function () {
    var number = document.getElementById ("txtNumber"). value *1;
    var result ;

    if (100 < number || number < 999 ){
        var hundred = Math.floor(number/100);
        var ten = Math.floor(number%100/10);
        var unit = number % 10 ;
        // -- Hàng Trăm --
        if (hundred ==1) {
            result = "Một Trăm"
        }else if(hundred ==2){
            result = "Hai Trăm"
        }
        else if(hundred ==3){
            result = "Ba Trăm"
        }
        else if(hundred ==4){
            result = "Bốn Trăm"
        }
        else if(hundred ==5){
            result = "Năm Trăm"
        }
        else if(hundred ==6){
            result = "Sáu Trăm"
        }
        else if(hundred ==7){
            result = "Bảy Trăm"
        }
        else if(hundred ==8){
            result = "Tám Trăm"
        }
        else if(hundred ==9){
            result = "Chín Trăm"
        }
        // -- Hàng Chục --
        if (ten ==1) {
            result += " Mười"
        }else if(ten ==2){
            result += " Hai Mươi"
        }
        else if(ten ==3){
            result += " Ba Mươi"
        }
        else if(ten ==4){
            result += " Bốn Mươi"
        }
        else if(ten ==5){
            result += " Năm Mươi"
        }
        else if(ten ==6){
            result += " Sáu Mươi"
        }
        else if(ten ==7){
            result += " Bảy Mươi"
        }
        else if(ten ==8){
            result += " Tám Mươi"
        }
        else if(ten ==9){
            result += " Chín Mươi"
        }
        // -- Hàng Đơn vị --
        if (unit ==1) {
            result += " Một"
        }else if(unit ==2){
            result += " Hai"
        }
        else if(unit ==3){
            result += " Ba"
        }
        else if(unit ==4){
            result += " Bốn"
        }
        else if(unit ==5){
            result += " Năm"
        }
        else if(unit ==6){
            result += " Sáu"
        }
        else if(unit ==7){
            result += " Bảy"
        }
        else if(unit ==8){
            result += " Tám"
        }
        else if(unit ==9){
            result += " Chín"
        }
        
    }
    document.getElementById("footerCheckNumber").innerHTML = result;
}


/**
 * Bài Tập 4:
 * Đầu Vào :
 * - Tạo biến nhập vào toạ độ của trường đại học 
 * - Tạo biến nhập vào toạ độ của 3 Sinh Viên
 * Xử Lý :
 * - Tính toạ độ của Sinh Viên A đến Trường
 * - Tính toạ độ của Sinh Viên B đến Trường
 * - Tính toạ độ của Sinh Viên C đến Trường
 * - Kiểm tra xem Sinh Viên nào có quảng đường xa nhất
 * Đầu Ra: Show kết quả        
 */


document.getElementById ("btnCheckCoord").onclick = function(){
    // biến toạ độ của trường 
    var coordSchoolA = document.getElementById("txtCoordSchoolA").value ;
    var coordSchoolB = document.getElementById("txtCoordSchoolB").value ;
    var coordSchoolC = document.getElementById("txtCoordSchoolC").value ;
    // biến toạ độ của Sinh Viên A
    var coordStudent1A = document.getElementById("txtCoordStudent1A").value ;
    var coordStudent1B = document.getElementById("txtCoordStudent1B").value ;
    var coordStudent1C = document.getElementById("txtCoordStudent1C").value ;

    // biến toạ độ của Sinh Viên B
    var coordStudent2A = document.getElementById("txtCoordStudent2A").value ;
    var coordStudent2B = document.getElementById("txtCoordStudent2B").value ;
    var coordStudent2C = document.getElementById("txtCoordStudent2C").value ;

    // biến toạ độ của Sinh Viên C
    var coordStudent3A = document.getElementById("txtCoordStudent3A").value ;
    var coordStudent3B = document.getElementById("txtCoordStudent3B").value ;
    var coordStudent3C = document.getElementById("txtCoordStudent3C").value ;


    var a = Math.pow(coordSchoolA-coordStudent1A, 2 );
    var b = Math.pow(coordSchoolB-coordStudent1B, 2 );
    var c = Math.pow(coordSchoolC-coordStudent1C, 2 );
    var coordStudentA = parseInt(Math.sqrt(a + b + c)) ;

    var d = Math.pow(coordSchoolA-coordStudent2A, 2 );
    var e = Math.pow(coordSchoolB-coordStudent2B, 2 );
    var f = Math.pow(coordSchoolC-coordStudent2C, 2 );
    var coordStudentB = parseInt(Math.sqrt(d + e + f)) ;

    var g = Math.pow(coordSchoolA-coordStudent3A, 2 );
    var h = Math.pow(coordSchoolB-coordStudent3B, 2 );
    var i = Math.pow(coordSchoolC-coordStudent3C, 2 );
    var coordStudentC = parseInt(Math.sqrt(g + h + i) );

    var firstDistance ;
    var secondDistance ;
    var thirdDistance ;

    if (coordStudentA <= coordStudentB && coordStudentB <= coordStudentC ) {
        firstDistance = coordStudentC + " Sinh Viên C";
        secondDistance = coordStudentB + " Sinh Viên B";
        thirdDistance = coordStudentA + " Sinh Viên A";
    }else if(coordStudentA <= coordStudentB && coordStudentB >= coordStudentC ){
        firstDistance = coordStudentB + " Sinh Viên B";
        secondDistance = coordStudentA + " Sinh Viên A";
        thirdDistance = coordStudentC + " Sinh Viên C";
        if (coordStudentA > coordStudentC){
            firstDistance = coordStudentB + " Sinh Viên B";
            secondDistance = coordStudentA + " Sinh Viên A";
            thirdDistance = coordStudentC + " Sinh Viên C";
        }else{
            firstDistance = coordStudentB + " Sinh Viên B";
            secondDistance = coordStudentC + " Sinh Viên C";
            thirdDistance = coordStudentA + " Sinh Viên A";
        }
    }else if(coordStudentA >= coordStudentB && coordStudentB >= coordStudentC) {
        firstDistance = coordStudentA + " Sinh Viên A";
        secondDistance = coordStudentB + " Sinh Viên B";
        thirdDistance = coordStudentC + " Sinh Viên C";
    }else if (coordStudentA >= coordStudentB && coordStudentB <= coordStudentC){
        firstDistance = coordStudentA + " Sinh Viên A";
        secondDistance = coordStudentC + " Sinh Viên C";
        thirdDistance = coordStudentB + " Sinh Viên B";
        if(coordStudentA > coordStudentC ){
            firstDistance = coordStudentA + " Sinh Viên A";
            secondDistance = coordStudentC + " Sinh Viên C";
            thirdDistance = coordStudentB + " Sinh Viên B";
        }else {
            firstDistance = coordStudentC + " Sinh Viên C";
            secondDistance = coordStudentA + " Sinh Viên A";
            thirdDistance = coordStudentB + " Sinh Viên B";
        }
    }
    var result = "Khoảng Cách Xa Nhất Là : " + firstDistance +"</br>"+"Khoảng Cách Xa Thứ 2 Là : " + secondDistance +"</br>"+"Khoảng Cách Xa Thứ 3 Là : " + thirdDistance ;
    document.getElementById("footerCheckCoord").innerHTML = result ;
}
