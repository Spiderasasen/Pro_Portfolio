import contact from '../data/contact.json';

function Contact_card(){
    {contact.map((item) =>(
        <div key={item.id} className="contact_card">
            <h3>{item.name}</h3>
            <a href={item.link}></a>
        </div>
    ))}
}
export default Contact_card;