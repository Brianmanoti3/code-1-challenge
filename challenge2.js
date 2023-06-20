function calculateDemeritpoints(speed){
    const speedLimit=80;
    const KmPerDemeritPoints=5;
    const maxDemeritPoints=20;

    if (speed<speedLimit){
        console.log("ok");
        return;
    }
}
    const Demeritpoints = Math.floor ((speed-speedLimit)/KmPerDemeritPoints);{

    if(demeritpoints>maxDemeritPoints){
            console.log("license suspended");
    }else{
            console.log(demeritpoints);
    }
    
}