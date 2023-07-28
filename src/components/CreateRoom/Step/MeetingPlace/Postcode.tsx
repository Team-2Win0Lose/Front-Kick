import React from "react";
import DaumPostcode from "react-daum-postcode";

const Postcode: React.FC = () =>{

    const completeHandler = (data:any) =>{
        console.log(data);
    }
    return(
        <div>
            <DaumPostcode 
                onComplete={completeHandler}
            />
        </div>
    );
}

export default Postcode;