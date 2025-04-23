import "./member.css";

export function Member(props){
    const membername = props.name || "Danger";
    const membercity = props.city || "Unknown";
  return (
    <div class = "member-card">
      <h2>{membername}</h2>
      <p>{membercity}</p>
    </div>
  );
}  
  
