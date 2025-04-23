
import { useState } from 'react';
import { Member } from '../../Member';
import StyledButton from '../StyledButton/StyledButton';
import './MemberList.css' 
import ReactConfetti from 'react-confetti';


    const People = [
        { name: "samrat", city: "Hyderabad" },
        { name: "saketh", city: "Bhongir" },
        { name: "bablu", city: "USA" },
        { name: "jaan", city: "America" },
        { name: "ravi", city: "Chennai" },
        { name: "mohan", city: "Delhi" },
        { name: "teja", city: "Mumbai" },
        { name: "raju", city: "Bangalore" },
        { name: "kiran", city: "Kolkata" },
        { name: "suma", city: "Pune" },
        { name: "geetha", city: "Ahmedabad" },
        { name: "priya", city: "Lucknow" },
        { name: "rahul", city: "Nagpur" },
        { name: "naveen", city: "Vijayawada" },
        { name: "deepa", city: "Visakhapatnam" },
        { name: "srinivas", city: "Rajahmundry" },
        { name: "lavanya", city: "Warangal" },
        { name: "charan", city: "Nizamabad" },
        { name: "sindhu", city: "Guntur" },
        { name: "anil", city: "Tirupati" },
        { name: "bhavana", city: "Kurnool" },
        { name: "vinay", city: "Nellore" },
        { name: "rekha", city: "Karimnagar" },
        { name: "suresh", city: "Khammam" },
        { name: "sruthi", city: "Medak" },
        { name: "harsha", city: "Chicago" },
        { name: "vamsi", city: "San Francisco" },
        { name: "karthik", city: "New York" },
        { name: "divya", city: "Dallas" }
    ];

  

    

    function MemberList(){
        const [luckyperson, setluckyperson] = useState("")
        const [IsLoading, setIsLoading] = useState(false)
        const [showceleb, setshowceleb] = useState(false)
        function pickperson(){
            setIsLoading(true)
            // setshowceleb(true)
            console.log("pick a person: ");
            const RandomMember = Math.floor(Math.random() * People.length)
            console.log("random", RandomMember)
            // console.log(People[RandomMember].name);
            const person = People[RandomMember];
            console.log(`${person.name} from ${person.city}`);
            const luckyperson = `${person.name} from ${person.city}`;
            setTimeout(function(){
                setluckyperson(luckyperson);
                setIsLoading(false);
                setshowceleb(true);
            },5000);
            
        }
    return(
        <>
            { showceleb &&  <ReactConfetti numberOfPieces={1000}/>}
        <div>
            
            <h2>Members</h2>
           
            <div className = "member-container">
                    {People.map(function(member){
                    return <Member name = {member.name} city = {member.city}/>
                })}
            </div>
            <div class="flex-center">
                { IsLoading && <h3>Loading ..</h3>}
                <h2>{luckyperson}</h2>
                <StyledButton text="Lucky Draw" onClick={pickperson}/>
            </div>
        </div>
        </>
    )
}

export default MemberList