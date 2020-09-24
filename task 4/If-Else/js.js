function getGrade(score) {

    if(25< score && score <= 30){
        document.write("A");
    }else if(20< score && score <= 25){
        document.write("B");
    }else if(15< score && score  <= 20){
        document.write("C");
    }else if(10< score && score  <= 15){
        document.write("D");
    }else if(5< score && score  <= 10){
        document.write("E");
    }else{
            document.write("F");
    }
}
getGrade(11);
