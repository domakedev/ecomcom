import React from 'react'
import PlateCard from './PlateCard'
import {Section, Title} from "../generalStyleds"



const Menu = ({FakeData}) => {
    return (
        <Section>
            <Title>
            To Go Menu
            </Title>


            {FakeData?.map((e, i)=>(
                
                <PlateCard 
                key={i} 
                plateName={e.plateName} 
                platePrice={e.platePrice}  
                plateImg={e.plateImg} />
           
           ))}


        

        </Section>
    )
}

export default Menu
