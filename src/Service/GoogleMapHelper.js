import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from 'react';

export default function GoogleMap(){
    return(
        <>
            <Wrapper apiKey={""}>
                <MyMapComponent /> 
            </Wrapper>
        </>
    );
}


function MyMapComponent()
{
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => 
    {
        new window.google.maps.Map(ref.current, {
            center:{lat:-34, lng:150},
            zoom:8,
        });
    });

    return <div ref={ref} style={{height:'40px'}} id="map"/>
}